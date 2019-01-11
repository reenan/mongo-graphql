/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./db/graphql.js":
/*!***********************!*\
  !*** ./db/graphql.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var graphql_compose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-compose */ \"./node_modules/graphql-compose/mjs/index.mjs\");\n/* harmony import */ var _schema_peopleSchema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./schema/peopleSchema */ \"./db/schema/peopleSchema.js\");\n\n\n\ngraphql_compose__WEBPACK_IMPORTED_MODULE_0__[\"schemaComposer\"].Query.addFields({\n    peopleById: _schema_peopleSchema__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getResolver('findById'),\n    peopleByIds: _schema_peopleSchema__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getResolver('findByIds'),\n    peopleOne: _schema_peopleSchema__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getResolver('findOne'),\n    peopleMany: _schema_peopleSchema__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getResolver('findMany'),\n    peopleCount: _schema_peopleSchema__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getResolver('count')\n});\n\ngraphql_compose__WEBPACK_IMPORTED_MODULE_0__[\"schemaComposer\"].Mutation.addFields({\n    peopleCreateOne: _schema_peopleSchema__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getResolver('createOne'),\n    // peopleCreateMany: People.getResolver('createMany'),\n    peopleUpdateById: _schema_peopleSchema__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getResolver('updateById'),\n    peopleUpdateOne: _schema_peopleSchema__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getResolver('updateOne'),\n    peopleUpdateMany: _schema_peopleSchema__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getResolver('updateMany'),\n    peopleRemoveById: _schema_peopleSchema__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getResolver('removeById'),\n    peopleRemoveOne: _schema_peopleSchema__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getResolver('removeOne'),\n    peopleRemoveMany: _schema_peopleSchema__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getResolver('removeMany')\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (graphql_compose__WEBPACK_IMPORTED_MODULE_0__[\"schemaComposer\"].buildSchema());\n\n//# sourceURL=webpack:///./db/graphql.js?");

/***/ }),

/***/ "./db/model/peopleModel.js":
/*!*********************************!*\
  !*** ./db/model/peopleModel.js ***!
  \*********************************/
/*! exports provided: findPeople, insertPeople, findPeopleById, updatePeople, deletePeople */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"findPeople\", function() { return findPeople; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"insertPeople\", function() { return insertPeople; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"findPeopleById\", function() { return findPeopleById; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updatePeople\", function() { return updatePeople; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deletePeople\", function() { return deletePeople; });\n/* harmony import */ var _schema_peopleSchema__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../schema/peopleSchema */ \"./db/schema/peopleSchema.js\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongoose */ \"./node_modules/mongoose/index.js\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst PeopleModel = Object(mongoose__WEBPACK_IMPORTED_MODULE_1__[\"model\"])('People', _schema_peopleSchema__WEBPACK_IMPORTED_MODULE_0__[\"peopleSchema\"]);\n\nconst findPeople = () => {\n    return PeopleModel.find({}).sort({ name: 1 });\n};\n\nconst insertPeople = people => {\n    const newPeople = new PeopleModel(people);\n    return newPeople.save();\n};\n\nconst findPeopleById = peopleId => {\n    return PeopleModel.findById(peopleId);\n};\n\nconst updatePeople = async (peopleId, people) => {\n    const peopleToUpdate = await findPeopleById(peopleId);\n\n    peopleToUpdate.name = people.name;\n    peopleToUpdate.age = people.age;\n\n    return peopleToUpdate.save();\n};\n\nconst deletePeople = async peopleId => {\n    const people = await findPeopleById(peopleId);\n    return people.remove();\n};\n\n\n\n//# sourceURL=webpack:///./db/model/peopleModel.js?");

/***/ }),

/***/ "./db/mongo.js":
/*!*********************!*\
  !*** ./db/mongo.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst mongoose = __webpack_require__(/*! mongoose */ \"./node_modules/mongoose/index.js\");\nconst url = 'mongodb://localhost:27017/people';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (async () => {\n  return mongoose.connect(url, { useNewUrlParser: true });\n});\n\n//# sourceURL=webpack:///./db/mongo.js?");

