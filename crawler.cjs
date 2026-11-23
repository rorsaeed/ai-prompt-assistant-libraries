"use strict";
var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// tools/library-mirror/cli.ts
var import_node_path2 = require("node:path");
var import_node_util = require("node:util");

// node_modules/zod/v3/external.js
var external_exports = {};
__export(external_exports, {
  BRAND: () => BRAND,
  DIRTY: () => DIRTY,
  EMPTY_PATH: () => EMPTY_PATH,
  INVALID: () => INVALID,
  NEVER: () => NEVER,
  OK: () => OK,
  ParseStatus: () => ParseStatus,
  Schema: () => ZodType,
  ZodAny: () => ZodAny,
  ZodArray: () => ZodArray,
  ZodBigInt: () => ZodBigInt,
  ZodBoolean: () => ZodBoolean,
  ZodBranded: () => ZodBranded,
  ZodCatch: () => ZodCatch,
  ZodDate: () => ZodDate,
  ZodDefault: () => ZodDefault,
  ZodDiscriminatedUnion: () => ZodDiscriminatedUnion,
  ZodEffects: () => ZodEffects,
  ZodEnum: () => ZodEnum,
  ZodError: () => ZodError,
  ZodFirstPartyTypeKind: () => ZodFirstPartyTypeKind,
  ZodFunction: () => ZodFunction,
  ZodIntersection: () => ZodIntersection,
  ZodIssueCode: () => ZodIssueCode,
  ZodLazy: () => ZodLazy,
  ZodLiteral: () => ZodLiteral,
  ZodMap: () => ZodMap,
  ZodNaN: () => ZodNaN,
  ZodNativeEnum: () => ZodNativeEnum,
  ZodNever: () => ZodNever,
  ZodNull: () => ZodNull,
  ZodNullable: () => ZodNullable,
  ZodNumber: () => ZodNumber,
  ZodObject: () => ZodObject,
  ZodOptional: () => ZodOptional,
  ZodParsedType: () => ZodParsedType,
  ZodPipeline: () => ZodPipeline,
  ZodPromise: () => ZodPromise,
  ZodReadonly: () => ZodReadonly,
  ZodRecord: () => ZodRecord,
  ZodSchema: () => ZodType,
  ZodSet: () => ZodSet,
  ZodString: () => ZodString,
  ZodSymbol: () => ZodSymbol,
  ZodTransformer: () => ZodEffects,
  ZodTuple: () => ZodTuple,
  ZodType: () => ZodType,
  ZodUndefined: () => ZodUndefined,
  ZodUnion: () => ZodUnion,
  ZodUnknown: () => ZodUnknown,
  ZodVoid: () => ZodVoid,
  addIssueToContext: () => addIssueToContext,
  any: () => anyType,
  array: () => arrayType,
  bigint: () => bigIntType,
  boolean: () => booleanType,
  coerce: () => coerce,
  custom: () => custom,
  date: () => dateType,
  datetimeRegex: () => datetimeRegex,
  defaultErrorMap: () => en_default,
  discriminatedUnion: () => discriminatedUnionType,
  effect: () => effectsType,
  enum: () => enumType,
  function: () => functionType,
  getErrorMap: () => getErrorMap,
  getParsedType: () => getParsedType,
  instanceof: () => instanceOfType,
  intersection: () => intersectionType,
  isAborted: () => isAborted,
  isAsync: () => isAsync,
  isDirty: () => isDirty,
  isValid: () => isValid,
  late: () => late,
  lazy: () => lazyType,
  literal: () => literalType,
  makeIssue: () => makeIssue,
  map: () => mapType,
  nan: () => nanType,
  nativeEnum: () => nativeEnumType,
  never: () => neverType,
  null: () => nullType,
  nullable: () => nullableType,
  number: () => numberType,
  object: () => objectType,
  objectUtil: () => objectUtil,
  oboolean: () => oboolean,
  onumber: () => onumber,
  optional: () => optionalType,
  ostring: () => ostring,
  pipeline: () => pipelineType,
  preprocess: () => preprocessType,
  promise: () => promiseType,
  quotelessJson: () => quotelessJson,
  record: () => recordType,
  set: () => setType,
  setErrorMap: () => setErrorMap,
  strictObject: () => strictObjectType,
  string: () => stringType,
  symbol: () => symbolType,
  transformer: () => effectsType,
  tuple: () => tupleType,
  undefined: () => undefinedType,
  union: () => unionType,
  unknown: () => unknownType,
  util: () => util,
  void: () => voidType
});

// node_modules/zod/v3/helpers/util.js
var util;
(function(util2) {
  util2.assertEqual = (_) => {
  };
  function assertIs(_arg) {
  }
  util2.assertIs = assertIs;
  function assertNever(_x) {
    throw new Error();
  }
  util2.assertNever = assertNever;
  util2.arrayToEnum = (items) => {
    const obj = {};
    for (const item of items) {
      obj[item] = item;
    }
    return obj;
  };
  util2.getValidEnumValues = (obj) => {
    const validKeys = util2.objectKeys(obj).filter((k) => typeof obj[obj[k]] !== "number");
    const filtered = {};
    for (const k of validKeys) {
      filtered[k] = obj[k];
    }
    return util2.objectValues(filtered);
  };
  util2.objectValues = (obj) => {
    return util2.objectKeys(obj).map(function(e) {
      return obj[e];
    });
  };
  util2.objectKeys = typeof Object.keys === "function" ? (obj) => Object.keys(obj) : (object) => {
    const keys = [];
    for (const key in object) {
      if (Object.prototype.hasOwnProperty.call(object, key)) {
        keys.push(key);
      }
    }
    return keys;
  };
  util2.find = (arr, checker) => {
    for (const item of arr) {
      if (checker(item))
        return item;
    }
    return void 0;
  };
  util2.isInteger = typeof Number.isInteger === "function" ? (val) => Number.isInteger(val) : (val) => typeof val === "number" && Number.isFinite(val) && Math.floor(val) === val;
  function joinValues(array, separator = " | ") {
    return array.map((val) => typeof val === "string" ? `'${val}'` : val).join(separator);
  }
  util2.joinValues = joinValues;
  util2.jsonStringifyReplacer = (_, value) => {
    if (typeof value === "bigint") {
      return value.toString();
    }
    return value;
  };
})(util || (util = {}));
var objectUtil;
(function(objectUtil2) {
  objectUtil2.mergeShapes = (first, second) => {
    return {
      ...first,
      ...second
      // second overwrites first
    };
  };
})(objectUtil || (objectUtil = {}));
var ZodParsedType = util.arrayToEnum([
  "string",
  "nan",
  "number",
  "integer",
  "float",
  "boolean",
  "date",
  "bigint",
  "symbol",
  "function",
  "undefined",
  "null",
  "array",
  "object",
  "unknown",
  "promise",
  "void",
  "never",
  "map",
  "set"
]);
var getParsedType = (data) => {
  const t = typeof data;
  switch (t) {
    case "undefined":
      return ZodParsedType.undefined;
    case "string":
      return ZodParsedType.string;
    case "number":
      return Number.isNaN(data) ? ZodParsedType.nan : ZodParsedType.number;
    case "boolean":
      return ZodParsedType.boolean;
    case "function":
      return ZodParsedType.function;
    case "bigint":
      return ZodParsedType.bigint;
    case "symbol":
      return ZodParsedType.symbol;
    case "object":
      if (Array.isArray(data)) {
        return ZodParsedType.array;
      }
      if (data === null) {
        return ZodParsedType.null;
      }
      if (data.then && typeof data.then === "function" && data.catch && typeof data.catch === "function") {
        return ZodParsedType.promise;
      }
      if (typeof Map !== "undefined" && data instanceof Map) {
        return ZodParsedType.map;
      }
      if (typeof Set !== "undefined" && data instanceof Set) {
        return ZodParsedType.set;
      }
      if (typeof Date !== "undefined" && data instanceof Date) {
        return ZodParsedType.date;
      }
      return ZodParsedType.object;
    default:
      return ZodParsedType.unknown;
  }
};

// node_modules/zod/v3/ZodError.js
var ZodIssueCode = util.arrayToEnum([
  "invalid_type",
  "invalid_literal",
  "custom",
  "invalid_union",
  "invalid_union_discriminator",
  "invalid_enum_value",
  "unrecognized_keys",
  "invalid_arguments",
  "invalid_return_type",
  "invalid_date",
  "invalid_string",
  "too_small",
  "too_big",
  "invalid_intersection_types",
  "not_multiple_of",
  "not_finite"
]);
var quotelessJson = (obj) => {
  const json = JSON.stringify(obj, null, 2);
  return json.replace(/"([^"]+)":/g, "$1:");
};
var ZodError = class _ZodError extends Error {
  get errors() {
    return this.issues;
  }
  constructor(issues) {
    super();
    this.issues = [];
    this.addIssue = (sub) => {
      this.issues = [...this.issues, sub];
    };
    this.addIssues = (subs = []) => {
      this.issues = [...this.issues, ...subs];
    };
    const actualProto = new.target.prototype;
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(this, actualProto);
    } else {
      this.__proto__ = actualProto;
    }
    this.name = "ZodError";
    this.issues = issues;
  }
  format(_mapper) {
    const mapper = _mapper || function(issue) {
      return issue.message;
    };
    const fieldErrors = { _errors: [] };
    const processError = (error) => {
      for (const issue of error.issues) {
        if (issue.code === "invalid_union") {
          issue.unionErrors.map(processError);
        } else if (issue.code === "invalid_return_type") {
          processError(issue.returnTypeError);
        } else if (issue.code === "invalid_arguments") {
          processError(issue.argumentsError);
        } else if (issue.path.length === 0) {
          fieldErrors._errors.push(mapper(issue));
        } else {
          let curr = fieldErrors;
          let i = 0;
          while (i < issue.path.length) {
            const el = issue.path[i];
            const terminal = i === issue.path.length - 1;
            if (!terminal) {
              curr[el] = curr[el] || { _errors: [] };
            } else {
              curr[el] = curr[el] || { _errors: [] };
              curr[el]._errors.push(mapper(issue));
            }
            curr = curr[el];
            i++;
          }
        }
      }
    };
    processError(this);
    return fieldErrors;
  }
  static assert(value) {
    if (!(value instanceof _ZodError)) {
      throw new Error(`Not a ZodError: ${value}`);
    }
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, util.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(mapper = (issue) => issue.message) {
    const fieldErrors = {};
    const formErrors = [];
    for (const sub of this.issues) {
      if (sub.path.length > 0) {
        const firstEl = sub.path[0];
        fieldErrors[firstEl] = fieldErrors[firstEl] || [];
        fieldErrors[firstEl].push(mapper(sub));
      } else {
        formErrors.push(mapper(sub));
      }
    }
    return { formErrors, fieldErrors };
  }
  get formErrors() {
    return this.flatten();
  }
};
ZodError.create = (issues) => {
  const error = new ZodError(issues);
  return error;
};

// node_modules/zod/v3/locales/en.js
var errorMap = (issue, _ctx) => {
  let message;
  switch (issue.code) {
    case ZodIssueCode.invalid_type:
      if (issue.received === ZodParsedType.undefined) {
        message = "Required";
      } else {
        message = `Expected ${issue.expected}, received ${issue.received}`;
      }
      break;
    case ZodIssueCode.invalid_literal:
      message = `Invalid literal value, expected ${JSON.stringify(issue.expected, util.jsonStringifyReplacer)}`;
      break;
    case ZodIssueCode.unrecognized_keys:
      message = `Unrecognized key(s) in object: ${util.joinValues(issue.keys, ", ")}`;
      break;
    case ZodIssueCode.invalid_union:
      message = `Invalid input`;
      break;
    case ZodIssueCode.invalid_union_discriminator:
      message = `Invalid discriminator value. Expected ${util.joinValues(issue.options)}`;
      break;
    case ZodIssueCode.invalid_enum_value:
      message = `Invalid enum value. Expected ${util.joinValues(issue.options)}, received '${issue.received}'`;
      break;
    case ZodIssueCode.invalid_arguments:
      message = `Invalid function arguments`;
      break;
    case ZodIssueCode.invalid_return_type:
      message = `Invalid function return type`;
      break;
    case ZodIssueCode.invalid_date:
      message = `Invalid date`;
      break;
    case ZodIssueCode.invalid_string:
      if (typeof issue.validation === "object") {
        if ("includes" in issue.validation) {
          message = `Invalid input: must include "${issue.validation.includes}"`;
          if (typeof issue.validation.position === "number") {
            message = `${message} at one or more positions greater than or equal to ${issue.validation.position}`;
          }
        } else if ("startsWith" in issue.validation) {
          message = `Invalid input: must start with "${issue.validation.startsWith}"`;
        } else if ("endsWith" in issue.validation) {
          message = `Invalid input: must end with "${issue.validation.endsWith}"`;
        } else {
          util.assertNever(issue.validation);
        }
      } else if (issue.validation !== "regex") {
        message = `Invalid ${issue.validation}`;
      } else {
        message = "Invalid";
      }
      break;
    case ZodIssueCode.too_small:
      if (issue.type === "array")
        message = `Array must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `more than`} ${issue.minimum} element(s)`;
      else if (issue.type === "string")
        message = `String must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `over`} ${issue.minimum} character(s)`;
      else if (issue.type === "number")
        message = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;
      else if (issue.type === "bigint")
        message = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;
      else if (issue.type === "date")
        message = `Date must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${new Date(Number(issue.minimum))}`;
      else
        message = "Invalid input";
      break;
    case ZodIssueCode.too_big:
      if (issue.type === "array")
        message = `Array must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `less than`} ${issue.maximum} element(s)`;
      else if (issue.type === "string")
        message = `String must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `under`} ${issue.maximum} character(s)`;
      else if (issue.type === "number")
        message = `Number must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
      else if (issue.type === "bigint")
        message = `BigInt must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
      else if (issue.type === "date")
        message = `Date must be ${issue.exact ? `exactly` : issue.inclusive ? `smaller than or equal to` : `smaller than`} ${new Date(Number(issue.maximum))}`;
      else
        message = "Invalid input";
      break;
    case ZodIssueCode.custom:
      message = `Invalid input`;
      break;
    case ZodIssueCode.invalid_intersection_types:
      message = `Intersection results could not be merged`;
      break;
    case ZodIssueCode.not_multiple_of:
      message = `Number must be a multiple of ${issue.multipleOf}`;
      break;
    case ZodIssueCode.not_finite:
      message = "Number must be finite";
      break;
    default:
      message = _ctx.defaultError;
      util.assertNever(issue);
  }
  return { message };
};
var en_default = errorMap;

// node_modules/zod/v3/errors.js
var overrideErrorMap = en_default;
function setErrorMap(map) {
  overrideErrorMap = map;
}
function getErrorMap() {
  return overrideErrorMap;
}

// node_modules/zod/v3/helpers/parseUtil.js
var makeIssue = (params) => {
  const { data, path, errorMaps, issueData } = params;
  const fullPath = [...path, ...issueData.path || []];
  const fullIssue = {
    ...issueData,
    path: fullPath
  };
  if (issueData.message !== void 0) {
    return {
      ...issueData,
      path: fullPath,
      message: issueData.message
    };
  }
  let errorMessage = "";
  const maps = errorMaps.filter((m) => !!m).slice().reverse();
  for (const map of maps) {
    errorMessage = map(fullIssue, { data, defaultError: errorMessage }).message;
  }
  return {
    ...issueData,
    path: fullPath,
    message: errorMessage
  };
};
var EMPTY_PATH = [];
function addIssueToContext(ctx, issueData) {
  const overrideMap = getErrorMap();
  const issue = makeIssue({
    issueData,
    data: ctx.data,
    path: ctx.path,
    errorMaps: [
      ctx.common.contextualErrorMap,
      // contextual error map is first priority
      ctx.schemaErrorMap,
      // then schema-bound map if available
      overrideMap,
      // then global override map
      overrideMap === en_default ? void 0 : en_default
      // then global default map
    ].filter((x) => !!x)
  });
  ctx.common.issues.push(issue);
}
var ParseStatus = class _ParseStatus {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    if (this.value === "valid")
      this.value = "dirty";
  }
  abort() {
    if (this.value !== "aborted")
      this.value = "aborted";
  }
  static mergeArray(status, results) {
    const arrayValue = [];
    for (const s of results) {
      if (s.status === "aborted")
        return INVALID;
      if (s.status === "dirty")
        status.dirty();
      arrayValue.push(s.value);
    }
    return { status: status.value, value: arrayValue };
  }
  static async mergeObjectAsync(status, pairs) {
    const syncPairs = [];
    for (const pair of pairs) {
      const key = await pair.key;
      const value = await pair.value;
      syncPairs.push({
        key,
        value
      });
    }
    return _ParseStatus.mergeObjectSync(status, syncPairs);
  }
  static mergeObjectSync(status, pairs) {
    const finalObject = {};
    for (const pair of pairs) {
      const { key, value } = pair;
      if (key.status === "aborted")
        return INVALID;
      if (value.status === "aborted")
        return INVALID;
      if (key.status === "dirty")
        status.dirty();
      if (value.status === "dirty")
        status.dirty();
      if (key.value !== "__proto__" && (typeof value.value !== "undefined" || pair.alwaysSet)) {
        finalObject[key.value] = value.value;
      }
    }
    return { status: status.value, value: finalObject };
  }
};
var INVALID = Object.freeze({
  status: "aborted"
});
var DIRTY = (value) => ({ status: "dirty", value });
var OK = (value) => ({ status: "valid", value });
var isAborted = (x) => x.status === "aborted";
var isDirty = (x) => x.status === "dirty";
var isValid = (x) => x.status === "valid";
var isAsync = (x) => typeof Promise !== "undefined" && x instanceof Promise;

// node_modules/zod/v3/helpers/errorUtil.js
var errorUtil;
(function(errorUtil2) {
  errorUtil2.errToObj = (message) => typeof message === "string" ? { message } : message || {};
  errorUtil2.toString = (message) => typeof message === "string" ? message : message?.message;
})(errorUtil || (errorUtil = {}));

