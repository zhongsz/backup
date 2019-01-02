var fs = require('fs');
var express = require('express');
var U = require('./utils');
var app = express();

// CORS
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'content-type, x-requested-with, x-auth-token');
  res.header('Access-Control-Allow-Methods','PUT,POST,GET,DELETE,OPTIONS');
  res.header('X-Powered-By',' 3.2.1')
  res.header('Content-Type', 'application/json;charset=utf-8');
  next();
});

app.get('/api/SmartFind/Search', function (req, res) {
  var query = req.query,
      path = __dirname + '/stubData/Search',
      fileData = JSON.parse(fs.readFileSync(path));

  var pageIndex = +query.pageIndex,
      pageSize = +query.pageSize,
      categoryId = query.categoryId,
      solutionId = query.solutionId,
      systemId = query.systemId,
      keyword = query.keyword,
      segment = query.segment,
      filters = U.jsonObjToList(query.filters),
      results = fileData.data.results,
      begin = (pageIndex - 1) * pageSize,
      end = pageIndex * pageSize,
      dataSlice = results.slice(begin, end);

  fileData.data.results = dataSlice;
  fileData.data.params.pageIndex = pageIndex;
  fileData.data.params.pageSize = pageSize;

  if (categoryId) {
    var categoties = JSON.parse(fs.readFileSync(__dirname + '/stubData/GetCategory')),
        categoryTitle = ''

    categoties.data.forEach(d => {
      d.children.forEach(child => {
        if (child.id === categoryId) {
          categoryTitle = child.title
        }
      })
    })

    fileData.data.params.category = {
      "id": categoryId,
      "title": categoryTitle
    }
  }

  if (solutionId) {
    var solutions = JSON.parse(fs.readFileSync(__dirname + '/stubData/GetSolutionCategory')),
        solutionTitle = ''

    solutions.data.forEach(d => {
      if (d.id === solutionId) {
        solutionTitle = d.title
      }
    })

    fileData.data.params.solution = {
      "id": solutionId,
      "title": solutionTitle
    }
  }

  if (systemId) {
    var getData = path => JSON.parse(fs.readFileSync(__dirname + '/stubData/' + path)).data,
        l5Systems = getData('GetL5System')

    var paths = [ 'GetSystem_318', 'GetSystem_466', 'GetSystem_884', 'GetSystem_885' ],
        l4SystemDataset = paths.map(getData),
        getL4SystemChildren = data => data.children,
        l4Systems = U.concatMap(U.curriedConcatMap(getL4SystemChildren), l4SystemDataset)
        allSystems = l4Systems.concat(l5Systems)

    fileData.data.params.system = allSystems.filter(system => system.id === systemId)[0]
  }

  if (segment) {
    fileData.data.params.segment = segment;
  }

  if (keyword) {
    fileData.data.params.keyword = keyword;
  }

  if (!categoryId) {
    fileData.data.filters = [];
  } else {
    fileData.data.filters = U.shuffle(fileData.data.filters);
    fileData.data.params.filters = filters
  }

  U.delayedResponse(res, fileData);
})

app.get('/api/SmartFind/GetL5System', function (req, res) {
  var path = __dirname + '/stubData/GetL5System',
      fileData = JSON.parse(fs.readFileSync(path));

  fileData.data = U.shuffle(fileData.data);
  U.delayedResponse(res, fileData);
})

app.get('/api/SmartFind/GetSystem', function (req, res) {
  var systemId = req.query.systemId,
      basePath = __dirname + '/stubData/GetSystem',
      path = systemId ? basePath + '_' + systemId : basePath,
      fileData = JSON.parse(fs.readFileSync(path));

  U.delayedResponse(res, fileData);
})

app.all('/api/Review/:apiName', function (req, res) {
  var apiName = req.params.apiName,
      path = __dirname + '/stubData/' + apiName,
      fileData = JSON.parse(fs.readFileSync(path));

  U.delayedResponse(res, fileData);
});

app.listen(8080);

console.log('Mock server is now running on port 8080');