/***/ }),

/***/ "./db/schema/peopleSchema.js":
/*!***********************************!*\
  !*** ./db/schema/peopleSchema.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"./node_modules/mongoose/index.js\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var graphql_compose_mongoose_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-compose-mongoose/es */ \"./node_modules/graphql-compose-mongoose/es/index.js\");\n\n\n\nconst peopleSchema = Object(mongoose__WEBPACK_IMPORTED_MODULE_0__[\"Schema\"])({\n    name: String,\n    age: Number\n});\n\nconst peopleModel = Object(mongoose__WEBPACK_IMPORTED_MODULE_0__[\"model\"])('People', peopleSchema);\n\nconst customizationOptions = {}; // left it empty for simplicity, described below\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(graphql_compose_mongoose_es__WEBPACK_IMPORTED_MODULE_1__[\"composeWithMongoose\"])(peopleModel, customizationOptions));\n\n//# sourceURL=webpack:///./db/schema/peopleSchema.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"./node_modules/express/index.js\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cors */ \"./node_modules/cors/lib/index.js\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! body-parser */ \"./node_modules/body-parser/index.js\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var express_graphql__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! express-graphql */ \"./node_modules/express-graphql/dist/index.js\");\n/* harmony import */ var express_graphql__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(express_graphql__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _routes_peopleRouter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./routes/peopleRouter */ \"./routes/peopleRouter.js\");\n/* harmony import */ var _db_mongo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./db/mongo */ \"./db/mongo.js\");\n/* harmony import */ var _db_graphql__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./db/graphql */ \"./db/graphql.js\");\n\n\n\n\n\n\n\n\n\n\nconst app = express__WEBPACK_IMPORTED_MODULE_0___default()();\nconst port = process.env.PORT || 8081;\n\napp.use(cors__WEBPACK_IMPORTED_MODULE_1___default()());\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_2___default.a.json());\napp.use('/people', _routes_peopleRouter__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n\napp.use('/graphql', express_graphql__WEBPACK_IMPORTED_MODULE_3___default()({\n    schema: _db_graphql__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n    graphiql: true\n}));\n\napp.listen(port, async () => {\n    console.log(`server running at ${port}`);\n\n    await Object(_db_mongo__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n    console.log('connected to mongodb');\n});\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./node_modules/body-parser/index.js":
/*!*******************************************!*\
  !*** ./node_modules/body-parser/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open '/Users/sap/dev/test-js/server/node_modules/body-parser/index.js'\");\n\n//# sourceURL=webpack:///./node_modules/body-parser/index.js?");

/***/ }),

/***/ "./node_modules/cors/lib/index.js":
/*!****************************************!*\
  !*** ./node_modules/cors/lib/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open '/Users/sap/dev/test-js/server/node_modules/cors/lib/index.js'\");\n\n//# sourceURL=webpack:///./node_modules/cors/lib/index.js?");

/***/ }),

/***/ "./node_modules/express-graphql/dist/index.js":
/*!****************************************************!*\
  !*** ./node_modules/express-graphql/dist/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open '/Users/sap/dev/test-js/server/node_modules/express-graphql/dist/index.js'\");\n\n//# sourceURL=webpack:///./node_modules/express-graphql/dist/index.js?");

/***/ }),

/***/ "./node_modules/express/index.js":
/*!***************************************!*\
  !*** ./node_modules/express/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open '/Users/sap/dev/test-js/server/node_modules/express/index.js'\");\n\n//# sourceURL=webpack:///./node_modules/express/index.js?");

/***/ }),

/***/ "./node_modules/graphql-compose-mongoose/es/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/graphql-compose-mongoose/es/index.js ***!
  \***********************************************************/