// node_modules/zod/v3/types.js
var ParseInputLazyPath = class {
  constructor(parent, value, path, key) {
    this._cachedPath = [];
    this.parent = parent;
    this.data = value;
    this._path = path;
    this._key = key;
  }
  get path() {
    if (!this._cachedPath.length) {
      if (Array.isArray(this._key)) {
        this._cachedPath.push(...this._path, ...this._key);
      } else {
        this._cachedPath.push(...this._path, this._key);
      }
    }
    return this._cachedPath;
  }
};
var handleResult = (ctx, result2) => {
  if (isValid(result2)) {
    return { success: true, data: result2.value };
  } else {
    if (!ctx.common.issues.length) {
      throw new Error("Validation failed but no issues detected.");
    }
    return {
      success: false,
      get error() {
        if (this._error)
          return this._error;
        const error = new ZodError(ctx.common.issues);
        this._error = error;
        return this._error;
      }
    };
  }
};
function processCreateParams(params) {
  if (!params)
    return {};
  const { errorMap: errorMap2, invalid_type_error, required_error, description } = params;
  if (errorMap2 && (invalid_type_error || required_error)) {
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  }
  if (errorMap2)
    return { errorMap: errorMap2, description };
  const customMap = (iss, ctx) => {
    const { message } = params;
    if (iss.code === "invalid_enum_value") {
      return { message: message ?? ctx.defaultError };
    }
    if (typeof ctx.data === "undefined") {
      return { message: message ?? required_error ?? ctx.defaultError };
    }
    if (iss.code !== "invalid_type")
      return { message: ctx.defaultError };
    return { message: message ?? invalid_type_error ?? ctx.defaultError };
  };
  return { errorMap: customMap, description };
}
var ZodType = class {
  get description() {
    return this._def.description;
  }
  _getType(input) {
    return getParsedType(input.data);
  }
  _getOrReturnCtx(input, ctx) {
    return ctx || {
      common: input.parent.common,
      data: input.data,
      parsedType: getParsedType(input.data),
      schemaErrorMap: this._def.errorMap,
      path: input.path,
      parent: input.parent
    };
  }
  _processInputParams(input) {
    return {
      status: new ParseStatus(),
      ctx: {
        common: input.parent.common,
        data: input.data,
        parsedType: getParsedType(input.data),
        schemaErrorMap: this._def.errorMap,
        path: input.path,
        parent: input.parent
      }
    };
  }
  _parseSync(input) {
    const result2 = this._parse(input);
    if (isAsync(result2)) {
      throw new Error("Synchronous parse encountered promise.");
    }
    return result2;
  }
  _parseAsync(input) {
    const result2 = this._parse(input);
    return Promise.resolve(result2);
  }
  parse(data, params) {
    const result2 = this.safeParse(data, params);
    if (result2.success)
      return result2.data;
    throw result2.error;
  }
  safeParse(data, params) {
    const ctx = {
      common: {
        issues: [],
        async: params?.async ?? false,
        contextualErrorMap: params?.errorMap
      },
      path: params?.path || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    const result2 = this._parseSync({ data, path: ctx.path, parent: ctx });
    return handleResult(ctx, result2);
  }
  "~validate"(data) {
    const ctx = {
      common: {
        issues: [],
        async: !!this["~standard"].async
      },
      path: [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    if (!this["~standard"].async) {
      try {
        const result2 = this._parseSync({ data, path: [], parent: ctx });
        return isValid(result2) ? {
          value: result2.value
        } : {
          issues: ctx.common.issues
        };
      } catch (err) {
        if (err?.message?.toLowerCase()?.includes("encountered")) {
          this["~standard"].async = true;
        }
        ctx.common = {
          issues: [],
          async: true
        };
      }
    }
    return this._parseAsync({ data, path: [], parent: ctx }).then((result2) => isValid(result2) ? {
      value: result2.value
    } : {
      issues: ctx.common.issues
    });
  }
  async parseAsync(data, params) {
    const result2 = await this.safeParseAsync(data, params);
    if (result2.success)
      return result2.data;
    throw result2.error;
  }
  async safeParseAsync(data, params) {
    const ctx = {
      common: {
        issues: [],
        contextualErrorMap: params?.errorMap,
        async: true
      },
      path: params?.path || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    const maybeAsyncResult = this._parse({ data, path: ctx.path, parent: ctx });
    const result2 = await (isAsync(maybeAsyncResult) ? maybeAsyncResult : Promise.resolve(maybeAsyncResult));
    return handleResult(ctx, result2);
  }
  refine(check, message) {
    const getIssueProperties = (val) => {
      if (typeof message === "string" || typeof message === "undefined") {
        return { message };
      } else if (typeof message === "function") {
        return message(val);
      } else {
        return message;
      }
    };
    return this._refinement((val, ctx) => {
      const result2 = check(val);
      const setError = () => ctx.addIssue({
        code: ZodIssueCode.custom,
        ...getIssueProperties(val)
      });
      if (typeof Promise !== "undefined" && result2 instanceof Promise) {
        return result2.then((data) => {
          if (!data) {
            setError();
            return false;
          } else {
            return true;
          }
        });
      }
      if (!result2) {
        setError();
        return false;
      } else {
        return true;
      }
    });
  }
  refinement(check, refinementData) {
    return this._refinement((val, ctx) => {
      if (!check(val)) {
        ctx.addIssue(typeof refinementData === "function" ? refinementData(val, ctx) : refinementData);
        return false;
      } else {
        return true;
      }
    });
  }
  _refinement(refinement) {
    return new ZodEffects({
      schema: this,
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      effect: { type: "refinement", refinement }
    });
  }
  superRefine(refinement) {
    return this._refinement(refinement);
  }
  constructor(def) {
    this.spa = this.safeParseAsync;
    this._def = def;
    this.parse = this.parse.bind(this);
    this.safeParse = this.safeParse.bind(this);
    this.parseAsync = this.parseAsync.bind(this);
    this.safeParseAsync = this.safeParseAsync.bind(this);
    this.spa = this.spa.bind(this);
    this.refine = this.refine.bind(this);
    this.refinement = this.refinement.bind(this);
    this.superRefine = this.superRefine.bind(this);
    this.optional = this.optional.bind(this);
    this.nullable = this.nullable.bind(this);
    this.nullish = this.nullish.bind(this);
    this.array = this.array.bind(this);
    this.promise = this.promise.bind(this);
    this.or = this.or.bind(this);
    this.and = this.and.bind(this);
    this.transform = this.transform.bind(this);
    this.brand = this.brand.bind(this);
    this.default = this.default.bind(this);
    this.catch = this.catch.bind(this);
    this.describe = this.describe.bind(this);
    this.pipe = this.pipe.bind(this);
    this.readonly = this.readonly.bind(this);
    this.isNullable = this.isNullable.bind(this);
    this.isOptional = this.isOptional.bind(this);
    this["~standard"] = {
      version: 1,
      vendor: "zod",
      validate: (data) => this["~validate"](data)
    };
  }
  optional() {
    return ZodOptional.create(this, this._def);
  }
  nullable() {
    return ZodNullable.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return ZodArray.create(this);
  }
  promise() {
    return ZodPromise.create(this, this._def);
  }
  or(option) {
    return ZodUnion.create([this, option], this._def);
  }
  and(incoming) {
    return ZodIntersection.create(this, incoming, this._def);
  }
  transform(transform) {
    return new ZodEffects({
      ...processCreateParams(this._def),
      schema: this,
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      effect: { type: "transform", transform }
    });
  }
  default(def) {
    const defaultValueFunc = typeof def === "function" ? def : () => def;
    return new ZodDefault({
      ...processCreateParams(this._def),
      innerType: this,
      defaultValue: defaultValueFunc,
      typeName: ZodFirstPartyTypeKind.ZodDefault
    });
  }
  brand() {
    return new ZodBranded({
      typeName: ZodFirstPartyTypeKind.ZodBranded,
      type: this,
      ...processCreateParams(this._def)
    });
  }
  catch(def) {
    const catchValueFunc = typeof def === "function" ? def : () => def;
    return new ZodCatch({
      ...processCreateParams(this._def),
      innerType: this,
      catchValue: catchValueFunc,
      typeName: ZodFirstPartyTypeKind.ZodCatch
    });
  }
  describe(description) {
    const This = this.constructor;
    return new This({
      ...this._def,
      description
    });
  }
  pipe(target) {
    return ZodPipeline.create(this, target);
  }
  readonly() {
    return ZodReadonly.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
};
var cuidRegex = /^c[^\s-]{8,}$/i;
var cuid2Regex = /^[0-9a-z]+$/;
var ulidRegex = /^[0-9A-HJKMNP-TV-Z]{26}$/i;
var uuidRegex = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i;
var nanoidRegex = /^[a-z0-9_-]{21}$/i;
var jwtRegex = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/;
var durationRegex = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/;
var emailRegex = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
var _emojiRegex = `^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`;
var emojiRegex;
var ipv4Regex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
var ipv4CidrRegex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/;
var ipv6Regex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/;
var ipv6CidrRegex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
var base64Regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
var base64urlRegex = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/;
var dateRegexSource = `((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))`;
var dateRegex = new RegExp(`^${dateRegexSource}$`);
function timeRegexSource(args) {
  let secondsRegexSource = `[0-5]\\d`;
  if (args.precision) {
    secondsRegexSource = `${secondsRegexSource}\\.\\d{${args.precision}}`;
  } else if (args.precision == null) {
    secondsRegexSource = `${secondsRegexSource}(\\.\\d+)?`;
  }
  const secondsQuantifier = args.precision ? "+" : "?";
  return `([01]\\d|2[0-3]):[0-5]\\d(:${secondsRegexSource})${secondsQuantifier}`;
}
function timeRegex(args) {
  return new RegExp(`^${timeRegexSource(args)}$`);
}
function datetimeRegex(args) {
  let regex = `${dateRegexSource}T${timeRegexSource(args)}`;
  const opts = [];
  opts.push(args.local ? `Z?` : `Z`);
  if (args.offset)
    opts.push(`([+-]\\d{2}:?\\d{2})`);
  regex = `${regex}(${opts.join("|")})`;
  return new RegExp(`^${regex}$`);
}
function isValidIP(ip, version) {
  if ((version === "v4" || !version) && ipv4Regex.test(ip)) {
    return true;
  }
  if ((version === "v6" || !version) && ipv6Regex.test(ip)) {
    return true;
  }
  return false;
}
function isValidJWT(jwt, alg) {
  if (!jwtRegex.test(jwt))
    return false;
  try {
    const [header] = jwt.split(".");
    if (!header)
      return false;
    const base64 = header.replace(/-/g, "+").replace(/_/g, "/").padEnd(header.length + (4 - header.length % 4) % 4, "=");
    const decoded = JSON.parse(atob(base64));
    if (typeof decoded !== "object" || decoded === null)
      return false;
    if ("typ" in decoded && decoded?.typ !== "JWT")
      return false;
    if (!decoded.alg)
      return false;
    if (alg && decoded.alg !== alg)
      return false;
    return true;
  } catch {
    return false;
  }
}
function isValidCidr(ip, version) {
  if ((version === "v4" || !version) && ipv4CidrRegex.test(ip)) {
    return true;
  }
  if ((version === "v6" || !version) && ipv6CidrRegex.test(ip)) {
    return true;
  }
  return false;
}
var ZodString = class _ZodString extends ZodType {
  _parse(input) {
    if (this._def.coerce) {
      input.data = String(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.string) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.string,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    const status = new ParseStatus();
    let ctx = void 0;
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        if (input.data.length < check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            minimum: check.value,
            type: "string",
            inclusive: true,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        if (input.data.length > check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            maximum: check.value,
            type: "string",
            inclusive: true,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "length") {
        const tooBig = input.data.length > check.value;
        const tooSmall = input.data.length < check.value;
        if (tooBig || tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          if (tooBig) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_big,
              maximum: check.value,
              type: "string",
              inclusive: true,
              exact: true,
              message: check.message
            });
          } else if (tooSmall) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_small,
              minimum: check.value,
              type: "string",
              inclusive: true,
              exact: true,
              message: check.message
            });
          }
          status.dirty();
        }
      } else if (check.kind === "email") {
        if (!emailRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "email",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "emoji") {
        if (!emojiRegex) {
          emojiRegex = new RegExp(_emojiRegex, "u");
        }
        if (!emojiRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "emoji",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "uuid") {
        if (!uuidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "uuid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "nanoid") {
        if (!nanoidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "nanoid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "cuid") {
        if (!cuidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "cuid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "cuid2") {
        if (!cuid2Regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "cuid2",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "ulid") {
        if (!ulidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "ulid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "url") {
        try {
          new URL(input.data);
        } catch {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "url",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "regex") {
        check.regex.lastIndex = 0;
        const testResult = check.regex.test(input.data);
        if (!testResult) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "regex",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "trim") {
        input.data = input.data.trim();
      } else if (check.kind === "includes") {
        if (!input.data.includes(check.value, check.position)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { includes: check.value, position: check.position },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "toLowerCase") {
        input.data = input.data.toLowerCase();
      } else if (check.kind === "toUpperCase") {
        input.data = input.data.toUpperCase();
      } else if (check.kind === "startsWith") {
        if (!input.data.startsWith(check.value)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { startsWith: check.value },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "endsWith") {
        if (!input.data.endsWith(check.value)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { endsWith: check.value },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "datetime") {
        const regex = datetimeRegex(check);
        if (!regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: "datetime",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "date") {
        const regex = dateRegex;
        if (!regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: "date",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "time") {
        const regex = timeRegex(check);
        if (!regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: "time",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "duration") {
        if (!durationRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "duration",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "ip") {
        if (!isValidIP(input.data, check.version)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "ip",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "jwt") {
        if (!isValidJWT(input.data, check.alg)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "jwt",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "cidr") {
        if (!isValidCidr(input.data, check.version)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "cidr",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "base64") {
        if (!base64Regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "base64",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "base64url") {
        if (!base64urlRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "base64url",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input.data };
  }
  _regex(regex, validation, message) {
    return this.refinement((data) => regex.test(data), {
      validation,
      code: ZodIssueCode.invalid_string,
      ...errorUtil.errToObj(message)
    });
  }
  _addCheck(check) {
    return new _ZodString({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  email(message) {
    return this._addCheck({ kind: "email", ...errorUtil.errToObj(message) });
  }
  url(message) {
    return this._addCheck({ kind: "url", ...errorUtil.errToObj(message) });
  }
  emoji(message) {
    return this._addCheck({ kind: "emoji", ...errorUtil.errToObj(message) });
  }
  uuid(message) {
    return this._addCheck({ kind: "uuid", ...errorUtil.errToObj(message) });
  }
  nanoid(message) {
    return this._addCheck({ kind: "nanoid", ...errorUtil.errToObj(message) });
  }
  cuid(message) {
    return this._addCheck({ kind: "cuid", ...errorUtil.errToObj(message) });
  }
  cuid2(message) {
    return this._addCheck({ kind: "cuid2", ...errorUtil.errToObj(message) });
  }
  ulid(message) {
    return this._addCheck({ kind: "ulid", ...errorUtil.errToObj(message) });
  }
  base64(message) {
    return this._addCheck({ kind: "base64", ...errorUtil.errToObj(message) });
  }
  base64url(message) {
    return this._addCheck({
      kind: "base64url",
      ...errorUtil.errToObj(message)
    });
  }
  jwt(options) {
    return this._addCheck({ kind: "jwt", ...errorUtil.errToObj(options) });
  }
  ip(options) {
    return this._addCheck({ kind: "ip", ...errorUtil.errToObj(options) });
  }
  cidr(options) {
    return this._addCheck({ kind: "cidr", ...errorUtil.errToObj(options) });
  }
  datetime(options) {
    if (typeof options === "string") {
      return this._addCheck({
        kind: "datetime",
        precision: null,
        offset: false,
        local: false,
        message: options
      });
    }
    return this._addCheck({
      kind: "datetime",
      precision: typeof options?.precision === "undefined" ? null : options?.precision,
      offset: options?.offset ?? false,
      local: options?.local ?? false,
      ...errorUtil.errToObj(options?.message)
    });
  }
  date(message) {
    return this._addCheck({ kind: "date", message });
  }
  time(options) {
    if (typeof options === "string") {
      return this._addCheck({
        kind: "time",
        precision: null,
        message: options
      });
    }
    return this._addCheck({
      kind: "time",
      precision: typeof options?.precision === "undefined" ? null : options?.precision,
      ...errorUtil.errToObj(options?.message)
    });
  }
  duration(message) {
    return this._addCheck({ kind: "duration", ...errorUtil.errToObj(message) });
  }
  regex(regex, message) {
    return this._addCheck({
      kind: "regex",
      regex,
      ...errorUtil.errToObj(message)
    });
  }
  includes(value, options) {
    return this._addCheck({
      kind: "includes",
      value,
      position: options?.position,
      ...errorUtil.errToObj(options?.message)
    });
  }
  startsWith(value, message) {
    return this._addCheck({
      kind: "startsWith",
      value,
      ...errorUtil.errToObj(message)
    });
  }
  endsWith(value, message) {
    return this._addCheck({
      kind: "endsWith",
      value,
      ...errorUtil.errToObj(message)
    });
  }
  min(minLength, message) {
    return this._addCheck({
      kind: "min",
      value: minLength,
      ...errorUtil.errToObj(message)
    });
  }
  max(maxLength, message) {
    return this._addCheck({
      kind: "max",
      value: maxLength,
      ...errorUtil.errToObj(message)
    });
  }
  length(len, message) {
    return this._addCheck({
      kind: "length",
      value: len,
      ...errorUtil.errToObj(message)
    });
  }
  /**
   * Equivalent to `.min(1)`
   */
  nonempty(message) {
    return this.min(1, errorUtil.errToObj(message));
  }
  trim() {
    return new _ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    });
  }
  toLowerCase() {
    return new _ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    });
  }
  toUpperCase() {
    return new _ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }]
    });
  }
  get isDatetime() {
    return !!this._def.checks.find((ch) => ch.kind === "datetime");
  }
  get isDate() {
    return !!this._def.checks.find((ch) => ch.kind === "date");
  }
  get isTime() {
    return !!this._def.checks.find((ch) => ch.kind === "time");
  }
  get isDuration() {
    return !!this._def.checks.find((ch) => ch.kind === "duration");
  }
  get isEmail() {
    return !!this._def.checks.find((ch) => ch.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((ch) => ch.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find((ch) => ch.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find((ch) => ch.kind === "uuid");
  }
  get isNANOID() {
    return !!this._def.checks.find((ch) => ch.kind === "nanoid");
  }
  get isCUID() {
    return !!this._def.checks.find((ch) => ch.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((ch) => ch.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find((ch) => ch.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find((ch) => ch.kind === "ip");
  }
  get isCIDR() {
    return !!this._def.checks.find((ch) => ch.kind === "cidr");
  }
  get isBase64() {
    return !!this._def.checks.find((ch) => ch.kind === "base64");
  }
  get isBase64url() {
    return !!this._def.checks.find((ch) => ch.kind === "base64url");
  }
  get minLength() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxLength() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
};
ZodString.create = (params) => {
  return new ZodString({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodString,
    coerce: params?.coerce ?? false,
    ...processCreateParams(params)
  });
};
function floatSafeRemainder(val, step) {
  const valDecCount = (val.toString().split(".")[1] || "").length;
  const stepDecCount = (step.toString().split(".")[1] || "").length;
  const decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount;
  const valInt = Number.parseInt(val.toFixed(decCount).replace(".", ""));
  const stepInt = Number.parseInt(step.toFixed(decCount).replace(".", ""));
  return valInt % stepInt / 10 ** decCount;
}
var ZodNumber = class _ZodNumber extends ZodType {
  constructor() {
    super(...arguments);
    this.min = this.gte;
    this.max = this.lte;
    this.step = this.multipleOf;
  }
  _parse(input) {
    if (this._def.coerce) {
      input.data = Number(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.number) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.number,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    let ctx = void 0;
    const status = new ParseStatus();
    for (const check of this._def.checks) {
      if (check.kind === "int") {
        if (!util.isInteger(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: "integer",
            received: "float",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "min") {
        const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
        if (tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            minimum: check.value,
            type: "number",
            inclusive: check.inclusive,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
        if (tooBig) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            maximum: check.value,
            type: "number",
            inclusive: check.inclusive,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "multipleOf") {
        if (floatSafeRemainder(input.data, check.value) !== 0) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_multiple_of,
            multipleOf: check.value,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "finite") {
        if (!Number.isFinite(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_finite,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input.data };
  }
  gte(value, message) {
    return this.setLimit("min", value, true, errorUtil.toString(message));
  }
  gt(value, message) {
    return this.setLimit("min", value, false, errorUtil.toString(message));
  }
  lte(value, message) {
    return this.setLimit("max", value, true, errorUtil.toString(message));
  }
  lt(value, message) {
    return this.setLimit("max", value, false, errorUtil.toString(message));
  }
  setLimit(kind, value, inclusive, message) {
    return new _ZodNumber({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind,
          value,
          inclusive,
          message: errorUtil.toString(message)
        }
      ]
    });
  }
  _addCheck(check) {
    return new _ZodNumber({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  int(message) {
    return this._addCheck({
      kind: "int",
      message: errorUtil.toString(message)
    });
  }
  positive(message) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  negative(message) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  nonpositive(message) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  nonnegative(message) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  multipleOf(value, message) {
    return this._addCheck({
      kind: "multipleOf",
      value,
      message: errorUtil.toString(message)
    });
  }
  finite(message) {
    return this._addCheck({
      kind: "finite",
      message: errorUtil.toString(message)
    });
  }
  safe(message) {
    return this._addCheck({
      kind: "min",
      inclusive: true,
      value: Number.MIN_SAFE_INTEGER,
      message: errorUtil.toString(message)
    })._addCheck({
      kind: "max",
      inclusive: true,
      value: Number.MAX_SAFE_INTEGER,
      message: errorUtil.toString(message)
    });
  }
  get minValue() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxValue() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
  get isInt() {
    return !!this._def.checks.find((ch) => ch.kind === "int" || ch.kind === "multipleOf" && util.isInteger(ch.value));
  }
  get isFinite() {
    let max = null;
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "finite" || ch.kind === "int" || ch.kind === "multipleOf") {
        return true;
      } else if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      } else if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return Number.isFinite(min) && Number.isFinite(max);
  }
};
ZodNumber.create = (params) => {
  return new ZodNumber({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodNumber,
    coerce: params?.coerce || false,
    ...processCreateParams(params)
  });
};
var ZodBigInt = class _ZodBigInt extends ZodType {
  constructor() {
    super(...arguments);
    this.min = this.gte;
    this.max = this.lte;
  }
  _parse(input) {
    if (this._def.coerce) {
      try {
        input.data = BigInt(input.data);
      } catch {
        return this._getInvalidInput(input);
      }
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.bigint) {
      return this._getInvalidInput(input);
    }
    let ctx = void 0;
    const status = new ParseStatus();
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
        if (tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            type: "bigint",
            minimum: check.value,
            inclusive: check.inclusive,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
        if (tooBig) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            type: "bigint",
            maximum: check.value,
            inclusive: check.inclusive,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "multipleOf") {
        if (input.data % check.value !== BigInt(0)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_multiple_of,
            multipleOf: check.value,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input.data };
  }
  _getInvalidInput(input) {
    const ctx = this._getOrReturnCtx(input);
    addIssueToContext(ctx, {
      code: ZodIssueCode.invalid_type,
      expected: ZodParsedType.bigint,
      received: ctx.parsedType
    });
    return INVALID;
  }
  gte(value, message) {
    return this.setLimit("min", value, true, errorUtil.toString(message));
  }
  gt(value, message) {
    return this.setLimit("min", value, false, errorUtil.toString(message));
  }
  lte(value, message) {
    return this.setLimit("max", value, true, errorUtil.toString(message));
  }
  lt(value, message) {
    return this.setLimit("max", value, false, errorUtil.toString(message));
  }
  setLimit(kind, value, inclusive, message) {
    return new _ZodBigInt({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind,
          value,
          inclusive,
          message: errorUtil.toString(message)
        }
      ]
    });
  }
  _addCheck(check) {
    return new _ZodBigInt({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  positive(message) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  negative(message) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  nonpositive(message) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  nonnegative(message) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  multipleOf(value, message) {
    return this._addCheck({
      kind: "multipleOf",
      value,
      message: errorUtil.toString(message)
    });
  }
  get minValue() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxValue() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
};
ZodBigInt.create = (params) => {
  return new ZodBigInt({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodBigInt,
    coerce: params?.coerce ?? false,
    ...processCreateParams(params)
  });
};
var ZodBoolean = class extends ZodType {
  _parse(input) {
    if (this._def.coerce) {
      input.data = Boolean(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.boolean) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.boolean,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodBoolean.create = (params) => {
  return new ZodBoolean({
    typeName: ZodFirstPartyTypeKind.ZodBoolean,
    coerce: params?.coerce || false,
    ...processCreateParams(params)
  });
};
var ZodDate = class _ZodDate extends ZodType {
  _parse(input) {
    if (this._def.coerce) {
      input.data = new Date(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.date) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.date,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    if (Number.isNaN(input.data.getTime())) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_date
      });
      return INVALID;
    }
    const status = new ParseStatus();
    let ctx = void 0;
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        if (input.data.getTime() < check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            message: check.message,
            inclusive: true,
            exact: false,
            minimum: check.value,
            type: "date"
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        if (input.data.getTime() > check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            message: check.message,
            inclusive: true,
            exact: false,
            maximum: check.value,
            type: "date"
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return {
      status: status.value,
      value: new Date(input.data.getTime())
    };
  }
  _addCheck(check) {
    return new _ZodDate({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  min(minDate, message) {
    return this._addCheck({
      kind: "min",
      value: minDate.getTime(),
      message: errorUtil.toString(message)
    });
  }
  max(maxDate, message) {
    return this._addCheck({
      kind: "max",
      value: maxDate.getTime(),
      message: errorUtil.toString(message)
    });
  }
  get minDate() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min != null ? new Date(min) : null;
  }
  get maxDate() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max != null ? new Date(max) : null;
  }
};
ZodDate.create = (params) => {
  return new ZodDate({
    checks: [],
    coerce: params?.coerce || false,
    typeName: ZodFirstPartyTypeKind.ZodDate,
    ...processCreateParams(params)
  });
};
var ZodSymbol = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.symbol) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.symbol,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodSymbol.create = (params) => {
  return new ZodSymbol({
    typeName: ZodFirstPartyTypeKind.ZodSymbol,
    ...processCreateParams(params)
  });
};
var ZodUndefined = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.undefined) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.undefined,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodUndefined.create = (params) => {
  return new ZodUndefined({
    typeName: ZodFirstPartyTypeKind.ZodUndefined,
    ...processCreateParams(params)
  });
};
var ZodNull = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.null) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.null,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodNull.create = (params) => {
  return new ZodNull({
    typeName: ZodFirstPartyTypeKind.ZodNull,
    ...processCreateParams(params)
  });
};
var ZodAny = class extends ZodType {
  constructor() {
    super(...arguments);
    this._any = true;
  }
  _parse(input) {
    return OK(input.data);
  }
};
ZodAny.create = (params) => {
  return new ZodAny({
    typeName: ZodFirstPartyTypeKind.ZodAny,
    ...processCreateParams(params)
  });
};
var ZodUnknown = class extends ZodType {
  constructor() {
    super(...arguments);
    this._unknown = true;
  }
  _parse(input) {
    return OK(input.data);
  }
};
ZodUnknown.create = (params) => {
  return new ZodUnknown({
    typeName: ZodFirstPartyTypeKind.ZodUnknown,
    ...processCreateParams(params)
  });
};
var ZodNever = class extends ZodType {
  _parse(input) {
    const ctx = this._getOrReturnCtx(input);
    addIssueToContext(ctx, {
      code: ZodIssueCode.invalid_type,
      expected: ZodParsedType.never,
      received: ctx.parsedType
    });
    return INVALID;
  }
};
ZodNever.create = (params) => {
  return new ZodNever({
    typeName: ZodFirstPartyTypeKind.ZodNever,
    ...processCreateParams(params)
  });
};
var ZodVoid = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.undefined) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.void,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodVoid.create = (params) => {
  return new ZodVoid({
    typeName: ZodFirstPartyTypeKind.ZodVoid,
    ...processCreateParams(params)
  });
};
var ZodArray = class _ZodArray extends ZodType {
  _parse(input) {
    const { ctx, status } = this._processInputParams(input);
    const def = this._def;
    if (ctx.parsedType !== ZodParsedType.array) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.array,
        received: ctx.parsedType
      });
      return INVALID;
    }
    if (def.exactLength !== null) {
      const tooBig = ctx.data.length > def.exactLength.value;
      const tooSmall = ctx.data.length < def.exactLength.value;
      if (tooBig || tooSmall) {
        addIssueToContext(ctx, {
          code: tooBig ? ZodIssueCode.too_big : ZodIssueCode.too_small,
          minimum: tooSmall ? def.exactLength.value : void 0,
          maximum: tooBig ? def.exactLength.value : void 0,
          type: "array",
          inclusive: true,
          exact: true,
          message: def.exactLength.message
        });
        status.dirty();
      }
    }
    if (def.minLength !== null) {
      if (ctx.data.length < def.minLength.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_small,
          minimum: def.minLength.value,
          type: "array",
          inclusive: true,
          exact: false,
          message: def.minLength.message
        });
        status.dirty();
      }
    }
    if (def.maxLength !== null) {
      if (ctx.data.length > def.maxLength.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_big,
          maximum: def.maxLength.value,
          type: "array",
          inclusive: true,
          exact: false,
          message: def.maxLength.message
        });
        status.dirty();
      }
    }
    if (ctx.common.async) {
      return Promise.all([...ctx.data].map((item, i) => {
        return def.type._parseAsync(new ParseInputLazyPath(ctx, item, ctx.path, i));
      })).then((result3) => {
        return ParseStatus.mergeArray(status, result3);
      });
    }
    const result2 = [...ctx.data].map((item, i) => {
      return def.type._parseSync(new ParseInputLazyPath(ctx, item, ctx.path, i));
    });
    return ParseStatus.mergeArray(status, result2);
  }
  get element() {
    return this._def.type;
  }
  min(minLength, message) {
    return new _ZodArray({
      ...this._def,
      minLength: { value: minLength, message: errorUtil.toString(message) }
    });
  }
  max(maxLength, message) {
    return new _ZodArray({
      ...this._def,
      maxLength: { value: maxLength, message: errorUtil.toString(message) }
    });
  }
  length(len, message) {
    return new _ZodArray({
      ...this._def,
      exactLength: { value: len, message: errorUtil.toString(message) }
    });
  }
  nonempty(message) {
    return this.min(1, message);
  }
};
ZodArray.create = (schema, params) => {
  return new ZodArray({
    type: schema,
    minLength: null,
    maxLength: null,
    exactLength: null,
    typeName: ZodFirstPartyTypeKind.ZodArray,
    ...processCreateParams(params)
  });
};
function deepPartialify(schema) {
  if (schema instanceof ZodObject) {
    const newShape = {};
    for (const key in schema.shape) {
      const fieldSchema = schema.shape[key];
      newShape[key] = ZodOptional.create(deepPartialify(fieldSchema));
    }
    return new ZodObject({
      ...schema._def,
      shape: () => newShape
    });
  } else if (schema instanceof ZodArray) {
    return new ZodArray({
      ...schema._def,
      type: deepPartialify(schema.element)
    });
  } else if (schema instanceof ZodOptional) {
    return ZodOptional.create(deepPartialify(schema.unwrap()));
  } else if (schema instanceof ZodNullable) {
    return ZodNullable.create(deepPartialify(schema.unwrap()));
  } else if (schema instanceof ZodTuple) {
    return ZodTuple.create(schema.items.map((item) => deepPartialify(item)));
  } else {
    return schema;
  }
}
var ZodObject = class _ZodObject extends ZodType {
  constructor() {
    super(...arguments);
    this._cached = null;
    this.nonstrict = this.passthrough;
    this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const shape = this._def.shape();
    const keys = util.objectKeys(shape);
    this._cached = { shape, keys };
    return this._cached;
  }
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.object) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    const { status, ctx } = this._processInputParams(input);
    const { shape, keys: shapeKeys } = this._getCached();
    const extraKeys = [];
    if (!(this._def.catchall instanceof ZodNever && this._def.unknownKeys === "strip")) {
      for (const key in ctx.data) {
        if (!shapeKeys.includes(key)) {
          extraKeys.push(key);
        }
      }
    }
    const pairs = [];
    for (const key of shapeKeys) {
      const keyValidator = shape[key];
      const value = ctx.data[key];
      pairs.push({
        key: { status: "valid", value: key },
        value: keyValidator._parse(new ParseInputLazyPath(ctx, value, ctx.path, key)),
        alwaysSet: key in ctx.data
      });
    }
    if (this._def.catchall instanceof ZodNever) {
      const unknownKeys = this._def.unknownKeys;
      if (unknownKeys === "passthrough") {
        for (const key of extraKeys) {
          pairs.push({
            key: { status: "valid", value: key },
            value: { status: "valid", value: ctx.data[key] }
          });
        }
      } else if (unknownKeys === "strict") {
        if (extraKeys.length > 0) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.unrecognized_keys,
            keys: extraKeys
          });
          status.dirty();
        }
      } else if (unknownKeys === "strip") {
      } else {
        throw new Error(`Internal ZodObject error: invalid unknownKeys value.`);
      }
    } else {
      const catchall = this._def.catchall;
      for (const key of extraKeys) {
        const value = ctx.data[key];
        pairs.push({
          key: { status: "valid", value: key },
          value: catchall._parse(
            new ParseInputLazyPath(ctx, value, ctx.path, key)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: key in ctx.data
        });
      }
    }
    if (ctx.common.async) {
      return Promise.resolve().then(async () => {
        const syncPairs = [];
        for (const pair of pairs) {
          const key = await pair.key;
          const value = await pair.value;
          syncPairs.push({
            key,
            value,
            alwaysSet: pair.alwaysSet
          });
        }
        return syncPairs;
      }).then((syncPairs) => {
        return ParseStatus.mergeObjectSync(status, syncPairs);
      });
    } else {
      return ParseStatus.mergeObjectSync(status, pairs);
    }
  }
  get shape() {
    return this._def.shape();
  }
  strict(message) {
    errorUtil.errToObj;
    return new _ZodObject({
      ...this._def,
      unknownKeys: "strict",
      ...message !== void 0 ? {
        errorMap: (issue, ctx) => {
          const defaultError = this._def.errorMap?.(issue, ctx).message ?? ctx.defaultError;
          if (issue.code === "unrecognized_keys")
            return {
              message: errorUtil.errToObj(message).message ?? defaultError
            };
          return {
            message: defaultError
          };
        }
      } : {}
    });
  }
  strip() {
    return new _ZodObject({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new _ZodObject({
      ...this._def,
      unknownKeys: "passthrough"
    });
  }
  // const AugmentFactory =
  //   <Def extends ZodObjectDef>(def: Def) =>
  //   <Augmentation extends ZodRawShape>(
  //     augmentation: Augmentation
  //   ): ZodObject<
  //     extendShape<ReturnType<Def["shape"]>, Augmentation>,
  //     Def["unknownKeys"],
  //     Def["catchall"]
  //   > => {
  //     return new ZodObject({
  //       ...def,
  //       shape: () => ({
  //         ...def.shape(),
  //         ...augmentation,
  //       }),
  //     }) as any;
  //   };
  extend(augmentation) {
    return new _ZodObject({
      ...this._def,
      shape: () => ({
        ...this._def.shape(),
        ...augmentation
      })
    });
  }
  /**
   * Prior to zod@1.0.12 there was a bug in the
   * inferred type of merged objects. Please
   * upgrade if you are experiencing issues.
   */
  merge(merging) {
    const merged = new _ZodObject({
      unknownKeys: merging._def.unknownKeys,
      catchall: merging._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...merging._def.shape()
      }),
      typeName: ZodFirstPartyTypeKind.ZodObject
    });
    return merged;
  }
  // merge<
  //   Incoming extends AnyZodObject,
  //   Augmentation extends Incoming["shape"],
  //   NewOutput extends {
  //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
  //       ? Augmentation[k]["_output"]
  //       : k extends keyof Output
  //       ? Output[k]
  //       : never;
  //   },
  //   NewInput extends {
  //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
  //       ? Augmentation[k]["_input"]
  //       : k extends keyof Input
  //       ? Input[k]
  //       : never;
  //   }
  // >(
  //   merging: Incoming
  // ): ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"],
  //   NewOutput,
  //   NewInput
  // > {
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  setKey(key, schema) {
    return this.augment({ [key]: schema });
  }
  // merge<Incoming extends AnyZodObject>(
  //   merging: Incoming
  // ): //ZodObject<T & Incoming["_shape"], UnknownKeys, Catchall> = (merging) => {
  // ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"]
  // > {
  //   // const mergedShape = objectUtil.mergeShapes(
  //   //   this._def.shape(),
  //   //   merging._def.shape()
  //   // );
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  catchall(index) {
    return new _ZodObject({
      ...this._def,
      catchall: index
    });
  }
  pick(mask) {
    const shape = {};
    for (const key of util.objectKeys(mask)) {
      if (mask[key] && this.shape[key]) {
        shape[key] = this.shape[key];
      }
    }
    return new _ZodObject({
      ...this._def,
      shape: () => shape
    });
  }
  omit(mask) {
    const shape = {};
    for (const key of util.objectKeys(this.shape)) {
      if (!mask[key]) {
        shape[key] = this.shape[key];
      }
    }
    return new _ZodObject({
      ...this._def,
      shape: () => shape
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return deepPartialify(this);
  }
  partial(mask) {
    const newShape = {};
    for (const key of util.objectKeys(this.shape)) {
      const fieldSchema = this.shape[key];
      if (mask && !mask[key]) {
        newShape[key] = fieldSchema;
      } else {
        newShape[key] = fieldSchema.optional();
      }
    }
    return new _ZodObject({
      ...this._def,
      shape: () => newShape
    });
  }
  required(mask) {
    const newShape = {};
    for (const key of util.objectKeys(this.shape)) {
      if (mask && !mask[key]) {
        newShape[key] = this.shape[key];
      } else {
        const fieldSchema = this.shape[key];
        let newField = fieldSchema;
        while (newField instanceof ZodOptional) {
          newField = newField._def.innerType;
        }
        newShape[key] = newField;
      }
    }
    return new _ZodObject({
      ...this._def,
      shape: () => newShape
    });
  }
  keyof() {
    return createZodEnum(util.objectKeys(this.shape));
  }
};
ZodObject.create = (shape, params) => {
  return new ZodObject({
    shape: () => shape,
    unknownKeys: "strip",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
ZodObject.strictCreate = (shape, params) => {
  return new ZodObject({
    shape: () => shape,
    unknownKeys: "strict",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
ZodObject.lazycreate = (shape, params) => {
  return new ZodObject({
    shape,
    unknownKeys: "strip",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
var ZodUnion = class extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const options = this._def.options;
    function handleResults(results) {
      for (const result2 of results) {
        if (result2.result.status === "valid") {
          return result2.result;
        }
      }
      for (const result2 of results) {
        if (result2.result.status === "dirty") {
          ctx.common.issues.push(...result2.ctx.common.issues);
          return result2.result;
        }
      }
      const unionErrors = results.map((result2) => new ZodError(result2.ctx.common.issues));
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union,
        unionErrors
      });
      return INVALID;
    }
    if (ctx.common.async) {
      return Promise.all(options.map(async (option) => {
        const childCtx = {
          ...ctx,
          common: {
            ...ctx.common,
            issues: []
          },
          parent: null
        };
        return {
          result: await option._parseAsync({
            data: ctx.data,
            path: ctx.path,
            parent: childCtx
          }),
          ctx: childCtx
        };
      })).then(handleResults);
    } else {
      let dirty = void 0;
      const issues = [];
      for (const option of options) {
        const childCtx = {
          ...ctx,
          common: {
            ...ctx.common,
            issues: []
          },
          parent: null
        };
        const result2 = option._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: childCtx
        });
        if (result2.status === "valid") {
          return result2;
        } else if (result2.status === "dirty" && !dirty) {
          dirty = { result: result2, ctx: childCtx };
        }
        if (childCtx.common.issues.length) {
          issues.push(childCtx.common.issues);
        }
      }
      if (dirty) {
        ctx.common.issues.push(...dirty.ctx.common.issues);
        return dirty.result;
      }
      const unionErrors = issues.map((issues2) => new ZodError(issues2));
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union,
        unionErrors
      });
      return INVALID;
    }
  }
  get options() {
    return this._def.options;
  }
};
ZodUnion.create = (types, params) => {
  return new ZodUnion({
    options: types,
    typeName: ZodFirstPartyTypeKind.ZodUnion,
    ...processCreateParams(params)
  });
};
var getDiscriminator = (type) => {
  if (type instanceof ZodLazy) {
    return getDiscriminator(type.schema);
  } else if (type instanceof ZodEffects) {
    return getDiscriminator(type.innerType());
  } else if (type instanceof ZodLiteral) {
    return [type.value];
  } else if (type instanceof ZodEnum) {
    return type.options;
  } else if (type instanceof ZodNativeEnum) {
    return util.objectValues(type.enum);
  } else if (type instanceof ZodDefault) {
    return getDiscriminator(type._def.innerType);
  } else if (type instanceof ZodUndefined) {
    return [void 0];
  } else if (type instanceof ZodNull) {
    return [null];
  } else if (type instanceof ZodOptional) {
    return [void 0, ...getDiscriminator(type.unwrap())];
  } else if (type instanceof ZodNullable) {
    return [null, ...getDiscriminator(type.unwrap())];
  } else if (type instanceof ZodBranded) {
    return getDiscriminator(type.unwrap());
  } else if (type instanceof ZodReadonly) {
    return getDiscriminator(type.unwrap());
  } else if (type instanceof ZodCatch) {
    return getDiscriminator(type._def.innerType);
  } else {
    return [];
  }
};
var ZodDiscriminatedUnion = class _ZodDiscriminatedUnion extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.object) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const discriminator = this.discriminator;
    const discriminatorValue = ctx.data[discriminator];
    const option = this.optionsMap.get(discriminatorValue);
    if (!option) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union_discriminator,
        options: Array.from(this.optionsMap.keys()),
        path: [discriminator]
      });
      return INVALID;
    }
    if (ctx.common.async) {
      return option._parseAsync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
    } else {
      return option._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
    }
  }
  get discriminator() {
    return this._def.discriminator;
  }
  get options() {
    return this._def.options;
  }
  get optionsMap() {
    return this._def.optionsMap;
  }
  /**
   * The constructor of the discriminated union schema. Its behaviour is very similar to that of the normal z.union() constructor.
   * However, it only allows a union of objects, all of which need to share a discriminator property. This property must
   * have a different value for each object in the union.
   * @param discriminator the name of the discriminator property
   * @param types an array of object schemas
   * @param params
   */
  static create(discriminator, options, params) {
    const optionsMap = /* @__PURE__ */ new Map();
    for (const type of options) {
      const discriminatorValues = getDiscriminator(type.shape[discriminator]);
      if (!discriminatorValues.length) {
        throw new Error(`A discriminator value for key \`${discriminator}\` could not be extracted from all schema options`);
      }
      for (const value of discriminatorValues) {
        if (optionsMap.has(value)) {
          throw new Error(`Discriminator property ${String(discriminator)} has duplicate value ${String(value)}`);
        }
        optionsMap.set(value, type);
      }
    }
    return new _ZodDiscriminatedUnion({
      typeName: ZodFirstPartyTypeKind.ZodDiscriminatedUnion,
      discriminator,
      options,
      optionsMap,
      ...processCreateParams(params)
    });
  }
};
function mergeValues(a, b) {
  const aType = getParsedType(a);
  const bType = getParsedType(b);
  if (a === b) {
    return { valid: true, data: a };
  } else if (aType === ZodParsedType.object && bType === ZodParsedType.object) {
    const bKeys = util.objectKeys(b);
    const sharedKeys = util.objectKeys(a).filter((key) => bKeys.indexOf(key) !== -1);
    const newObj = { ...a, ...b };
    for (const key of sharedKeys) {
      const sharedValue = mergeValues(a[key], b[key]);
      if (!sharedValue.valid) {
        return { valid: false };
      }
      newObj[key] = sharedValue.data;
    }
    return { valid: true, data: newObj };
  } else if (aType === ZodParsedType.array && bType === ZodParsedType.array) {
    if (a.length !== b.length) {
      return { valid: false };
    }
    const newArray = [];
    for (let index = 0; index < a.length; index++) {
      const itemA = a[index];
      const itemB = b[index];
      const sharedValue = mergeValues(itemA, itemB);
      if (!sharedValue.valid) {
        return { valid: false };
      }
      newArray.push(sharedValue.data);
    }
    return { valid: true, data: newArray };
  } else if (aType === ZodParsedType.date && bType === ZodParsedType.date && +a === +b) {
    return { valid: true, data: a };
  } else {
    return { valid: false };
  }
}
var ZodIntersection = class extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    const handleParsed = (parsedLeft, parsedRight) => {
      if (isAborted(parsedLeft) || isAborted(parsedRight)) {
        return INVALID;
      }
      const merged = mergeValues(parsedLeft.value, parsedRight.value);
      if (!merged.valid) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_intersection_types
        });
        return INVALID;
      }
      if (isDirty(parsedLeft) || isDirty(parsedRight)) {
        status.dirty();
      }
      return { status: status.value, value: merged.data };
    };
    if (ctx.common.async) {
      return Promise.all([
        this._def.left._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        }),
        this._def.right._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        })
      ]).then(([left, right]) => handleParsed(left, right));
    } else {
      return handleParsed(this._def.left._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      }), this._def.right._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      }));
    }
  }
};
ZodIntersection.create = (left, right, params) => {
  return new ZodIntersection({
    left,
    right,
    typeName: ZodFirstPartyTypeKind.ZodIntersection,
    ...processCreateParams(params)
  });
};
var ZodTuple = class _ZodTuple extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.array) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.array,
        received: ctx.parsedType
      });
      return INVALID;
    }
    if (ctx.data.length < this._def.items.length) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.too_small,
        minimum: this._def.items.length,
        inclusive: true,
        exact: false,
        type: "array"
      });
      return INVALID;
    }
    const rest = this._def.rest;
    if (!rest && ctx.data.length > this._def.items.length) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.too_big,
        maximum: this._def.items.length,
        inclusive: true,
        exact: false,
        type: "array"
      });
      status.dirty();
    }
    const items = [...ctx.data].map((item, itemIndex) => {
      const schema = this._def.items[itemIndex] || this._def.rest;
      if (!schema)
        return null;
      return schema._parse(new ParseInputLazyPath(ctx, item, ctx.path, itemIndex));
    }).filter((x) => !!x);
    if (ctx.common.async) {
      return Promise.all(items).then((results) => {
        return ParseStatus.mergeArray(status, results);
      });
    } else {
      return ParseStatus.mergeArray(status, items);
    }
  }
  get items() {
    return this._def.items;
  }
  rest(rest) {
    return new _ZodTuple({
      ...this._def,
      rest
    });
  }
};
ZodTuple.create = (schemas, params) => {
  if (!Array.isArray(schemas)) {
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  }
  return new ZodTuple({
    items: schemas,
    typeName: ZodFirstPartyTypeKind.ZodTuple,
    rest: null,
    ...processCreateParams(params)
  });
};
var ZodRecord = class _ZodRecord extends ZodType {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.object) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const pairs = [];
    const keyType = this._def.keyType;
    const valueType = this._def.valueType;
    for (const key in ctx.data) {
      pairs.push({
        key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, key)),
        value: valueType._parse(new ParseInputLazyPath(ctx, ctx.data[key], ctx.path, key)),
        alwaysSet: key in ctx.data
      });
    }
    if (ctx.common.async) {
      return ParseStatus.mergeObjectAsync(status, pairs);
    } else {
      return ParseStatus.mergeObjectSync(status, pairs);
    }
  }
  get element() {
    return this._def.valueType;
  }
  static create(first, second, third) {
    if (second instanceof ZodType) {
      return new _ZodRecord({
        keyType: first,
        valueType: second,
        typeName: ZodFirstPartyTypeKind.ZodRecord,
        ...processCreateParams(third)
      });
    }
    return new _ZodRecord({
      keyType: ZodString.create(),
      valueType: first,
      typeName: ZodFirstPartyTypeKind.ZodRecord,
      ...processCreateParams(second)
    });
  }
};
var ZodMap = class extends ZodType {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.map) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.map,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const keyType = this._def.keyType;
    const valueType = this._def.valueType;
    const pairs = [...ctx.data.entries()].map(([key, value], index) => {
      return {
        key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, [index, "key"])),
        value: valueType._parse(new ParseInputLazyPath(ctx, value, ctx.path, [index, "value"]))
      };
    });
    if (ctx.common.async) {
      const finalMap = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const pair of pairs) {
          const key = await pair.key;
          const value = await pair.value;
          if (key.status === "aborted" || value.status === "aborted") {
            return INVALID;
          }
          if (key.status === "dirty" || value.status === "dirty") {
            status.dirty();
          }
          finalMap.set(key.value, value.value);
        }
        return { status: status.value, value: finalMap };
      });
    } else {
      const finalMap = /* @__PURE__ */ new Map();
      for (const pair of pairs) {
        const key = pair.key;
        const value = pair.value;
        if (key.status === "aborted" || value.status === "aborted") {
          return INVALID;
        }
        if (key.status === "dirty" || value.status === "dirty") {
          status.dirty();
        }
        finalMap.set(key.value, value.value);
      }
      return { status: status.value, value: finalMap };
    }
  }
};
ZodMap.create = (keyType, valueType, params) => {
  return new ZodMap({
    valueType,
    keyType,
    typeName: ZodFirstPartyTypeKind.ZodMap,
    ...processCreateParams(params)
  });
};
var ZodSet = class _ZodSet extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.set) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.set,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const def = this._def;
    if (def.minSize !== null) {
      if (ctx.data.size < def.minSize.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_small,
          minimum: def.minSize.value,
          type: "set",
          inclusive: true,
          exact: false,
          message: def.minSize.message
        });
        status.dirty();
      }
    }
    if (def.maxSize !== null) {
      if (ctx.data.size > def.maxSize.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_big,
          maximum: def.maxSize.value,
          type: "set",
          inclusive: true,
          exact: false,
          message: def.maxSize.message
        });
        status.dirty();
      }
    }
    const valueType = this._def.valueType;
    function finalizeSet(elements2) {
      const parsedSet = /* @__PURE__ */ new Set();
      for (const element of elements2) {
        if (element.status === "aborted")
          return INVALID;
        if (element.status === "dirty")
          status.dirty();
        parsedSet.add(element.value);
      }
      return { status: status.value, value: parsedSet };
    }
    const elements = [...ctx.data.values()].map((item, i) => valueType._parse(new ParseInputLazyPath(ctx, item, ctx.path, i)));
    if (ctx.common.async) {
      return Promise.all(elements).then((elements2) => finalizeSet(elements2));
    } else {
      return finalizeSet(elements);
    }
  }
  min(minSize, message) {
    return new _ZodSet({
      ...this._def,
      minSize: { value: minSize, message: errorUtil.toString(message) }
    });
  }
  max(maxSize, message) {
    return new _ZodSet({
      ...this._def,
      maxSize: { value: maxSize, message: errorUtil.toString(message) }
    });
  }
  size(size, message) {
    return this.min(size, message).max(size, message);
  }
  nonempty(message) {
    return this.min(1, message);
  }
};
ZodSet.create = (valueType, params) => {
  return new ZodSet({
    valueType,
    minSize: null,
    maxSize: null,
    typeName: ZodFirstPartyTypeKind.ZodSet,
    ...processCreateParams(params)
  });
};
var ZodFunction = class _ZodFunction extends ZodType {
  constructor() {
    super(...arguments);
    this.validate = this.implement;
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.function) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.function,
        received: ctx.parsedType
      });
      return INVALID;
    }
    function makeArgsIssue(args, error) {
      return makeIssue({
        data: args,
        path: ctx.path,
        errorMaps: [ctx.common.contextualErrorMap, ctx.schemaErrorMap, getErrorMap(), en_default].filter((x) => !!x),
        issueData: {
          code: ZodIssueCode.invalid_arguments,
          argumentsError: error
        }
      });
    }
    function makeReturnsIssue(returns, error) {
      return makeIssue({
        data: returns,
        path: ctx.path,
        errorMaps: [ctx.common.contextualErrorMap, ctx.schemaErrorMap, getErrorMap(), en_default].filter((x) => !!x),
        issueData: {
          code: ZodIssueCode.invalid_return_type,
          returnTypeError: error
        }
      });
    }
    const params = { errorMap: ctx.common.contextualErrorMap };
    const fn = ctx.data;
    if (this._def.returns instanceof ZodPromise) {
      const me = this;
      return OK(async function(...args) {
        const error = new ZodError([]);
        const parsedArgs = await me._def.args.parseAsync(args, params).catch((e) => {
          error.addIssue(makeArgsIssue(args, e));
          throw error;
        });
        const result2 = await Reflect.apply(fn, this, parsedArgs);
        const parsedReturns = await me._def.returns._def.type.parseAsync(result2, params).catch((e) => {
          error.addIssue(makeReturnsIssue(result2, e));
          throw error;
        });
        return parsedReturns;
      });
    } else {
      const me = this;
      return OK(function(...args) {
        const parsedArgs = me._def.args.safeParse(args, params);
        if (!parsedArgs.success) {
          throw new ZodError([makeArgsIssue(args, parsedArgs.error)]);
        }
        const result2 = Reflect.apply(fn, this, parsedArgs.data);
        const parsedReturns = me._def.returns.safeParse(result2, params);
        if (!parsedReturns.success) {
          throw new ZodError([makeReturnsIssue(result2, parsedReturns.error)]);
        }
        return parsedReturns.data;
      });
    }
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...items) {
    return new _ZodFunction({
      ...this._def,
      args: ZodTuple.create(items).rest(ZodUnknown.create())
    });
  }
  returns(returnType) {
    return new _ZodFunction({
      ...this._def,
      returns: returnType
    });
  }
  implement(func) {
    const validatedFunc = this.parse(func);
    return validatedFunc;
  }
  strictImplement(func) {
    const validatedFunc = this.parse(func);
    return validatedFunc;
  }
  static create(args, returns, params) {
    return new _ZodFunction({
      args: args ? args : ZodTuple.create([]).rest(ZodUnknown.create()),
      returns: returns || ZodUnknown.create(),
      typeName: ZodFirstPartyTypeKind.ZodFunction,
      ...processCreateParams(params)
    });
  }
};
var ZodLazy = class extends ZodType {
  get schema() {
    return this._def.getter();
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const lazySchema = this._def.getter();
    return lazySchema._parse({ data: ctx.data, path: ctx.path, parent: ctx });
  }
};
ZodLazy.create = (getter, params) => {
  return new ZodLazy({
    getter,
    typeName: ZodFirstPartyTypeKind.ZodLazy,
    ...processCreateParams(params)
  });
};
var ZodLiteral = class extends ZodType {
  _parse(input) {
    if (input.data !== this._def.value) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_literal,
        expected: this._def.value
      });
      return INVALID;
    }
    return { status: "valid", value: input.data };
  }
  get value() {
    return this._def.value;
  }
};
ZodLiteral.create = (value, params) => {
  return new ZodLiteral({
    value,
    typeName: ZodFirstPartyTypeKind.ZodLiteral,
    ...processCreateParams(params)
  });
};
function createZodEnum(values, params) {
  return new ZodEnum({
    values,
    typeName: ZodFirstPartyTypeKind.ZodEnum,
    ...processCreateParams(params)
  });
}
var ZodEnum = class _ZodEnum extends ZodType {
  _parse(input) {
    if (typeof input.data !== "string") {
      const ctx = this._getOrReturnCtx(input);
      const expectedValues = this._def.values;
      addIssueToContext(ctx, {
        expected: util.joinValues(expectedValues),
        received: ctx.parsedType,
        code: ZodIssueCode.invalid_type
      });
      return INVALID;
    }
    if (!this._cache) {
      this._cache = new Set(this._def.values);
    }
    if (!this._cache.has(input.data)) {
      const ctx = this._getOrReturnCtx(input);
      const expectedValues = this._def.values;
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_enum_value,
        options: expectedValues
      });
      return INVALID;
    }
    return OK(input.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  get Values() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  get Enum() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  extract(values, newDef = this._def) {
    return _ZodEnum.create(values, {
      ...this._def,
      ...newDef
    });
  }
  exclude(values, newDef = this._def) {
    return _ZodEnum.create(this.options.filter((opt) => !values.includes(opt)), {
      ...this._def,
      ...newDef
    });
  }
};
ZodEnum.create = createZodEnum;
var ZodNativeEnum = class extends ZodType {
  _parse(input) {
    const nativeEnumValues = util.getValidEnumValues(this._def.values);
    const ctx = this._getOrReturnCtx(input);
    if (ctx.parsedType !== ZodParsedType.string && ctx.parsedType !== ZodParsedType.number) {
      const expectedValues = util.objectValues(nativeEnumValues);
      addIssueToContext(ctx, {
        expected: util.joinValues(expectedValues),
        received: ctx.parsedType,
        code: ZodIssueCode.invalid_type
      });
      return INVALID;
    }
    if (!this._cache) {
      this._cache = new Set(util.getValidEnumValues(this._def.values));
    }
    if (!this._cache.has(input.data)) {
      const expectedValues = util.objectValues(nativeEnumValues);
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_enum_value,
        options: expectedValues
      });
      return INVALID;
    }
    return OK(input.data);
  }
  get enum() {
    return this._def.values;
  }
};
ZodNativeEnum.create = (values, params) => {
  return new ZodNativeEnum({
    values,
    typeName: ZodFirstPartyTypeKind.ZodNativeEnum,
    ...processCreateParams(params)
  });
};
var ZodPromise = class extends ZodType {
  unwrap() {
    return this._def.type;
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.promise && ctx.common.async === false) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.promise,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const promisified = ctx.parsedType === ZodParsedType.promise ? ctx.data : Promise.resolve(ctx.data);
    return OK(promisified.then((data) => {
      return this._def.type.parseAsync(data, {
        path: ctx.path,
        errorMap: ctx.common.contextualErrorMap
      });
    }));
  }
};
ZodPromise.create = (schema, params) => {
  return new ZodPromise({
    type: schema,
    typeName: ZodFirstPartyTypeKind.ZodPromise,
    ...processCreateParams(params)
  });
};
var ZodEffects = class extends ZodType {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === ZodFirstPartyTypeKind.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    const effect = this._def.effect || null;
    const checkCtx = {
      addIssue: (arg) => {
        addIssueToContext(ctx, arg);
        if (arg.fatal) {
          status.abort();
        } else {
          status.dirty();
        }
      },
      get path() {
        return ctx.path;
      }
    };
    checkCtx.addIssue = checkCtx.addIssue.bind(checkCtx);
    if (effect.type === "preprocess") {
      const processed = effect.transform(ctx.data, checkCtx);
      if (ctx.common.async) {
        return Promise.resolve(processed).then(async (processed2) => {
          if (status.value === "aborted")
            return INVALID;
          const result2 = await this._def.schema._parseAsync({
            data: processed2,
            path: ctx.path,
            parent: ctx
          });
          if (result2.status === "aborted")
            return INVALID;
          if (result2.status === "dirty")
            return DIRTY(result2.value);
          if (status.value === "dirty")
            return DIRTY(result2.value);
          return result2;
        });
      } else {
        if (status.value === "aborted")
          return INVALID;
        const result2 = this._def.schema._parseSync({
          data: processed,
          path: ctx.path,
          parent: ctx
        });
        if (result2.status === "aborted")
          return INVALID;
        if (result2.status === "dirty")
          return DIRTY(result2.value);
        if (status.value === "dirty")
          return DIRTY(result2.value);
        return result2;
      }
    }
    if (effect.type === "refinement") {
      const executeRefinement = (acc) => {
        const result2 = effect.refinement(acc, checkCtx);
        if (ctx.common.async) {
          return Promise.resolve(result2);
        }
        if (result2 instanceof Promise) {
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        }
        return acc;
      };
      if (ctx.common.async === false) {
        const inner = this._def.schema._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (inner.status === "aborted")
          return INVALID;
        if (inner.status === "dirty")
          status.dirty();
        executeRefinement(inner.value);
        return { status: status.value, value: inner.value };
      } else {
        return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((inner) => {
          if (inner.status === "aborted")
            return INVALID;
          if (inner.status === "dirty")
            status.dirty();
          return executeRefinement(inner.value).then(() => {
            return { status: status.value, value: inner.value };
          });
        });
      }
    }
    if (effect.type === "transform") {
      if (ctx.common.async === false) {
        const base = this._def.schema._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (!isValid(base))
          return INVALID;
        const result2 = effect.transform(base.value, checkCtx);
        if (result2 instanceof Promise) {
          throw new Error(`Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.`);
        }
        return { status: status.value, value: result2 };
      } else {
        return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((base) => {
          if (!isValid(base))
            return INVALID;
          return Promise.resolve(effect.transform(base.value, checkCtx)).then((result2) => ({
            status: status.value,
            value: result2
          }));
        });
      }
    }
    util.assertNever(effect);
  }
};
ZodEffects.create = (schema, effect, params) => {
  return new ZodEffects({
    schema,
    typeName: ZodFirstPartyTypeKind.ZodEffects,
    effect,
    ...processCreateParams(params)
  });
};
ZodEffects.createWithPreprocess = (preprocess, schema, params) => {
  return new ZodEffects({
    schema,
    effect: { type: "preprocess", transform: preprocess },
    typeName: ZodFirstPartyTypeKind.ZodEffects,
    ...processCreateParams(params)
  });
};
var ZodOptional = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType === ZodParsedType.undefined) {
      return OK(void 0);
    }
    return this._def.innerType._parse(input);
  }
  unwrap() {
    return this._def.innerType;
  }
};
ZodOptional.create = (type, params) => {
  return new ZodOptional({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodOptional,
    ...processCreateParams(params)
  });
};
var ZodNullable = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType === ZodParsedType.null) {
      return OK(null);
    }
    return this._def.innerType._parse(input);
  }
  unwrap() {
    return this._def.innerType;
  }
};
ZodNullable.create = (type, params) => {
  return new ZodNullable({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodNullable,
    ...processCreateParams(params)
  });
};
var ZodDefault = class extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    let data = ctx.data;
    if (ctx.parsedType === ZodParsedType.undefined) {
      data = this._def.defaultValue();
    }
    return this._def.innerType._parse({
      data,
      path: ctx.path,
      parent: ctx
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
};
ZodDefault.create = (type, params) => {
  return new ZodDefault({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodDefault,
    defaultValue: typeof params.default === "function" ? params.default : () => params.default,
    ...processCreateParams(params)
  });
};
var ZodCatch = class extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const newCtx = {
      ...ctx,
      common: {
        ...ctx.common,
        issues: []
      }
    };
    const result2 = this._def.innerType._parse({
      data: newCtx.data,
      path: newCtx.path,
      parent: {
        ...newCtx
      }
    });
    if (isAsync(result2)) {
      return result2.then((result3) => {
        return {
          status: "valid",
          value: result3.status === "valid" ? result3.value : this._def.catchValue({
            get error() {
              return new ZodError(newCtx.common.issues);
            },
            input: newCtx.data
          })
        };
      });
    } else {
      return {
        status: "valid",
        value: result2.status === "valid" ? result2.value : this._def.catchValue({
          get error() {
            return new ZodError(newCtx.common.issues);
          },
          input: newCtx.data
        })
      };
    }
  }
  removeCatch() {
    return this._def.innerType;
  }
};
ZodCatch.create = (type, params) => {
  return new ZodCatch({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodCatch,
    catchValue: typeof params.catch === "function" ? params.catch : () => params.catch,
    ...processCreateParams(params)
  });
};
var ZodNaN = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.nan) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.nan,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return { status: "valid", value: input.data };
  }
};
ZodNaN.create = (params) => {
  return new ZodNaN({
    typeName: ZodFirstPartyTypeKind.ZodNaN,
    ...processCreateParams(params)
  });
};
var BRAND = Symbol("zod_brand");
var ZodBranded = class extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const data = ctx.data;
    return this._def.type._parse({
      data,
      path: ctx.path,
      parent: ctx
    });
  }
  unwrap() {
    return this._def.type;
  }
};
var ZodPipeline = class _ZodPipeline extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.common.async) {
      const handleAsync = async () => {
        const inResult = await this._def.in._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (inResult.status === "aborted")
          return INVALID;
        if (inResult.status === "dirty") {
          status.dirty();
          return DIRTY(inResult.value);
        } else {
          return this._def.out._parseAsync({
            data: inResult.value,
            path: ctx.path,
            parent: ctx
          });
        }
      };
      return handleAsync();
    } else {
      const inResult = this._def.in._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
      if (inResult.status === "aborted")
        return INVALID;
      if (inResult.status === "dirty") {
        status.dirty();
        return {
          status: "dirty",
          value: inResult.value
        };
      } else {
        return this._def.out._parseSync({
          data: inResult.value,
          path: ctx.path,
          parent: ctx
        });
      }
    }
  }
  static create(a, b) {
    return new _ZodPipeline({
      in: a,
      out: b,
      typeName: ZodFirstPartyTypeKind.ZodPipeline
    });
  }
};
var ZodReadonly = class extends ZodType {
  _parse(input) {
    const result2 = this._def.innerType._parse(input);
    const freeze = (data) => {
      if (isValid(data)) {
        data.value = Object.freeze(data.value);
      }
      return data;
    };
    return isAsync(result2) ? result2.then((data) => freeze(data)) : freeze(result2);
  }
  unwrap() {
    return this._def.innerType;
  }
};
ZodReadonly.create = (type, params) => {
  return new ZodReadonly({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodReadonly,
    ...processCreateParams(params)
  });
};
function cleanParams(params, data) {
  const p = typeof params === "function" ? params(data) : typeof params === "string" ? { message: params } : params;
  const p2 = typeof p === "string" ? { message: p } : p;
  return p2;
}
function custom(check, _params = {}, fatal) {
  if (check)
    return ZodAny.create().superRefine((data, ctx) => {
      const r = check(data);
      if (r instanceof Promise) {
        return r.then((r2) => {
          if (!r2) {
            const params = cleanParams(_params, data);
            const _fatal = params.fatal ?? fatal ?? true;
            ctx.addIssue({ code: "custom", ...params, fatal: _fatal });
          }
        });
      }
      if (!r) {
        const params = cleanParams(_params, data);
        const _fatal = params.fatal ?? fatal ?? true;
        ctx.addIssue({ code: "custom", ...params, fatal: _fatal });
      }
      return;
    });
  return ZodAny.create();
}
var late = {
  object: ZodObject.lazycreate
};
var ZodFirstPartyTypeKind;
(function(ZodFirstPartyTypeKind2) {
  ZodFirstPartyTypeKind2["ZodString"] = "ZodString";
  ZodFirstPartyTypeKind2["ZodNumber"] = "ZodNumber";
  ZodFirstPartyTypeKind2["ZodNaN"] = "ZodNaN";
  ZodFirstPartyTypeKind2["ZodBigInt"] = "ZodBigInt";
  ZodFirstPartyTypeKind2["ZodBoolean"] = "ZodBoolean";
  ZodFirstPartyTypeKind2["ZodDate"] = "ZodDate";
  ZodFirstPartyTypeKind2["ZodSymbol"] = "ZodSymbol";
  ZodFirstPartyTypeKind2["ZodUndefined"] = "ZodUndefined";
  ZodFirstPartyTypeKind2["ZodNull"] = "ZodNull";
  ZodFirstPartyTypeKind2["ZodAny"] = "ZodAny";
  ZodFirstPartyTypeKind2["ZodUnknown"] = "ZodUnknown";
  ZodFirstPartyTypeKind2["ZodNever"] = "ZodNever";
  ZodFirstPartyTypeKind2["ZodVoid"] = "ZodVoid";
  ZodFirstPartyTypeKind2["ZodArray"] = "ZodArray";
  ZodFirstPartyTypeKind2["ZodObject"] = "ZodObject";
  ZodFirstPartyTypeKind2["ZodUnion"] = "ZodUnion";
  ZodFirstPartyTypeKind2["ZodDiscriminatedUnion"] = "ZodDiscriminatedUnion";
  ZodFirstPartyTypeKind2["ZodIntersection"] = "ZodIntersection";
  ZodFirstPartyTypeKind2["ZodTuple"] = "ZodTuple";
  ZodFirstPartyTypeKind2["ZodRecord"] = "ZodRecord";
  ZodFirstPartyTypeKind2["ZodMap"] = "ZodMap";
  ZodFirstPartyTypeKind2["ZodSet"] = "ZodSet";
  ZodFirstPartyTypeKind2["ZodFunction"] = "ZodFunction";
  ZodFirstPartyTypeKind2["ZodLazy"] = "ZodLazy";
  ZodFirstPartyTypeKind2["ZodLiteral"] = "ZodLiteral";
  ZodFirstPartyTypeKind2["ZodEnum"] = "ZodEnum";
  ZodFirstPartyTypeKind2["ZodEffects"] = "ZodEffects";
  ZodFirstPartyTypeKind2["ZodNativeEnum"] = "ZodNativeEnum";
  ZodFirstPartyTypeKind2["ZodOptional"] = "ZodOptional";
  ZodFirstPartyTypeKind2["ZodNullable"] = "ZodNullable";
  ZodFirstPartyTypeKind2["ZodDefault"] = "ZodDefault";
  ZodFirstPartyTypeKind2["ZodCatch"] = "ZodCatch";
  ZodFirstPartyTypeKind2["ZodPromise"] = "ZodPromise";
  ZodFirstPartyTypeKind2["ZodBranded"] = "ZodBranded";
  ZodFirstPartyTypeKind2["ZodPipeline"] = "ZodPipeline";
  ZodFirstPartyTypeKind2["ZodReadonly"] = "ZodReadonly";
})(ZodFirstPartyTypeKind || (ZodFirstPartyTypeKind = {}));
var instanceOfType = (cls, params = {
  message: `Input not instance of ${cls.name}`
}) => custom((data) => data instanceof cls, params);
var stringType = ZodString.create;
var numberType = ZodNumber.create;
var nanType = ZodNaN.create;
var bigIntType = ZodBigInt.create;
var booleanType = ZodBoolean.create;
var dateType = ZodDate.create;
var symbolType = ZodSymbol.create;
var undefinedType = ZodUndefined.create;
var nullType = ZodNull.create;
var anyType = ZodAny.create;
var unknownType = ZodUnknown.create;
var neverType = ZodNever.create;
var voidType = ZodVoid.create;
var arrayType = ZodArray.create;
var objectType = ZodObject.create;
var strictObjectType = ZodObject.strictCreate;
var unionType = ZodUnion.create;
var discriminatedUnionType = ZodDiscriminatedUnion.create;
var intersectionType = ZodIntersection.create;
var tupleType = ZodTuple.create;
var recordType = ZodRecord.create;
var mapType = ZodMap.create;
var setType = ZodSet.create;
var functionType = ZodFunction.create;
var lazyType = ZodLazy.create;
var literalType = ZodLiteral.create;
var enumType = ZodEnum.create;
var nativeEnumType = ZodNativeEnum.create;
var promiseType = ZodPromise.create;
var effectsType = ZodEffects.create;
var optionalType = ZodOptional.create;
var nullableType = ZodNullable.create;
var preprocessType = ZodEffects.createWithPreprocess;
var pipelineType = ZodPipeline.create;
var ostring = () => stringType().optional();
var onumber = () => numberType().optional();
var oboolean = () => booleanType().optional();
var coerce = {
  string: ((arg) => ZodString.create({ ...arg, coerce: true })),
  number: ((arg) => ZodNumber.create({ ...arg, coerce: true })),
  boolean: ((arg) => ZodBoolean.create({
    ...arg,
    coerce: true
  })),
  bigint: ((arg) => ZodBigInt.create({ ...arg, coerce: true })),
  date: ((arg) => ZodDate.create({ ...arg, coerce: true }))
};
var NEVER = INVALID;

// src/shared/prompt-library.ts
var PROMPT_LIBRARY_SOURCES = [
  "nanoBananaPro",
  "nanoBananaTrending",
  "gptImage2",
  "seedance",
  "seedance25",
  "grokImagine",
  "claudeOpus55",
  "gpt6Astra"
];
var promptLibrarySourceSchema = external_exports.enum(PROMPT_LIBRARY_SOURCES);
var PROMPT_LIBRARY_MEDIA_TYPES = ["image", "video"];
var promptLibraryMediaTypeSchema = external_exports.enum(PROMPT_LIBRARY_MEDIA_TYPES);
var PROMPT_LIBRARY_SORT_ORDERS = ["newest", "oldest", "titleAsc"];
var promptLibrarySortOrderSchema = external_exports.enum(PROMPT_LIBRARY_SORT_ORDERS);
var PROMPT_LIBRARY_SOURCE_SLUGS = {
  nanoBananaPro: "nano_banana_pro",
  nanoBananaTrending: "nano_banana_trending",
  gptImage2: "gpt_image_2",
  seedance: "seedance",
  seedance25: "seedance_2_5",
  grokImagine: "grok_imagine",
  claudeOpus55: "claude_opus_5_5",
  gpt6Astra: "gpt_6_astra"
};
var PROMPT_LIBRARY_SOURCE_DISPLAY_NAMES = {
  nanoBananaPro: "Nano Banana Pro",
  nanoBananaTrending: "Nano Banana Trending",
  gptImage2: "GPT Image 2",
  seedance: "Seedance 2.0",
  seedance25: "Seedance 2.5",
  grokImagine: "Grok Imagine",
  claudeOpus55: "Claude Opus 5.5",
  gpt6Astra: "GPT 6 Astra"
};
var PROMPT_LIBRARY_SOURCE_URLS = {
  nanoBananaPro: "https://github.com/YouMind-OpenLab/nano-banana-pro-prompts-recommend-skill",
  nanoBananaTrending: "https://raw.githubusercontent.com/jau123/nanobanana-trending-prompts/main/prompts/prompts.json",
  gptImage2: "https://github.com/YouMind-OpenLab/gpt-image-2-prompts-search",
  seedance: "https://youmind.com/seedance-2-0-prompts",
  seedance25: "https://youmind.com/seedance-2-5-prompts/explore",
  grokImagine: "https://youmind.com/grok-imagine-prompts",
  claudeOpus55: "https://youmind.com/opus-5-5-prompts/explore",
  gpt6Astra: "https://youmind.com/gpt-6-astra-prompts/explore"
};
var PROMPT_LIBRARY_SOURCE_API_MODELS = {
  nanoBananaPro: "nano-banana-pro",
  nanoBananaTrending: "nano-banana-trending",
  gptImage2: "gpt-image-2",
  seedance: "seedance-2-0",
  // Dotted, unlike 2.0's hyphenated id (prompt_library.dart, `apiModel`).
  seedance25: "seedance-2.5",
  grokImagine: "grok-imagine",
  claudeOpus55: "claude-opus-5-5",
  gpt6Astra: "gpt-6-astra"
};
var PROMPT_LIBRARY_SOURCE_GITHUB_REFERENCES_BASE_URLS = {
  nanoBananaPro: "https://raw.githubusercontent.com/YouMind-OpenLab/nano-banana-pro-prompts-recommend-skill/main/references",
  nanoBananaTrending: null,
  gptImage2: "https://raw.githubusercontent.com/YouMind-OpenLab/gpt-image-2-prompts-search/main/references",
  seedance: null,
  seedance25: null,
  grokImagine: null,
  claudeOpus55: null,
  gpt6Astra: null
};
var PROMPT_LIBRARY_SOURCE_MEDIA_TYPES = {
  nanoBananaPro: "image",
  nanoBananaTrending: "image",
  gptImage2: "image",
  seedance: "video",
  seedance25: "video",
  grokImagine: "video",
  claudeOpus55: "video",
  gpt6Astra: "video"
};
var PROMPT_LIBRARY_PAGE_SIZE = 18;
function promptLibrarySourceSlug(source) {
  return PROMPT_LIBRARY_SOURCE_SLUGS[source];
}
function promptLibrarySourceDisplayName(source) {
  return PROMPT_LIBRARY_SOURCE_DISPLAY_NAMES[source];
}
function promptLibrarySourceUrl(source) {
  return PROMPT_LIBRARY_SOURCE_URLS[source];
}
function promptLibrarySourceApiModel(source) {
  return PROMPT_LIBRARY_SOURCE_API_MODELS[source];
}
function promptLibrarySourceGithubReferencesBaseUrl(source) {
  return PROMPT_LIBRARY_SOURCE_GITHUB_REFERENCES_BASE_URLS[source];
}
function promptLibrarySourceMediaType(source) {
  return PROMPT_LIBRARY_SOURCE_MEDIA_TYPES[source];
}
var promptLibraryMediaType = promptLibrarySourceMediaType;
function promptLibrarySourceUsesPromptFill(source) {
  return source === "claudeOpus55" || source === "gpt6Astra";
}
function tryPromptLibrarySourceFromSlug(slug) {
  return PROMPT_LIBRARY_SOURCES.find((source) => promptLibrarySourceSlug(source) === slug) ?? null;
}
function promptLibrarySourceFromSlug(slug) {
  return tryPromptLibrarySourceFromSlug(slug) ?? "nanoBananaPro";
}
var promptLibraryVideoPreviewSchema = external_exports.object({
  streamId: external_exports.string().nullable(),
  url: external_exports.string(),
  thumbnailUrl: external_exports.string().nullable(),
  caption: external_exports.string().nullable()
});
var promptLibraryEntrySchema = external_exports.object({
  id: external_exports.string(),
  source: promptLibrarySourceSchema,
  title: external_exports.string(),
  description: external_exports.string().nullable(),
  prompt: external_exports.string(),
  translatedPrompt: external_exports.string().nullable().optional(),
  authorName: external_exports.string().nullable().optional(),
  authorUrl: external_exports.string().nullable().optional(),
  sourceUrl: external_exports.string().nullable().optional(),
  publishedAt: external_exports.number().nullable().optional(),
  featured: external_exports.boolean().optional(),
  language: external_exports.string().nullable().optional(),
  mediaType: promptLibraryMediaTypeSchema,
  previewImages: external_exports.array(external_exports.string()),
  previewVideos: external_exports.array(promptLibraryVideoPreviewSchema),
  tags: external_exports.array(external_exports.string()).optional(),
  categorySlugs: external_exports.array(external_exports.string()).optional()
});
var promptLibraryCacheSchema = external_exports.object({
  source: promptLibrarySourceSchema,
  lastSyncedAt: external_exports.number(),
  totalEntries: external_exports.number().int(),
  parserVersion: external_exports.number().int(),
  entries: external_exports.array(promptLibraryEntrySchema)
});
var promptLibraryVideoPreviewJsonSchema = external_exports.object({
  stream_id: external_exports.string().nullable().optional(),
  url: external_exports.string().optional(),
  thumbnail_url: external_exports.string().nullable().optional(),
  caption: external_exports.string().nullable().optional()
});
var promptLibraryEntryJsonSchema = external_exports.object({
  id: external_exports.string().optional(),
  source: external_exports.string().optional(),
  title: external_exports.string().optional(),
  description: external_exports.string().nullable().optional(),
  prompt: external_exports.string().optional(),
  translated_prompt: external_exports.string().nullable().optional(),
  author_name: external_exports.string().nullable().optional(),
  author_url: external_exports.string().nullable().optional(),
  source_url: external_exports.string().nullable().optional(),
  published_at: external_exports.string().nullable().optional(),
  featured: external_exports.boolean().optional(),
  language: external_exports.string().nullable().optional(),
  media_type: external_exports.string().optional(),
  preview_images: external_exports.array(external_exports.unknown()).optional(),
  preview_videos: external_exports.array(external_exports.unknown()).optional(),
  tags: external_exports.array(external_exports.unknown()).optional(),
  category_slugs: external_exports.array(external_exports.unknown()).optional()
});
var promptLibraryIndexEntryJsonSchema = external_exports.object({
  source: external_exports.string().optional(),
  last_synced_at: external_exports.string().optional(),
  total_entries: external_exports.number().int().optional(),
  parser_version: external_exports.number().int().optional()
});
var promptLibraryCacheJsonSchema = promptLibraryIndexEntryJsonSchema.extend({
  entries: external_exports.array(external_exports.unknown()).optional()
});
function isRecord(value) {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
function stringOrNull(value) {
  return typeof value === "string" ? value : null;
}
function stringList(value) {
  return Array.isArray(value) ? value.filter((item) => typeof item === "string") : [];
}
function parseDateMs(value, fallback) {
  if (typeof value !== "string") return fallback;
  const parsed = Date.parse(value);
  return Number.isNaN(parsed) ? fallback : parsed;
}
function isoString(value) {
  return new Date(value).toISOString();
}
function promptLibraryVideoPreviewFromJson(value) {
  const json = isRecord(value) ? value : {};
  return {
    streamId: stringOrNull(json["stream_id"]),
    url: stringOrNull(json["url"]) ?? "",
    thumbnailUrl: stringOrNull(json["thumbnail_url"]),
    caption: stringOrNull(json["caption"])
  };
}
function promptLibraryVideoPreviewToJson(video) {
  return {
    stream_id: video.streamId,
    url: video.url,
    thumbnail_url: video.thumbnailUrl,
    caption: video.caption
  };
}
function promptLibraryEntryFromJson(value) {
  const json = isRecord(value) ? value : {};
  const rawVideos = Array.isArray(json["preview_videos"]) ? json["preview_videos"] : [];
  return {
    id: stringOrNull(json["id"]) ?? "",
    source: promptLibrarySourceFromSlug(
      stringOrNull(json["source"]) ?? PROMPT_LIBRARY_SOURCE_SLUGS.nanoBananaPro
    ),
    title: stringOrNull(json["title"]) ?? "Untitled",
    description: stringOrNull(json["description"]),
    prompt: stringOrNull(json["prompt"]) ?? "",
    translatedPrompt: stringOrNull(json["translated_prompt"]),
    authorName: stringOrNull(json["author_name"]),
    authorUrl: stringOrNull(json["author_url"]),
    sourceUrl: stringOrNull(json["source_url"]),
    publishedAt: parseDateMs(json["published_at"], null),
    featured: typeof json["featured"] === "boolean" ? json["featured"] : false,
    language: stringOrNull(json["language"]),
    mediaType: json["media_type"] === "video" ? "video" : "image",
    previewImages: stringList(json["preview_images"]),
    previewVideos: rawVideos.filter(isRecord).map(promptLibraryVideoPreviewFromJson),
    tags: stringList(json["tags"]),
    categorySlugs: stringList(json["category_slugs"])
  };
}
function promptLibraryEntryToJson(entry) {
  return {
    id: entry.id,
    source: promptLibrarySourceSlug(entry.source),
    title: entry.title,
    description: entry.description,
    prompt: entry.prompt,
    translated_prompt: entry.translatedPrompt ?? null,
    author_name: entry.authorName ?? null,
    author_url: entry.authorUrl ?? null,
    source_url: entry.sourceUrl ?? null,
    published_at: entry.publishedAt == null ? null : isoString(entry.publishedAt),
    featured: entry.featured ?? false,
    language: entry.language ?? null,
    media_type: entry.mediaType,
    preview_images: entry.previewImages,
    preview_videos: entry.previewVideos.map(promptLibraryVideoPreviewToJson),
    tags: entry.tags ?? [],
    category_slugs: entry.categorySlugs ?? []
  };
}
function promptLibraryCacheFromJson(value) {
  const json = isRecord(value) ? value : {};
  const rawEntries = Array.isArray(json["entries"]) ? json["entries"] : [];
  return {
    source: promptLibrarySourceFromSlug(
      stringOrNull(json["source"]) ?? PROMPT_LIBRARY_SOURCE_SLUGS.nanoBananaPro
    ),
    lastSyncedAt: parseDateMs(json["last_synced_at"], 0) ?? 0,
    totalEntries: typeof json["total_entries"] === "number" ? json["total_entries"] : rawEntries.length,
    parserVersion: typeof json["parser_version"] === "number" ? json["parser_version"] : 0,
    entries: rawEntries.filter(isRecord).map(promptLibraryEntryFromJson)
  };
}
function promptLibraryCacheToJson(cache) {
  return {
    source: promptLibrarySourceSlug(cache.source),
    last_synced_at: isoString(cache.lastSyncedAt),
    total_entries: cache.totalEntries,
    parser_version: cache.parserVersion,
    entries: cache.entries.map(promptLibraryEntryToJson)
  };
}
function mergePromptLibraryEntries(options) {
  const merged = /* @__PURE__ */ new Map();
  for (const entry of options.previous) {
    if (entry.id.length === 0) continue;
    merged.set(entry.id, entry);
  }
  for (const entry of options.incoming) {
    if (entry.id.length === 0) continue;
    const existing = merged.get(entry.id);
    merged.set(
      entry.id,
      existing === void 0 ? entry : options.resolve?.(existing, entry) ?? entry
    );
  }
  return [...merged.values()];
}
function mergePromptLibraryCache(cache, incoming, options = {}) {
  const entries = mergePromptLibraryEntries({
    previous: cache.entries,
    incoming,
    resolve: options.resolve
  });
  const reportedTotal = options.upstreamTotal ?? cache.totalEntries;
  return {
    source: cache.source,
    lastSyncedAt: options.lastSyncedAt ?? Date.now(),
    totalEntries: Math.max(entries.length, reportedTotal),
    parserVersion: options.parserVersion ?? cache.parserVersion,
    entries
  };
}
function stablePromptFallbackId(prompt) {
  return `h${sha1Hex(prompt.trim()).slice(0, 16)}`;
}
function sha1Hex(value) {
  const bytes = [...new TextEncoder().encode(value)];
  const bitLength = bytes.length * 8;
  bytes.push(128);
  while (bytes.length % 64 !== 56) bytes.push(0);
  const high = Math.floor(bitLength / 4294967296);
  const low = bitLength >>> 0;
  for (let shift = 24; shift >= 0; shift -= 8) bytes.push(high >>> shift & 255);
  for (let shift = 24; shift >= 0; shift -= 8) bytes.push(low >>> shift & 255);
  let h0 = 1732584193;
  let h1 = 4023233417;
  let h2 = 2562383102;
  let h3 = 271733878;
  let h4 = 3285377520;
  const words = new Uint32Array(80);
  for (let offset = 0; offset < bytes.length; offset += 64) {
    for (let index = 0; index < 16; index++) {
      const position = offset + index * 4;
      words[index] = (bytes[position] ?? 0) << 24 | (bytes[position + 1] ?? 0) << 16 | (bytes[position + 2] ?? 0) << 8 | (bytes[position + 3] ?? 0);
    }
    for (let index = 16; index < 80; index++) {
      words[index] = rotateLeft(
        (words[index - 3] ?? 0) ^ (words[index - 8] ?? 0) ^ (words[index - 14] ?? 0) ^ (words[index - 16] ?? 0),
        1
      );
    }
    let a = h0;
    let b = h1;
    let c = h2;
    let d = h3;
    let e = h4;
    for (let index = 0; index < 80; index++) {
      let f;
      let k;
      if (index < 20) {
        f = b & c | ~b & d;
        k = 1518500249;
      } else if (index < 40) {
        f = b ^ c ^ d;
        k = 1859775393;
      } else if (index < 60) {
        f = b & c | b & d | c & d;
        k = 2400959708;
      } else {
        f = b ^ c ^ d;
        k = 3395469782;
      }
      const temporary = rotateLeft(a, 5) + f + e + k + (words[index] ?? 0) >>> 0;
      e = d;
      d = c;
      c = rotateLeft(b, 30);
      b = a;
      a = temporary;
    }
    h0 = h0 + a >>> 0;
    h1 = h1 + b >>> 0;
    h2 = h2 + c >>> 0;
    h3 = h3 + d >>> 0;
    h4 = h4 + e >>> 0;
  }
  return [h0, h1, h2, h3, h4].map((word) => word.toString(16).padStart(8, "0")).join("");
}
function rotateLeft(value, bits) {
  return (value << bits | value >>> 32 - bits) >>> 0;
}

// src/main/prompt-library-mirror.ts
var import_node_crypto = require("node:crypto");
var PROMPT_LIBRARY_MIRROR_SOURCES = [
  "seedance",
  "seedance25",
  "grokImagine",
  "claudeOpus55",
  "gpt6Astra"
];
var PROMPT_LIBRARY_MIRROR_MAX_AGE_MS = 3 * 24 * 60 * 60 * 1e3;
var PROMPT_LIBRARY_MIRROR_MAX_BYTES = 96 * 1024 * 1024;
var PROMPT_LIBRARY_MIRROR_MANIFEST_FILE = "manifest.json";
var PROMPT_LIBRARY_MIRROR_SCHEMA = 1;
var isoDateSchema = external_exports.string().refine((value) => !Number.isNaN(Date.parse(value)), "Expected a date.");
var promptLibraryMirrorLibrarySchema = external_exports.object({
  /**
   * A bare file name beside the manifest, `<slug>.<first twelve of the hash>.json`.
   * Anything else (a path, a URL) is refused, so a manifest can never send the app to
   * read from another place. The hash is in the name so that a manifest and its library
   * can never be served out of step: the static host caches each file on its own for a
   * few minutes, and a new manifest naming a new file cannot be answered with an old one.
   */
  file: external_exports.string().regex(/^[a-z0-9_]+\.[0-9a-f]{12}\.json$/u),
  sha256: external_exports.string().regex(/^[0-9a-f]{64}$/u),
  bytes: external_exports.number().int().nonnegative(),
  /** How many prompts the file holds. */
  entries: external_exports.number().int().nonnegative(),
  /** The host's own total, which can exceed `entries` after an incomplete crawl. */
  total_entries: external_exports.number().int().nonnegative(),
  /** When the crawler last walked this library to the end. */
  updated_at: isoDateSchema
});
var promptLibraryMirrorManifestSchema = external_exports.object({
  schema: external_exports.literal(PROMPT_LIBRARY_MIRROR_SCHEMA),
  /** Keyed by the library's slug (`promptLibrarySourceSlug`). */
  libraries: external_exports.record(external_exports.string(), promptLibraryMirrorLibrarySchema)
});
function isPromptLibraryMirrorSource(source) {
  return PROMPT_LIBRARY_MIRROR_SOURCES.includes(source);
}
function promptLibraryMirrorFileName(source, sha256) {
  return `${promptLibrarySourceSlug(source)}.${sha256.slice(0, 12)}.json`;
}
function isPromptLibraryMirrorFileName(name) {
  return /^[a-z0-9_]+\.[0-9a-f]{12}\.json$/u.test(name);
}
function sha256Hex(text) {
  return (0, import_node_crypto.createHash)("sha256").update(text, "utf8").digest("hex");
}
function parsePromptLibraryMirrorManifest(text) {
  return promptLibraryMirrorManifestSchema.parse(JSON.parse(text));
}
function encodePromptLibraryMirrorManifest(manifest) {
  return `${JSON.stringify(manifest, null, 2)}
`;
}
function encodePromptLibraryMirrorLibrary(cache) {
  const text = JSON.stringify(promptLibraryCacheToJson(cache));
  return { text, sha256: sha256Hex(text), bytes: Buffer.byteLength(text, "utf8") };
}
function decodePromptLibraryMirrorLibrary(source, text, expectedSha256) {
  if (sha256Hex(text) !== expectedSha256) {
    throw new Error(`The mirrored ${promptLibrarySourceSlug(source)} library does not match its manifest.`);
  }
  const decoded = JSON.parse(text);
  if (typeof decoded !== "object" || decoded === null || Array.isArray(decoded)) {
    throw new Error("Expected a JSON object.");
  }
  if (decoded["source"] !== promptLibrarySourceSlug(source)) {
    throw new Error(`The mirrored file is not the ${promptLibrarySourceSlug(source)} library.`);
  }
  const cache = promptLibraryCacheFromJson(decoded);
  const entries = cache.entries.filter((entry) => entry.id.length > 0 && entry.source === source);
  if (entries.length === 0) {
    throw new Error(`The mirrored ${promptLibrarySourceSlug(source)} library holds no prompts.`);
  }
  return { ...cache, source, entries };
}

// src/main/prompt-library-parser.ts
var PromptLibraryParseException = class extends Error {
  constructor(message) {
    super(message);
    this.name = "PromptLibraryParseException";
  }
  toString() {
    return `PromptLibraryParseException: ${this.message}`;
  }
};
var PromptLibraryBootstrap = class {
  source;
  fetchedAt;
  totalEntries;
  hasMore;
  entries;
  constructor(options) {
    this.source = options.source;
    this.fetchedAt = toEpochMs(options.fetchedAt);
    this.totalEntries = options.totalEntries;
    this.hasMore = options.hasMore;
    this.entries = options.entries;
  }
  toCache(options = {}) {
    return {
      source: this.source,
      lastSyncedAt: this.fetchedAt,
      totalEntries: options.totalEntriesOverride ?? this.totalEntries,
      parserVersion: PromptLibraryParser.parserVersion,
      entries: options.entriesOverride ?? this.entries
    };
  }
};
var PromptLibraryParser = class _PromptLibraryParser {
  static parserVersion = 1;
  static flightChunkPattern = /self\.__next_f\.push\(\[1,"((?:\\.|[^"\\])*)"\]\)/gs;
  parseBootstrap(options) {
    const payload = this.decodeFlightPayload(options.html);
    const promptsArray = this.extractPromptsArray(payload);
    const textRecords = decodeFlightTextRecords(payload);
    const entries = this.normalizeEntries({
      source: options.source,
      rawEntries: promptsArray.map((raw) => resolveTextReferences(raw, textRecords))
    });
    const totalEntries = this.extractTotal(payload) ?? entries.length;
    const hasMore = this.extractHasMore(payload) ?? totalEntries > entries.length;
    if (entries.length === 0) {
      throw new PromptLibraryParseException(
        "The embedded prompt payload was found, but no prompt entries were parsed."
      );
    }
    return new PromptLibraryBootstrap({
      source: options.source,
      fetchedAt: options.fetchedAt ?? Date.now(),
      totalEntries,
      hasMore,
      entries
    });
  }
  parseHtml(options) {
    return this.parseBootstrap(options).toCache();
  }
  normalizeEntries(options) {
    return options.rawEntries.filter(isRecord2).map((raw) => this.normalizeEntry(options.source, raw)).filter((entry) => entry.prompt.trim().length > 0);
  }
  normalizeNanoBananaTrendingEntries(options) {
    return options.rawEntries.filter(isRecord2).map((raw) => this.normalizeNanoBananaTrendingEntry(raw)).filter((entry) => entry !== null);
  }
  decodeFlightPayload(html) {
    const matches = [...html.matchAll(_PromptLibraryParser.flightChunkPattern)];
    if (matches.length === 0) {
      throw new PromptLibraryParseException(
        "Could not find any Next.js flight data chunks in the page HTML."
      );
    }
    let payload = "";
    for (const match of matches) {
      const encoded = match[1];
      if (encoded === void 0) continue;
      const decoded = JSON.parse(`"${encoded}"`);
      if (typeof decoded !== "string") continue;
      payload += decoded;
    }
    return payload;
  }
  extractPromptsArray(payload) {
    const marker = '"prompts":[';
    let searchStart = 0;
    let bestCandidate = [];
    for (; ; ) {
      const index = payload.indexOf(marker, searchStart);
      if (index === -1) break;
      const start = index + '"prompts":'.length;
      const arrayText = this.extractBalancedSection(payload, start, "[", "]");
      try {
        const decoded = JSON.parse(arrayText);
        if (Array.isArray(decoded)) {
          const candidate = decoded.filter(isRecord2);
          if (candidate.length > bestCandidate.length) bestCandidate = candidate;
        }
      } catch {
      }
      searchStart = start;
    }
    if (bestCandidate.length === 0) {
      throw new PromptLibraryParseException(
        "Could not decode any prompt array from the embedded website payload."
      );
    }
    return bestCandidate;
  }
  extractTotal(payload) {
    const values = [...payload.matchAll(/"total":(\d+)/g)].map(
      (match) => Number.parseInt(match[1] ?? "", 10)
    );
    if (values.length === 0) return null;
    return values.reduce((maximum, value) => value > maximum ? value : maximum, 0);
  }
  extractHasMore(payload) {
    const values = [...payload.matchAll(/"hasMore":(true|false)/g)];
    if (values.length === 0) return null;
    return values.some((match) => match[1] === "true");
  }
  extractBalancedSection(text, startIndex, openChar, closeChar) {
    if (startIndex < 0 || startIndex >= text.length || text[startIndex] !== openChar) {
      throw new PromptLibraryParseException(
        `Could not find a balanced section that starts with ${openChar}.`
      );
    }
    let depth = 0;
    let inString = false;
    let escaping = false;
    for (let index = startIndex; index < text.length; index++) {
      const char = text[index];
      if (inString) {
        if (escaping) {
          escaping = false;
          continue;
        }
        if (char === "\\") {
          escaping = true;
          continue;
        }
        if (char === '"') inString = false;
        continue;
      }
      if (char === '"') {
        inString = true;
        continue;
      }
      if (char === openChar) {
        depth++;
      } else if (char === closeChar) {
        depth--;
        if (depth === 0) return text.slice(startIndex, index + 1);
      }
    }
    throw new PromptLibraryParseException(
      `Reached the end of the payload before finding a matching ${closeChar}.`
    );
  }
  normalizeEntry(source, raw) {
    const mediaType = promptLibrarySourceMediaType(source);
    const previewImages = this.extractPreviewImages(raw, mediaType);
    const previewVideos = this.extractPreviewVideos(raw);
    const prompt = asString(raw["content"]) ?? asString(raw["prompt"]) ?? "";
    const translatedPrompt = asString(raw["translatedContent"]);
    const author = isRecord2(raw["author"]) ? raw["author"] : {};
    const rawId = asString(raw["id"])?.trim();
    const remoteId = rawId == null || rawId.length === 0 ? stablePromptFallbackId(prompt) : rawId;
    return {
      id: `${promptLibrarySourceSlug(source)}_${remoteId}`,
      source,
      title: asString(raw["title"]) ?? "Untitled",
      description: asString(raw["description"]),
      prompt,
      translatedPrompt: translatedPrompt === prompt ? null : translatedPrompt,
      authorName: asString(author["name"]),
      authorUrl: asString(author["link"]),
      sourceUrl: asString(raw["sourceLink"]) ?? asString(raw["sourceUrl"]),
      publishedAt: parseDate(asString(raw["sourcePublishedAt"])),
      featured: raw["featured"] === true,
      language: asString(raw["language"]),
      mediaType,
      previewImages,
      previewVideos,
      tags: this.extractTags(raw),
      categorySlugs: []
    };
  }
  normalizeNanoBananaTrendingEntry(raw) {
    const prompt = asString(raw["prompt"])?.trim() ?? "";
    if (prompt.length === 0) return null;
    const remoteId = asString(raw["id"]) ?? stablePromptFallbackId(prompt);
    const rank = asInt(raw["rank"]);
    const categories = stringList2(raw["categories"]);
    const images = dedupeStrings([...stringList2(raw["images"]), asString(raw["image"])]);
    const authorName = asString(raw["author_name"]) ?? asString(raw["author"]);
    const score = asNumber(raw["score"]);
    const rating = asInt(raw["rating"]);
    const model = asString(raw["model"]);
    return {
      id: `nano_banana_trending_${remoteId}`,
      source: "nanoBananaTrending",
      title: rank === null ? "Trending Prompt" : `Trending Prompt #${rank}`,
      description: trendingDescription(asInt(raw["likes"]), asInt(raw["views"]), score),
      prompt,
      translatedPrompt: null,
      authorName,
      authorUrl: null,
      sourceUrl: asString(raw["source_url"]),
      publishedAt: parseDate(asString(raw["date"])),
      featured: rank !== null && rank <= 25,
      language: detectTrendingLanguage(prompt),
      mediaType: "image",
      previewImages: images,
      previewVideos: [],
      tags: dedupeStrings([
        ...categories,
        model === null ? null : `model:${model}`,
        rating === null ? null : `rating:${rating}`,
        "image"
      ]),
      categorySlugs: categories
    };
  }
  extractPreviewImages(raw, mediaType) {
    const results = [];
    const addValues = (value) => {
      if (typeof value === "string" && value.length > 0 && !results.includes(value)) {
        results.push(value);
      } else if (Array.isArray(value)) {
        for (const item of value) addValues(item);
      }
    };
    addValues(raw["mediaThumbnails"]);
    addValues(raw["media"]);
    addValues(raw["images"]);
    addValues(raw["image"]);
    if (mediaType === "video") {
      const videos = Array.isArray(raw["videos"]) ? raw["videos"] : [];
      for (const video of videos) {
        if (isRecord2(video)) addValues(video["thumbnail"]);
      }
      if (isRecord2(raw["video"])) addValues(raw["video"]["thumbnail"]);
      addValues(raw["referenceImages"]);
    }
    return results;
  }
  extractPreviewVideos(raw) {
    const listed = Array.isArray(raw["videos"]) ? raw["videos"] : [];
    const videos = isRecord2(raw["video"]) ? [...listed, raw["video"]] : listed;
    return videos.filter(isRecord2).map((video) => ({
      streamId: asString(video["streamId"]),
      url: asString(video["sourceUrl"]) ?? asString(video["url"]) ?? "",
      thumbnailUrl: asString(video["thumbnail"]),
      caption: asString(video["caption"])
    })).filter((video) => video.url.length > 0);
  }
  extractTags(raw) {
    const tags = /* @__PURE__ */ new Set();
    const addValue = (value) => {
      if (typeof value === "string" && value.length > 0 && !value.startsWith("$")) {
        tags.add(value);
      } else if (Array.isArray(value)) {
        for (const item of value) addValue(item);
      }
    };
    addValue(raw["promptCategories"]);
    addValue(raw["imageCategories"]);
    addValue(raw["categories"]);
    addValue(raw["tags"]);
    return [...tags].sort();
  }
};
function isRecord2(value) {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
var TEXT_RECORD_HEADER = /([0-9a-f]+):T([0-9a-f]+),/;
var TEXT_REFERENCE = /^\$[0-9a-f]+$/;
var TEXT_REFERENCE_FIELDS = ["content", "translatedContent"];
function decodeFlightTextRecords(payload) {
  const bytes = Buffer.from(payload, "utf8");
  const text = bytes.toString("latin1");
  const decoder = new TextDecoder("utf-8", { fatal: true });
  const records = /* @__PURE__ */ new Map();
  let offset = 0;
  while (offset < text.length) {
    const match = TEXT_RECORD_HEADER.exec(text.slice(offset));
    const id = match?.[1];
    const length = match?.[2];
    if (match === null || id === void 0 || length === void 0) break;
    const start = offset + match.index + match[0].length;
    const end = start + Number.parseInt(length, 16);
    if (end > bytes.length) break;
    try {
      records.set(id, decoder.decode(bytes.subarray(start, end)));
    } catch {
    }
    offset = end;
  }
  return records;
}
function resolveTextReferences(raw, records) {
  const resolved = { ...raw };
  for (const field of TEXT_REFERENCE_FIELDS) {
    const value = resolved[field];
    if (typeof value === "string" && TEXT_REFERENCE.test(value)) {
      resolved[field] = records.get(value.slice(1)) ?? null;
    }
  }
  return resolved;
}
function asString(value) {
  if (value == null) return null;
  if (typeof value === "string") return value.startsWith("$undefined") ? null : value;
  if (typeof value === "number" || typeof value === "boolean" || typeof value === "bigint") {
    return String(value);
  }
  if (typeof value === "symbol") return value.description ?? "";
  if (typeof value === "function") return value.name;
  try {
    return JSON.stringify(value) ?? "";
  } catch {
    return Object.prototype.toString.call(value);
  }
}
function asInt(value) {
  if (value == null) return null;
  if (typeof value === "number") return Number.isFinite(value) ? Math.trunc(value) : null;
  const serialized = asString(value);
  if (serialized === null) return null;
  const parsed = Number.parseInt(serialized, 10);
  return Number.isNaN(parsed) ? null : parsed;
}
function asNumber(value) {
  if (value == null) return null;
  if (typeof value === "number") return Number.isFinite(value) ? value : null;
  const serialized = asString(value);
  if (serialized === null) return null;
  const parsed = Number(serialized);
  return Number.isNaN(parsed) ? null : parsed;
}
function stringList2(value) {
  if (!Array.isArray(value)) return [];
  return value.map(asString).filter((item) => item !== null).filter((item) => item.trim().length > 0);
}
function parseDate(value) {
  if (value === null || value.length === 0 || value.startsWith("$")) return null;
  const parsed = Date.parse(value);
  return Number.isNaN(parsed) ? null : parsed;
}
function trendingDescription(likes, views, score) {
  const parts = [
    likes === null ? null : `${formatInt(likes)} likes`,
    views === null ? null : `${formatInt(views)} views`,
    score === null ? null : `Score ${formatScore(score)}`
  ].filter((part) => part !== null);
  return parts.length === 0 ? null : parts.join(" \xB7 ");
}
function formatInt(value) {
  const raw = String(value);
  let formatted = "";
  for (let index = 0; index < raw.length; index++) {
    const remaining = raw.length - index;
    formatted += raw[index];
    if (remaining > 1 && remaining % 3 === 1) formatted += ",";
  }
  return formatted;
}
function formatScore(value) {
  return Number.isInteger(value) ? String(Math.trunc(value)) : String(value);
}
function detectTrendingLanguage(value) {
  if (/[\u3040-\u30ff]/u.test(value)) return "ja";
  if (/[\u3400-\u4dbf\u4e00-\u9fff]/u.test(value)) return "zh";
  if (/[\uac00-\ud7af]/u.test(value)) return "ko";
  if (/[\u0600-\u06ff]/u.test(value)) return "ar";
  return "en";
}
function dedupeStrings(values) {
  const result2 = [];
  const seen = /* @__PURE__ */ new Set();
  for (const value of values) {
    if (value === null) continue;
    const normalized = value.trim();
    if (normalized.length === 0 || seen.has(normalized)) continue;
    seen.add(normalized);
    result2.push(normalized);
  }
  return result2;
}
function toEpochMs(value) {
  return typeof value === "number" ? value : value.getTime();
}

// src/main/request-pacer.ts
var realSleep = (ms) => new Promise((resolve2) => setTimeout(resolve2, ms));
var RequestPacer = class {
  limit;
  windowMs;
  now;
  sleep;
  /** When each of the last `limit` requests was allowed to go, oldest first. */
  allowedAt = [];
  tail = Promise.resolve();
  constructor(options) {
    this.limit = Math.max(1, Math.trunc(options.limit));
    this.windowMs = Math.max(0, options.windowMs);
    this.now = options.now ?? Date.now;
    this.sleep = options.sleep ?? realSleep;
  }
  /**
   * Resolves when the caller may send its request. `onWait` is told how long the wait is,
   * before it starts, when there is one.
   */
  acquire(onWait) {
    const turn = this.tail.then(() => this.take(onWait));
    this.tail = turn.catch(() => void 0);
    return turn;
  }
  async take(onWait) {
    const now = this.now();
    const blocker = this.allowedAt.length >= this.limit ? this.allowedAt[0] : void 0;
    const at = blocker === void 0 ? now : Math.max(now, blocker + this.windowMs);
    this.allowedAt.push(at);
    if (this.allowedAt.length > this.limit) this.allowedAt.shift();
    const wait = at - now;
    if (wait <= 0) return;
    onWait?.(wait);
    await this.sleep(wait);
  }
};

// src/main/strip-bom.ts
function stripBom(text) {
  return text.charCodeAt(0) === 65279 ? text.slice(1) : text;
}

// src/main/prompt-library-sync.ts
var PROMPT_API_URL = "https://youmind.com/youhome-api/prompts";
var VIDEO_PROMPT_API_URL = "https://youmind.com/youmarketing-api/video-prompts";
var MARKETING_PROMPT_API_URL = "https://youmind.com/youmarketing-api/prompts";
var SEEDANCE_README_URL = "https://raw.githubusercontent.com/YouMind-OpenLab/awesome-seedance-2-prompts/main/README.md";
var SEEDANCE_VIDEO_URLS_URL = "https://raw.githubusercontent.com/YouMind-OpenLab/awesome-seedance-2-prompts/main/video-urls.json";
var STALE_AFTER_MS = 24 * 60 * 60 * 1e3;
var MIRROR_LIBRARY_TIMEOUT_MS = 12e4;
var PROMPT_API_PACING = { limit: 25, windowMs: 6e4 };
var PROMPT_API_RETRY_WAITS_MS = [15e3, 3e4, 6e4];
var PROMPT_API_RETRY_AFTER_CAP_MS = 12e4;
var PROMPT_API_WAIT_NOTICE_MS = 1e3;
var PromptApiRateLimitedError = class extends Error {
  constructor(source, page) {
    super(`The library server is limiting requests and refused page ${page} for ${displayName(source)}.`);
    this.name = "PromptApiRateLimitedError";
  }
};
var PromptLibrarySyncService = class {
  fetchImpl;
  parser;
  now;
  sleep;
  retryWaitsMs;
  mirrorBaseUrl;
  /**
   * One pacer for the whole service, not one per sync: the host counts every request from
   * this machine together, whichever library and whichever of its endpoints it is for, so
   * two libraries refreshed at once share the allowance.
   */
  pacer;
  constructor(options = {}) {
    this.fetchImpl = options.fetch ?? globalThis.fetch;
    this.parser = options.parser ?? new PromptLibraryParser();
    this.now = options.now ?? Date.now;
    this.sleep = options.sleep ?? realSleep;
    this.retryWaitsMs = options.retryWaitsMs ?? PROMPT_API_RETRY_WAITS_MS;
    this.mirrorBaseUrl = options.mirrorBaseUrl?.replace(/\/+$/u, "") || null;
    this.pacer = new RequestPacer({
      ...options.pacing ?? PROMPT_API_PACING,
      now: this.now,
      sleep: this.sleep
    });
  }
  async syncLibrary(source, options = {}) {
    const mirrored = await this.syncFromMirror(source, options);
    if (mirrored) return mirrored;
    if (source === "nanoBananaTrending") return this.syncTrending(options);
    if (promptLibrarySourceGithubReferencesBaseUrl(source)) return this.syncGithubReferences(source, options);
    if (promptLibraryMediaType(source) === "video") return this.syncVideo(source, options);
    return this.syncWebsite(source, options);
  }
  /**
   * The library from the published mirror (DEV-23): the manifest, then the library's one
   * file when it is not the one the cache already holds. Two requests to a static host in
   * place of a paced walk of the prompt API, or one when nothing changed.
   *
   * Answers null, and the caller syncs from the host as before, whenever the mirror cannot
   * stand in for it: it is switched off, it does not carry this library, it cannot be
   * reached or read, the file is not the one its manifest describes, or the crawler has
   * not completed the library for `PROMPT_LIBRARY_MIRROR_MAX_AGE_MS`.
   */
  async syncFromMirror(source, options) {
    if (!this.mirrorBaseUrl || !isPromptLibraryMirrorSource(source)) return null;
    const stale = options.staleCache?.source === source ? options.staleCache : null;
    try {
      this.emitProgress(options, source, stale?.entries.length ?? 0, null, "Checking for updates");
      const manifest = parsePromptLibraryMirrorManifest(
        await this.requestText(`${this.mirrorBaseUrl}/${PROMPT_LIBRARY_MIRROR_MANIFEST_FILE}`)
      );
      const library = manifest.libraries[promptLibrarySourceSlug(source)];
      if (!library || library.entries === 0) return null;
      if (library.bytes > PROMPT_LIBRARY_MIRROR_MAX_BYTES) return null;
      if (this.now() - Date.parse(library.updated_at) > PROMPT_LIBRARY_MIRROR_MAX_AGE_MS) return null;
      if (stale && options.mirrorSha256 === library.sha256 && stale.entries.length >= library.entries) {
        const cache2 = this.mergedCache(source, stale, [], library.total_entries);
        this.emitProgress(options, source, cache2.entries.length, cache2.entries.length, "Library up to date");
        return { ...result(cache2, null, false), mirrorSha256: library.sha256 };
      }
      this.emitProgress(options, source, stale?.entries.length ?? 0, library.entries, "Downloading library");
      const published = decodePromptLibraryMirrorLibrary(
        source,
        await this.requestText(`${this.mirrorBaseUrl}/${library.file}`, {
          signal: AbortSignal.timeout(MIRROR_LIBRARY_TIMEOUT_MS)
        }),
        library.sha256
      );
      const known = new Set(stale?.entries.map((entry) => entry.id) ?? []);
      const hasNewPrompts = published.entries.some((entry) => !known.has(entry.id));
      const cache = this.mergedCache(
        source,
        stale,
        published.entries,
        Math.max(published.totalEntries, library.total_entries)
      );
      await this.emitCache(options, cache);
      this.emitProgress(options, source, cache.entries.length, cache.totalEntries, "Library ready");
      return { ...result(cache, null, hasNewPrompts), mirrorSha256: library.sha256 };
    } catch {
      return null;
    }
  }
  async syncWebsite(source, options) {
    let bootstrap = null;
    let entries = [];
    let bootstrapError;
    try {
      const html = await this.requestText(promptLibrarySourceUrl(source));
      bootstrap = this.parser.parseBootstrap({ source, html, fetchedAt: this.now() });
      entries = dedupeEntries(bootstrap.entries);
      await this.emitCache(options, this.mergedCache(source, options.staleCache, entries, bootstrap.totalEntries, bootstrap.fetchedAt));
      this.emitProgress(options, source, entries.length, positiveOrNull(bootstrap.totalEntries), "Loading prompts");
    } catch (error) {
      bootstrapError = error;
      try {
        const page1 = await this.fetchPromptPage(source, 1);
        if (page1.entries.length > 0) {
          bootstrap = new PromptLibraryBootstrap({
            source,
            fetchedAt: this.now(),
            totalEntries: page1.totalEntries ?? page1.entries.length,
            hasMore: page1.hasMore || page1.totalEntries !== null && page1.totalEntries > page1.entries.length,
            entries: page1.entries
          });
          entries = dedupeEntries(page1.entries);
          this.emitProgress(options, source, entries.length, positiveOrNull(bootstrap.totalEntries), "Loading prompts");
        }
      } catch {
      }
      if (!bootstrap) {
        if (options.staleCache) return staleResult(source, options.staleCache, bootstrapError);
        throw bootstrapError;
      }
    }
    const targetTotal = bootstrap.totalEntries;
    if (!bootstrap.hasMore && targetTotal <= entries.length) {
      const cache = this.mergedCache(source, options.staleCache, entries, targetTotal, bootstrap.fetchedAt);
      this.emitProgress(options, source, entries.length, targetTotal || entries.length, "Library ready");
      return result(cache);
    }
    try {
      let currentTotal = targetTotal;
      let page = 2;
      let hasMore = true;
      const maxPages = currentTotal <= 0 ? 500 : Math.ceil(currentTotal / 18) + 2;
      const onWait = () => this.emitProgress(options, source, entries.length, positiveOrNull(currentTotal), WAITING_LABEL);
      while (hasMore && page <= maxPages) {
        const next = await this.fetchPromptPage(source, page, onWait);
        const before = entries.length;
        entries = dedupeEntries([...entries, ...next.entries]);
        currentTotal = Math.max(currentTotal, next.totalEntries ?? 0);
        hasMore = next.hasMore;
        if (entries.length > before) {
          await this.emitCache(options, this.mergedCache(source, options.staleCache, entries, currentTotal, bootstrap.fetchedAt));
        }
        this.emitProgress(options, source, entries.length, positiveOrNull(currentTotal), hasMore ? "Fetching more prompts" : "Finishing sync");
        if (entries.length === before && hasMore) throw new Error(`Pagination returned no new prompts for ${displayName(source)} on page ${page}.`);
        page += 1;
      }
      if (hasMore || entries.length < currentTotal) {
        throw new Error(`Library sync ended before all prompts were fetched for ${displayName(source)}. Received ${entries.length} of ${currentTotal} prompts.`);
      }
      const cache = this.mergedCache(source, options.staleCache, entries, currentTotal, bootstrap.fetchedAt);
      this.emitProgress(options, source, cache.entries.length, cache.totalEntries, "Library ready");
      return result(cache);
    } catch (error) {
      if (options.staleCache) return staleResult(source, options.staleCache, error);
      const cache = this.mergedCache(source, null, entries, targetTotal, bootstrap.fetchedAt);
      return result(cache, partialWarning(source, entries.length, targetTotal, error));
    }
  }
  async syncGithubReferences(source, options) {
    const baseUrl = promptLibrarySourceGithubReferencesBaseUrl(source);
    if (!baseUrl) throw new Error(`${displayName(source)} is not a GitHub reference source.`);
    try {
      this.emitProgress(options, source, 0, null, "Loading manifest");
      const manifest = asRecord(JSON.parse(await this.requestText(`${baseUrl}/manifest.json`)));
      const categories = githubCategories(manifest);
      if (categories.length === 0) throw new Error(`GitHub manifest for ${displayName(source)} did not include categories.`);
      const fetchedById = /* @__PURE__ */ new Map();
      const failed = [];
      for (let index = 0; index < categories.length; index += 1) {
        const category = categories[index];
        try {
          const decoded = JSON.parse(await this.requestText(`${baseUrl}/${category.file}`));
          if (!Array.isArray(decoded)) throw new Error("Expected a JSON array.");
          for (const raw of decoded) {
            if (!isRecord3(raw)) continue;
            const entry = githubReferenceEntry(source, category, raw);
            if (!entry) continue;
            const previous = fetchedById.get(entry.id);
            fetchedById.set(entry.id, previous ? mergeGithubEntry(previous, entry) : entry);
          }
          await this.emitCache(options, this.mergedCache(
            source,
            options.staleCache,
            [...fetchedById.values()],
            fetchedById.size,
            void 0,
            resolveGithubAcrossSyncs
          ));
        } catch {
          failed.push(category.slug);
        }
        this.emitProgress(options, source, index + 1, categories.length, "Loading categories");
      }
      const entries = [...fetchedById.values()];
      if (entries.length === 0) throw new Error(`No prompts were loaded from the GitHub references for ${displayName(source)}.`);
      const cache = this.mergedCache(source, options.staleCache, entries, entries.length, void 0, resolveGithubAcrossSyncs);
      this.emitProgress(options, source, entries.length, entries.length, "Library ready");
      return result(cache, failed.length === 0 ? null : `Refreshed ${entries.length} prompts from ${displayName(source)}; ${failed.length} categories could not be reached, so their previously synced prompts were kept.`);
    } catch (error) {
      if (options.staleCache?.entries.length) {
        return staleResult(source, options.staleCache, `Showing your last synced ${displayName(source)} prompts because GitHub refresh failed: ${errorText(error)}`);
      }
      throw error;
    }
  }
  async syncTrending(options) {
    const source = "nanoBananaTrending";
    try {
      this.emitProgress(options, source, 0, null, "Loading prompts");
      const decoded = JSON.parse(await this.requestText(promptLibrarySourceUrl(source)));
      if (!Array.isArray(decoded)) throw new Error("Nano Banana Trending JSON must be a list.");
      const entries = this.parser.normalizeNanoBananaTrendingEntries({ rawEntries: decoded });
      if (entries.length === 0) throw new Error("Nano Banana Trending JSON did not contain any prompts.");
      const cache = this.mergedCache(source, options.staleCache, entries, entries.length);
      await this.emitCache(options, cache);
      this.emitProgress(options, source, entries.length, entries.length, "Library ready");
      return result(cache);
    } catch (error) {
      if (options.staleCache?.entries.length) {
        return staleResult(source, options.staleCache, `Showing your last synced ${displayName(source)} prompts because GitHub refresh failed: ${errorText(error)}`);
      }
      throw error;
    }
  }
  async syncVideo(source, options) {
    let bootstrap = null;
    let entries = [];
    try {
      const html = await this.requestText(promptLibrarySourceUrl(source), {
        headers: { Accept: "text/html", "User-Agent": "Mozilla/5.0 (compatible; ai_prompt_assistant/1)" }
      });
      bootstrap = this.parser.parseBootstrap({ source, html, fetchedAt: this.now() });
      entries = dedupeEntries(bootstrap.entries);
      await this.emitCache(options, this.mergedCache(source, options.staleCache, entries, bootstrap.totalEntries, bootstrap.fetchedAt));
    } catch {
    }
    this.emitProgress(options, source, entries.length, positiveOrNull(bootstrap?.totalEntries ?? 0), "Loading prompts");
    let currentTotal = bootstrap?.totalEntries ?? 0;
    let page = 1;
    let hasMore = bootstrap === null || bootstrap.hasMore;
    const maxPages = currentTotal <= 0 ? 500 : Math.ceil(currentTotal / apiPageSize(source)) + 2;
    const onWait = () => this.emitProgress(options, source, entries.length, positiveOrNull(currentTotal), WAITING_LABEL);
    while (hasMore && page <= maxPages) {
      let next;
      try {
        next = await this.fetchPromptPage(source, page, onWait);
      } catch (error) {
        const fallback = await this.videoFallback(source, options, bootstrap, entries, error);
        if (fallback) return fallback;
        throw error;
      }
      const before = entries.length;
      entries = dedupeEntries([...entries, ...next.entries]);
      currentTotal = Math.max(currentTotal, next.totalEntries ?? 0);
      hasMore = next.hasMore;
      if (entries.length > before || page === 1) {
        await this.emitCache(options, this.mergedCache(source, options.staleCache, entries, currentTotal));
      }
      this.emitProgress(options, source, entries.length, positiveOrNull(currentTotal), hasMore ? "Fetching more prompts" : "Finishing sync");
      if (entries.length === before && hasMore && page !== 1) {
        const error = new Error(`Pagination returned no new prompts for ${displayName(source)} on page ${page}.`);
        const fallback = await this.videoFallback(source, options, bootstrap, entries, error);
        if (fallback) return fallback;
        throw error;
      }
      page += 1;
    }
    if (entries.length === 0) {
      const error = new Error(`Could not load any ${displayName(source)} prompts from the website or API.`);
      const fallback = await this.videoFallback(source, options, bootstrap, entries, error);
      if (fallback) return fallback;
      throw error;
    }
    const staleIds = new Set(options.staleCache?.entries.map((entry) => entry.id) ?? []);
    const hasNewPrompts = entries.some((entry) => !staleIds.has(entry.id));
    const cache = this.mergedCache(source, options.staleCache, entries, currentTotal);
    if (!hasNewPrompts && options.staleCache) {
      this.emitProgress(options, source, options.staleCache.entries.length, options.staleCache.entries.length, "Library up to date");
      return result(cache, null, false);
    }
    await this.emitCache(options, cache);
    this.emitProgress(options, source, entries.length, cache.totalEntries, "Library ready");
    return result(cache);
  }
  async videoFallback(source, options, bootstrap, entries, error) {
    const github = await this.trySeedanceMirror(source, options, bootstrap, entries);
    if (github) return result(github.cache, github.warning);
    if (entries.length > 0) {
      const expected = bootstrap?.totalEntries ?? entries.length;
      return result(this.mergedCache(source, options.staleCache, entries, expected), partialWarning(source, entries.length, expected, error));
    }
    if (options.staleCache?.entries.length) return staleResult(source, options.staleCache, staleWarning(source, error));
    return null;
  }
  /**
   * `onWait` is called before any wait of a second or more, for the rate limit or after a
   * refusal, so the caller can say why nothing is arriving.
   */
  async fetchPromptPage(source, page, onWait) {
    const errors = [];
    for (const apiModel of apiModels(source)) {
      try {
        const value = await this.fetchPromptPageForModel(source, page, apiModel, onWait);
        if (value.entries.length > 0 || value.hasMore || (value.totalEntries ?? 0) > 0) return value;
        errors.push(`${apiModel} returned no prompts, total=0, and hasMore=false`);
      } catch (error) {
        if (error instanceof PromptApiRateLimitedError) throw error;
        errors.push(`${apiModel} failed: ${errorText(error)}`);
      }
    }
    throw new Error(`Prompt API page ${page} for ${displayName(source)} was unavailable. ${errors.join(" | ")}`);
  }
  /**
   * One page request, within the host's allowance: it waits its turn at the pacer, and a
   * page the host still refuses with 429 is asked for again after a wait, up to
   * `retryWaitsMs.length` times. Any other failure is not retried here.
   */
  async requestPromptPage(source, page, apiUrl, body, onWait) {
    const notice = (waitMs) => {
      if (waitMs >= PROMPT_API_WAIT_NOTICE_MS) onWait?.();
    };
    for (let attempt = 0; ; attempt++) {
      await this.pacer.acquire(notice);
      const response = await this.fetchImpl(apiUrl, {
        method: "POST",
        signal: AbortSignal.timeout(2e4),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json, text/plain, */*",
          Origin: "https://youmind.com",
          Referer: promptLibrarySourceUrl(source),
          "User-Agent": "ai_prompt_assistant/1 libraries-sync"
        },
        body: JSON.stringify(body)
      });
      if (response.status !== 429) return response;
      const base = this.retryWaitsMs[attempt];
      if (base === void 0) throw new PromptApiRateLimitedError(source, page);
      const wait = Math.max(base, retryAfterMs(response));
      notice(wait);
      await this.sleep(wait);
    }
  }
  async fetchPromptPageForModel(source, page, apiModel, onWait) {
    const isVideo = promptLibraryMediaType(source) === "video";
    const isAstra = source === "gpt6Astra";
    const body = { model: apiModel, page, limit: apiPageSize(source), locale: "en-US", q: "" };
    if (promptLibrarySourceUsesPromptFill(source)) Object.assign(body, { sortBy: "time", sortOrder: "desc" });
    if (isAstra) Object.assign(body, { searchMode: "prompt" });
    if (!isVideo) Object.assign(body, { categories: null, campaign: null, filterMode: null });
    const apiUrl = isAstra ? MARKETING_PROMPT_API_URL : isVideo ? VIDEO_PROMPT_API_URL : PROMPT_API_URL;
    const response = await this.requestPromptPage(source, page, apiUrl, body, onWait);
    if (response.status !== 200) throw new Error(`Unexpected response while loading page ${page} for ${displayName(source)}.`);
    const payload = asRecord(await response.json());
    if (!Array.isArray(payload["prompts"])) throw new Error(`Prompt API page ${page} for ${displayName(source)} did not include a prompts array.`);
    return {
      entries: this.parser.normalizeEntries({ source, rawEntries: payload["prompts"] }),
      hasMore: payload["hasMore"] === true,
      totalEntries: typeof payload["total"] === "number" ? Math.trunc(payload["total"]) : null
    };
  }
  async trySeedanceMirror(source, options, bootstrap, existingEntries) {
    if (source !== "seedance") return null;
    this.emitProgress(options, source, existingEntries.length, positiveOrNull(bootstrap?.totalEntries ?? 0), SEEDANCE_GITHUB_FALLBACK_LABEL);
    try {
      const readme = await this.requestText(SEEDANCE_README_URL);
      const rawVideoUrls = JSON.parse(await this.requestText(SEEDANCE_VIDEO_URLS_URL));
      const videoUrls = seedanceVideoUrls(rawVideoUrls);
      const githubEntries = parseSeedanceEntries(readme, videoUrls);
      const mergedEntries = dedupeEntries([...existingEntries, ...githubEntries]);
      if (mergedEntries.length <= existingEntries.length) return null;
      this.emitProgress(options, source, mergedEntries.length, positiveOrNull(bootstrap?.totalEntries ?? 0), "GitHub mirror ready");
      const expected = bootstrap?.totalEntries && bootstrap.totalEntries > 0 ? bootstrap.totalEntries : extractSeedanceTotal(readme) ?? mergedEntries.length;
      const cache = this.mergedCache(source, options.staleCache, mergedEntries, expected, bootstrap?.fetchedAt);
      await this.emitCache(options, cache);
      return {
        cache,
        warning: expected > mergedEntries.length ? `Loaded ${mergedEntries.length} prompts from the public Seedance 2.0 mirror because the upstream full-library sync is currently unavailable. ${expected - mergedEntries.length} more prompts could not be fetched right now.` : null
      };
    } catch {
      return null;
    }
  }
  mergedCache(source, staleCache, entries, upstreamTotal, lastSyncedAt = this.now(), resolve2) {
    const previous = staleCache?.source === source ? staleCache : {
      source,
      lastSyncedAt: this.now(),
      totalEntries: 0,
      parserVersion: PromptLibraryParser.parserVersion,
      entries: []
    };
    return mergePromptLibraryCache(previous, entries, {
      lastSyncedAt,
      upstreamTotal,
      parserVersion: PromptLibraryParser.parserVersion,
      resolve: resolve2
    });
  }
  async requestText(url, init = {}) {
    const response = await this.fetchImpl(url, {
      ...init,
      signal: init.signal ?? AbortSignal.timeout(2e4),
      headers: { "User-Agent": "ai_prompt_assistant/1 libraries-sync", ...init.headers }
    });
    if (response.status !== 200) throw new Error(`Unexpected response (${response.status}) while fetching ${url}`);
    const text = stripBom(await response.text());
    if (!text) throw new Error(`Empty response while fetching ${url}`);
    return text;
  }
  emitProgress(options, source, loadedEntries, totalEntries, label) {
    const progress = totalEntries && totalEntries > 0 ? clamp(loadedEntries / totalEntries) : null;
    options.onProgress?.({ source, loadedEntries, totalEntries, label, progress, percent: progress === null ? null : Math.round(progress * 100) });
  }
  async emitCache(options, cache) {
    await options.onCacheUpdated?.(cache);
  }
};
function result(cache, warning = null, hasNewPrompts = true) {
  return { cache, usedStaleCache: false, hasNewPrompts, warning };
}
function staleResult(source, cache, error) {
  return { cache, usedStaleCache: true, hasNewPrompts: false, warning: typeof error === "string" ? error : staleWarning(source, error) };
}
var WAITING_LABEL = "Waiting for the library server";
var SEEDANCE_GITHUB_FALLBACK_LABEL = "Loading GitHub mirror";
function retryAfterMs(response) {
  const raw = response.headers.get("retry-after")?.trim() ?? "";
  if (raw.length === 0) return 0;
  const seconds = /^\d+(?:\.\d+)?$/u.test(raw) ? Number(raw) * 1e3 : Date.parse(raw) - Date.now();
  if (!Number.isFinite(seconds) || seconds <= 0) return 0;
  return Math.min(seconds, PROMPT_API_RETRY_AFTER_CAP_MS);
}
function hasUpstreamSyncWording(source) {
  return source === "seedance" || source === "seedance25" || source === "grokImagine";
}
function apiPageSize(source) {
  if (source === "gpt6Astra") return PROMPT_LIBRARY_PAGE_SIZE;
  return promptLibraryMediaType(source) === "video" ? 12 : PROMPT_LIBRARY_PAGE_SIZE;
}
function staleWarning(source, error) {
  if (hasUpstreamSyncWording(source)) {
    return `Showing your last synced ${displayName(source)} prompts because the upstream full-library sync is currently unavailable.`;
  }
  return errorText(error);
}
function partialWarning(source, loaded, expected, error) {
  if (hasUpstreamSyncWording(source) && loaded > 0 && expected > loaded) {
    return `Loaded the newest ${loaded} prompts from ${displayName(source)}, but the upstream full-library sync is currently unavailable. ${expected - loaded} more prompts could not be fetched right now.`;
  }
  if (loaded > 0 && expected > loaded) return `Loaded ${loaded} of ${expected} prompts from ${displayName(source)}. Full pagination is temporarily unavailable.`;
  return `Partial sync only: ${errorText(error)}`;
}
function displayName(source) {
  return promptLibrarySourceDisplayName(source);
}
function positiveOrNull(value) {
  return value > 0 ? value : null;
}
function clamp(value) {
  return Math.max(0, Math.min(1, value));
}
function errorText(error) {
  return error instanceof Error ? error.message : String(error);
}
function isRecord3(value) {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
function asRecord(value) {
  if (!isRecord3(value)) throw new Error("Expected a JSON object.");
  return value;
}
function asString2(value) {
  if (value === null || value === void 0) return null;
  let text;
  if (typeof value === "string") text = value;
  else if (typeof value === "number" || typeof value === "boolean" || typeof value === "bigint") text = String(value);
  else if (typeof value === "symbol") text = value.description ?? "";
  else if (typeof value === "function") text = value.name;
  else {
    try {
      text = JSON.stringify(value) ?? "";
    } catch {
      text = "";
    }
  }
  text = text.trim();
  return text ? text : null;
}
function apiModels(source) {
  if (source === "seedance") return ["seedance-2.0", "seedance-2-0"];
  if (source === "grokImagine") return ["grok-imagine", "grok-imagine-video"];
  return [promptLibrarySourceApiModel(source)];
}
function dedupeEntries(entries) {
  const deduped = /* @__PURE__ */ new Map();
  for (const entry of entries) deduped.set(entry.id, entry);
  return [...deduped.values()];
}
function dedupeStrings2(values) {
  const seen = /* @__PURE__ */ new Set();
  for (const value of values) if (value) seen.add(value);
  return [...seen];
}
function normalizeSlug(value) {
  return value.trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}
function detectLanguage(value) {
  if (/[\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff]/u.test(value)) return "ja";
  if (/[\uac00-\ud7af]/u.test(value)) return "ko";
  if (/[\u0600-\u06ff]/u.test(value)) return "ar";
  return "en";
}
function githubCategories(manifest) {
  const categories = manifest["categories"];
  if (!Array.isArray(categories)) return [];
  return categories.flatMap((value) => {
    if (!isRecord3(value)) return [];
    const file = asString2(value["file"]);
    if (!file) return [];
    const slug = normalizeSlug(asString2(value["slug"]) ?? file.replace(/\.json$/i, ""));
    return slug ? [{ slug, title: asString2(value["title"]) ?? slug, file }] : [];
  });
}
function githubReferenceEntry(source, category, value) {
  const prompt = asString2(value["content"]);
  if (!prompt) return null;
  const rawId = asString2(value["id"]) ?? stablePromptFallbackId(prompt);
  const previewImages = Array.isArray(value["sourceMedia"]) ? dedupeStrings2(value["sourceMedia"].map(asString2)) : [];
  const language = detectLanguage(prompt);
  return {
    id: `${promptLibrarySourceSlug(source)}_${rawId}`,
    source,
    title: asString2(value["title"]) ?? "Untitled",
    description: asString2(value["description"]),
    prompt,
    translatedPrompt: null,
    authorName: null,
    authorUrl: null,
    sourceUrl: promptLibrarySourceUrl(source),
    publishedAt: null,
    featured: false,
    language,
    mediaType: "image",
    previewImages,
    previewVideos: [],
    tags: dedupeStrings2([category.slug, value["needReferenceImages"] === true ? "needs-reference" : null, language]),
    categorySlugs: [category.slug]
  };
}
function mergeGithubEntry(previous, incoming) {
  return {
    ...previous,
    description: previous.description ?? incoming.description,
    translatedPrompt: previous.translatedPrompt ?? incoming.translatedPrompt,
    authorName: previous.authorName ?? incoming.authorName,
    authorUrl: previous.authorUrl ?? incoming.authorUrl,
    sourceUrl: previous.sourceUrl ?? incoming.sourceUrl,
    publishedAt: previous.publishedAt ?? incoming.publishedAt,
    featured: (previous.featured ?? false) || (incoming.featured ?? false),
    language: previous.language ?? incoming.language,
    previewImages: dedupeStrings2([...previous.previewImages, ...incoming.previewImages]),
    tags: dedupeStrings2([...previous.tags ?? [], ...incoming.tags ?? []]),
    categorySlugs: dedupeStrings2([...previous.categorySlugs ?? [], ...incoming.categorySlugs ?? []])
  };
}
function resolveGithubAcrossSyncs(previous, incoming) {
  return {
    ...incoming,
    previewImages: dedupeStrings2([...incoming.previewImages, ...previous.previewImages]),
    tags: dedupeStrings2([...incoming.tags ?? [], ...previous.tags ?? []]),
    categorySlugs: dedupeStrings2([...incoming.categorySlugs ?? [], ...previous.categorySlugs ?? []])
  };
}
function seedanceVideoUrls(value) {
  const root = isRecord3(value) ? value["prompts"] : null;
  if (!isRecord3(root)) return /* @__PURE__ */ new Map();
  return new Map(Object.entries(root).filter((entry) => typeof entry[1] === "string" && entry[1].length > 0));
}
function parseSeedanceEntries(readme, videoUrls) {
  const normalized = readme.replaceAll("\r\n", "\n");
  const headings = [...normalized.matchAll(/^###\s+.+$/gm)];
  return headings.flatMap((heading, index) => {
    const start = heading.index;
    const end = headings[index + 1]?.index ?? normalized.length;
    const entry = parseSeedanceBlock(normalized.slice(start, end).trim(), videoUrls);
    return entry ? [entry] : [];
  });
}
function parseSeedanceBlock(block, videoUrls) {
  const heading = block.match(/^###\s+(.+)$/m)?.[1]?.trim();
  if (!heading) return null;
  const watchUrl = extractMarkdownActionUrl(block, "(?:\u{1F3AC}\\s*)?Watch Video");
  const tryUrl = extractMarkdownActionUrl(block, "(?:\u{1F449}\\s*)?Try it now");
  const id = extractPromptId(tryUrl ?? watchUrl);
  const prompt = extractSeedancePrompt(block);
  if (!id || !prompt) return null;
  const images = extractSeedanceImages(block);
  const author = extractField(block, "Author");
  const source = extractField(block, "Source");
  const publishedAt = parseGithubDate(extractTextField(block, "Published"));
  const language = extractSeedanceLanguage(block);
  const featured = block.includes("Featured-gold");
  const videoUrl = videoUrls.get(id);
  const previewVideos = videoUrl ? [{
    streamId: null,
    url: videoUrl,
    thumbnailUrl: images[0] ?? null,
    caption: "Seedance GitHub mirror"
  }] : [];
  return {
    id: `seedance_${id}`,
    source: "seedance",
    title: heading.replace(/^No\.\s*\d+:\s*/i, ""),
    description: extractSeedanceDescription(block),
    prompt,
    translatedPrompt: null,
    authorName: author?.text ?? null,
    authorUrl: author?.url ?? null,
    sourceUrl: source?.url ?? tryUrl ?? watchUrl,
    publishedAt,
    featured,
    language,
    mediaType: "video",
    previewImages: images,
    previewVideos,
    tags: [...featured ? ["featured"] : [], ...language ? [language] : []],
    categorySlugs: []
  };
}
function extractSeedancePrompt(block) {
  const fenced = block.match(/####\s+.*Prompt\s*\n\s*\n```([\s\S]*?)```/i)?.[1];
  if (fenced !== void 0) return fenced.trim();
  const heading = /(^####\s+.*Prompt\s*$)/im.exec(block);
  if (!heading?.index && heading?.index !== 0) return "";
  const body = block.slice(heading.index + heading[0].length).trimStart();
  const stop = /\n(?:####\s+|\*\*\[(?:🎬\s*)?Watch Video|\*\*Author:|<img |---)/i.exec(body);
  return body.slice(0, stop?.index ?? body.length).trim();
}
function extractSeedanceDescription(block) {
  const explicit = block.match(/####\s+.*Description\s*\n\s*\n([\s\S]*?)(?=\n####\s+)/i)?.[1]?.trim();
  if (explicit) return explicit;
  const beforePrompt = block.split(/\n####\s+.*Prompt\s*\n/i)[0];
  const lines = beforePrompt?.split("\n").filter((line) => line.trimStart().startsWith(">")).map((line) => line.replace(/^\s*>\s?/, "").trim()).filter(Boolean) ?? [];
  return lines.length ? lines.join(" ") : null;
}
function extractSeedanceImages(block) {
  const urls = [
    ...[...block.matchAll(/<img[^>]+src="([^"]+)"/gi)].map((match) => match[1]),
    ...[...block.matchAll(/!\[[^\]]*\]\(([^)\s]+)/gi)].map((match) => match[1])
  ];
  return dedupeStrings2(urls.filter((url) => {
    const lower = url?.toLowerCase() ?? "";
    return /^https?:\/\//.test(lower) && !lower.includes("img.shields.io") && !lower.includes("awesome.re/badge") && !lower.endsWith(".svg");
  }));
}
function extractField(block, label) {
  const match = new RegExp(`\\*\\*${label}:\\*\\*\\s*(?:\\[([^\\]]+)\\]\\(([^)]+)\\)|([^|\\n]+))`, "i").exec(block);
  if (!match) return null;
  return { text: asString2(match[1] ?? match[3]), url: asString2(match[2]) };
}
function extractTextField(block, label) {
  return asString2(new RegExp(`\\*\\*${label}:\\*\\*\\s*([^\\n|]+)`, "i").exec(block)?.[1]);
}
function extractMarkdownActionUrl(block, labelPattern) {
  return asString2(new RegExp(`\\*\\*\\[${labelPattern}[^\\]]*\\]\\(([^)]+)\\)\\*\\*`, "i").exec(block)?.[1]);
}
function extractPromptId(url) {
  if (!url) return null;
  try {
    return new URL(url).searchParams.get("id");
  } catch {
    return null;
  }
}
function extractSeedanceLanguage(block) {
  const label = block.match(/!\[([^\]]+)\]\(https:\/\/img\.shields\.io\/badge\/lang-/i)?.[1]?.trim().toLowerCase();
  if (!label) return null;
  return { english: "en", "\u4E2D\u6587": "zh", "\u65E5\u672C\u8A9E": "ja", "\uD55C\uAD6D\uC5B4": "ko" }[label] ?? label;
}
function parseGithubDate(value) {
  if (!value) return null;
  const direct = Date.parse(value);
  if (!Number.isNaN(direct)) return direct;
  const normalized = value.replace(/(?<=\d)(st|nd|rd|th)\b/gi, "");
  const parsed = Date.parse(normalized);
  return Number.isNaN(parsed) ? null : parsed;
}
function extractSeedanceTotal(readme) {
  const match = /\|\s*[^\n|]*Total Prompts[^\n|]*\|\s*\*\*(\d+)\*\*/i.exec(readme);
  return match?.[1] ? Number.parseInt(match[1], 10) : null;
}

// tools/library-mirror/build.ts
var import_promises = require("node:fs/promises");
var import_node_path = require("node:path");
var NEVER_COMPLETED = (/* @__PURE__ */ new Date(0)).toISOString();
var PROGRESS_LOG_INTERVAL_MS = 3e4;
async function buildPromptLibraryMirror(options) {
  const now = options.now ?? Date.now;
  const log = options.log ?? (() => void 0);
  const sources = options.sources ?? PROMPT_LIBRARY_MIRROR_SOURCES;
  await (0, import_promises.mkdir)(options.directory, { recursive: true });
  const previous = await readManifest(options.directory);
  const libraries = { ...previous.libraries };
  const reports = [];
  for (const source of sources) {
    const slug = promptLibrarySourceSlug(source);
    const name = promptLibrarySourceDisplayName(source);
    const published = await readPublished(options.directory, source, previous.libraries[slug]);
    const report = await crawlLibrary(source, published, options.crawler, now, log);
    reports.push(report.summary);
    if (report.next) {
      if (report.next.info.file !== published?.info.file) {
        await writeAtomically((0, import_node_path.join)(options.directory, report.next.info.file), report.next.text);
      }
      libraries[slug] = report.next.info;
    }
    log(`${name}: ${report.summary.outcome}, ${report.summary.entries} prompts` + (report.summary.added > 0 ? ` (${report.summary.added} new)` : "") + (report.summary.message ? `. ${report.summary.message}` : ""));
  }
  const manifest = {
    schema: PROMPT_LIBRARY_MIRROR_SCHEMA,
    libraries: orderedLibraries(libraries)
  };
  await writeAtomically(
    (0, import_node_path.join)(options.directory, PROMPT_LIBRARY_MIRROR_MANIFEST_FILE),
    encodePromptLibraryMirrorManifest(manifest)
  );
  await removeSupersededFiles(options.directory, previous, manifest);
  return { libraries: reports };
}
async function crawlLibrary(source, published, crawler, now, log) {
  const name = promptLibrarySourceDisplayName(source);
  const before = published?.cache.entries.length ?? 0;
  const failed = (message2) => ({
    summary: { source, outcome: "failed", entries: before, added: 0, message: message2 },
    next: null
  });
  let usedReadmeFallback = false;
  let lastLoggedAt = now();
  let result2;
  try {
    result2 = await crawler.syncLibrary(source, {
      staleCache: published?.cache ?? null,
      onProgress: (progress) => {
        if (progress.label === SEEDANCE_GITHUB_FALLBACK_LABEL) usedReadmeFallback = true;
        if (now() - lastLoggedAt < PROGRESS_LOG_INTERVAL_MS) return;
        lastLoggedAt = now();
        log(`${name}: ${progress.label} ${progress.loadedEntries}/${progress.totalEntries ?? "?"}`);
      }
    });
  } catch (error) {
    return failed(error instanceof Error ? error.message : String(error));
  }
  if (result2.usedStaleCache) return failed(result2.warning ?? "The host could not be reached.");
  if (result2.cache.entries.length === 0) return failed("The crawl returned no prompts.");
  const complete = result2.warning === null && !usedReadmeFallback;
  const message = result2.warning ?? (usedReadmeFallback ? "Finished from the public GitHub collection, which is a subset." : null);
  const carried = published ? encodePromptLibraryMirrorLibrary({ ...result2.cache, lastSyncedAt: published.cache.lastSyncedAt }) : null;
  const sameContent = published !== null && carried !== null && carried.text === published.text;
  const cache = sameContent ? published.cache : { ...result2.cache, lastSyncedAt: now() };
  const encoded = sameContent ? carried : encodePromptLibraryMirrorLibrary(cache);
  const info = {
    file: promptLibraryMirrorFileName(source, encoded.sha256),
    sha256: encoded.sha256,
    bytes: encoded.bytes,
    entries: cache.entries.length,
    total_entries: cache.totalEntries,
    updated_at: complete ? new Date(now()).toISOString() : published?.info.updated_at ?? NEVER_COMPLETED
  };
  const outcome = !complete ? "incomplete" : sameContent ? "unchanged" : "updated";
  return {
    summary: { source, outcome, entries: cache.entries.length, added: cache.entries.length - before, message },
    next: { info, text: encoded.text, cache }
  };
}
async function readManifest(directory) {
  try {
    return parsePromptLibraryMirrorManifest(
      await (0, import_promises.readFile)((0, import_node_path.join)(directory, PROMPT_LIBRARY_MIRROR_MANIFEST_FILE), "utf8")
    );
  } catch {
    return { schema: PROMPT_LIBRARY_MIRROR_SCHEMA, libraries: {} };
  }
}
async function readPublished(directory, source, info) {
  if (!info) return null;
  try {
    const text = await (0, import_promises.readFile)((0, import_node_path.join)(directory, info.file), "utf8");
    return { info, text, cache: decodePromptLibraryMirrorLibrary(source, text, info.sha256) };
  } catch {
    return null;
  }
}
function orderedLibraries(libraries) {
  const ordered = {};
  const known = PROMPT_LIBRARY_MIRROR_SOURCES.map((source) => promptLibrarySourceSlug(source));
  for (const slug of [...known, ...Object.keys(libraries).sort()]) {
    const info = libraries[slug];
    if (info && !(slug in ordered)) ordered[slug] = info;
  }
  return ordered;
}
async function removeSupersededFiles(directory, previous, current) {
  const keep = new Set(
    [...Object.values(previous.libraries), ...Object.values(current.libraries)].map((info) => info.file)
  );
  for (const name of await (0, import_promises.readdir)(directory)) {
    if (isPromptLibraryMirrorFileName(name) && !keep.has(name)) {
      await (0, import_promises.rm)((0, import_node_path.join)(directory, name), { force: true });
    }
  }
}
async function writeAtomically(path, contents) {
  const temp = `${path}.tmp`;
  await (0, import_promises.writeFile)(temp, contents, "utf8");
  await (0, import_promises.rm)(path, { force: true });
  await (0, import_promises.rename)(temp, path);
}

// tools/library-mirror/cli.ts
async function main() {
  const { values } = (0, import_node_util.parseArgs)({
    options: {
      out: { type: "string", default: "data" },
      only: { type: "string" }
    }
  });
  const sources = values.only === void 0 ? PROMPT_LIBRARY_MIRROR_SOURCES : parseSources(values.only);
  const directory = (0, import_node_path2.resolve)(values.out);
  console.log(`Building the prompt-library mirror in ${directory}`);
  const report = await buildPromptLibraryMirror({
    directory,
    crawler: new PromptLibrarySyncService(),
    sources,
    log: (line) => {
      console.log(line);
    }
  });
  const refreshed = report.libraries.filter((library) => library.outcome !== "failed");
  console.log(`Done: ${refreshed.length} of ${report.libraries.length} libraries refreshed.`);
  if (refreshed.length === 0) process.exitCode = 1;
}
function parseSources(value) {
  return value.split(",").map((raw) => {
    const slug = raw.trim();
    const source = tryPromptLibrarySourceFromSlug(slug);
    if (!source || !isPromptLibraryMirrorSource(source)) {
      throw new Error(`"${slug}" is not a mirrored library.`);
    }
    return source;
  });
}
main().catch((error) => {
  console.error(error instanceof Error ? error.message : String(error));
  process.exitCode = 1;
});