/*! exports provided: default, ComplexTypes, dotPathsToEmbedded, getFieldsFromModel, convertModelToGraphQL, convertSchemaToGraphQL, convertFieldToGraphQL, deriveComplexType, scalarToGraphQL, arrayToGraphQL, embeddedToGraphQL, enumToGraphQL, documentArrayToGraphQL, referenceToGraphQL, composeWithMongoose, GraphQLMongoID */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open '/Users/sap/dev/test-js/server/node_modules/graphql-compose-mongoose/es/index.js'\");\n\n//# sourceURL=webpack:///./node_modules/graphql-compose-mongoose/es/index.js?");

/***/ }),

/***/ "./node_modules/graphql-compose/mjs/index.mjs":
/*!****************************************************!*\
  !*** ./node_modules/graphql-compose/mjs/index.mjs ***!
  \****************************************************/
/*! exports provided: graphql, GQC, schemaComposer, SchemaComposer, TypeComposer, InputTypeComposer, EnumTypeComposer, InterfaceTypeComposer, Resolver, TypeMapper, TypeComposerClass, InputTypeComposerClass, EnumTypeComposerClass, InterfaceTypeComposerClass, ResolverClass, TypeStorage, GraphQLDate, GraphQLBuffer, GraphQLGeneric, GraphQLJSON, getProjectionFromAST, getFlatProjectionFromAST, toInputObjectType, convertInputObjectField, resolveMaybeThunk, camelCase, getPluralName, upperFirst, clearName, omit, only, inspect, isString, isObject, isFunction, getGraphqlVersion, graphqlVersion, toDottedObject, deepmerge, filterByDotPaths */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open '/Users/sap/dev/test-js/server/node_modules/graphql-compose/mjs/index.mjs'\");\n\n//# sourceURL=webpack:///./node_modules/graphql-compose/mjs/index.mjs?");

/***/ }),

/***/ "./node_modules/mongoose/index.js":
/*!****************************************!*\
  !*** ./node_modules/mongoose/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open '/Users/sap/dev/test-js/server/node_modules/mongoose/index.js'\");\n\n//# sourceURL=webpack:///./node_modules/mongoose/index.js?");

/***/ }),

/***/ "./routes/peopleRouter.js":
/*!********************************!*\
  !*** ./routes/peopleRouter.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"./node_modules/express/index.js\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _db_model_peopleModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../db/model/peopleModel */ \"./db/model/peopleModel.js\");\n\n\n\n\nconst router = new express__WEBPACK_IMPORTED_MODULE_0__[\"Router\"]();\n\nrouter.get('/', async ({ res }) => {\n    const people = await Object(_db_model_peopleModel__WEBPACK_IMPORTED_MODULE_1__[\"findPeople\"])();\n    res.send(people);\n});\n\nrouter.post('/', async (req, res) => {\n    console.log('req.body:', req.body);\n    try {\n        const people = await Object(_db_model_peopleModel__WEBPACK_IMPORTED_MODULE_1__[\"insertPeople\"])(req.body);\n        res.status(201).send(people);\n    } catch (err) {\n        res.status(500).send(err.message);\n    }\n});\n\nrouter.get('/:peopleId', async (req, res) => {\n    const { peopleId } = req.params;\n    try {\n        const people = await Object(_db_model_peopleModel__WEBPACK_IMPORTED_MODULE_1__[\"findPeopleById\"])(peopleId);\n        res.send(people);\n    } catch (err) {\n        res.sendStatus(404);\n    }\n});\n\nrouter.put('/:peopleId', async (req, res) => {\n    const { peopleId } = req.params;\n\n    try {\n        const people = await Object(_db_model_peopleModel__WEBPACK_IMPORTED_MODULE_1__[\"updatePeople\"])(peopleId, req.body);\n        res.send(people);\n    } catch (err) {\n        res.status(500).send(err.message);\n    }\n});\n\nrouter.delete('/:peopleId', async (req, res) => {\n    const { peopleId } = req.params;\n\n    try {\n        await Object(_db_model_peopleModel__WEBPACK_IMPORTED_MODULE_1__[\"deletePeople\"])(peopleId);\n        res.sendStatus(200);\n    } catch (err) {\n        res.status(500).send(err.message);\n    }\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./routes/peopleRouter.js?");

/***/ })

/******/ });