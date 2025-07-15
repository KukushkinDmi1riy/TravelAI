/**
 * Client
 **/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model User
 *
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>;
/**
 * Model UserProgress
 *
 */
export type UserProgress =
  $Result.DefaultSelection<Prisma.$UserProgressPayload>;
/**
 * Model Achievement
 *
 */
export type Achievement = $Result.DefaultSelection<Prisma.$AchievementPayload>;
/**
 * Model UserAchievement
 *
 */
export type UserAchievement =
  $Result.DefaultSelection<Prisma.$UserAchievementPayload>;
/**
 * Model Team
 *
 */
export type Team = $Result.DefaultSelection<Prisma.$TeamPayload>;
/**
 * Model TeamBattleResult
 *
 */
export type TeamBattleResult =
  $Result.DefaultSelection<Prisma.$TeamBattleResultPayload>;
/**
 * Model Lesson
 *
 */
export type Lesson = $Result.DefaultSelection<Prisma.$LessonPayload>;
/**
 * Model UserLessonProgress
 *
 */
export type UserLessonProgress =
  $Result.DefaultSelection<Prisma.$UserLessonProgressPayload>;
/**
 * Model DailyActivityLog
 *
 */
export type DailyActivityLog =
  $Result.DefaultSelection<Prisma.$DailyActivityLogPayload>;
/**
 * Model QuizResult
 *
 */
export type QuizResult = $Result.DefaultSelection<Prisma.$QuizResultPayload>;
/**
 * Model LeaderboardEntry
 *
 */
export type LeaderboardEntry =
  $Result.DefaultSelection<Prisma.$LeaderboardEntryPayload>;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions
    ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<ClientOptions['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(
    optionsArg?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>,
  );
  $on<V extends U>(
    eventType: V,
    callback: (
      event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent,
    ) => void,
  ): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (
      prisma: Omit<PrismaClient, runtime.ITXClientDenyList>,
    ) => $Utils.JsPromise<R>,
    options?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<
    'extends',
    Prisma.TypeMapCb<ClientOptions>,
    ExtArgs,
    $Utils.Call<
      Prisma.TypeMapCb<ClientOptions>,
      {
        extArgs: ExtArgs;
      }
    >
  >;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userProgress`: Exposes CRUD operations for the **UserProgress** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more UserProgresses
   * const userProgresses = await prisma.userProgress.findMany()
   * ```
   */
  get userProgress(): Prisma.UserProgressDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.achievement`: Exposes CRUD operations for the **Achievement** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Achievements
   * const achievements = await prisma.achievement.findMany()
   * ```
   */
  get achievement(): Prisma.AchievementDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userAchievement`: Exposes CRUD operations for the **UserAchievement** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more UserAchievements
   * const userAchievements = await prisma.userAchievement.findMany()
   * ```
   */
  get userAchievement(): Prisma.UserAchievementDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.team`: Exposes CRUD operations for the **Team** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Teams
   * const teams = await prisma.team.findMany()
   * ```
   */
  get team(): Prisma.TeamDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.teamBattleResult`: Exposes CRUD operations for the **TeamBattleResult** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more TeamBattleResults
   * const teamBattleResults = await prisma.teamBattleResult.findMany()
   * ```
   */
  get teamBattleResult(): Prisma.TeamBattleResultDelegate<
    ExtArgs,
    ClientOptions
  >;

  /**
   * `prisma.lesson`: Exposes CRUD operations for the **Lesson** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Lessons
   * const lessons = await prisma.lesson.findMany()
   * ```
   */
  get lesson(): Prisma.LessonDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userLessonProgress`: Exposes CRUD operations for the **UserLessonProgress** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more UserLessonProgresses
   * const userLessonProgresses = await prisma.userLessonProgress.findMany()
   * ```
   */
  get userLessonProgress(): Prisma.UserLessonProgressDelegate<
    ExtArgs,
    ClientOptions
  >;

  /**
   * `prisma.dailyActivityLog`: Exposes CRUD operations for the **DailyActivityLog** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more DailyActivityLogs
   * const dailyActivityLogs = await prisma.dailyActivityLog.findMany()
   * ```
   */
  get dailyActivityLog(): Prisma.DailyActivityLogDelegate<
    ExtArgs,
    ClientOptions
  >;

  /**
   * `prisma.quizResult`: Exposes CRUD operations for the **QuizResult** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more QuizResults
   * const quizResults = await prisma.quizResult.findMany()
   * ```
   */
  get quizResult(): Prisma.QuizResultDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.leaderboardEntry`: Exposes CRUD operations for the **LeaderboardEntry** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more LeaderboardEntries
   * const leaderboardEntries = await prisma.leaderboardEntry.findMany()
   * ```
   */
  get leaderboardEntry(): Prisma.LeaderboardEntryDelegate<
    ExtArgs,
    ClientOptions
  >;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 6.11.1
   * Query Engine version: f40f79ec31188888a2e33acda0ecc8fd10a853a9
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  export import JsonObject = runtime.JsonObject;
  export import JsonArray = runtime.JsonArray;
  export import JsonValue = runtime.JsonValue;
  export import InputJsonObject = runtime.InputJsonObject;
  export import InputJsonArray = runtime.InputJsonArray;
  export import InputJsonValue = runtime.InputJsonValue;

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
     * Type of `Prisma.DbNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class DbNull {
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  type SelectAndOmit = {
    select: any;
    omit: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> =
    T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<
    T extends (...args: any) => $Utils.JsPromise<any>,
  > = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude
    ? 'Please either choose `select` or `include`.'
    : T extends SelectAndOmit
      ? 'Please either choose `select` or `omit`.'
      : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object
    ? U extends object
      ? (Without<T, U> & U) | (Without<U, T> & T)
      : U
    : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> =
    T extends Array<any>
      ? False
      : T extends Date
        ? False
        : T extends Uint8Array
          ? False
          : T extends BigInt
            ? False
            : T extends object
              ? True
              : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<
    __Either<O, K>
  >;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = O extends unknown ? _Either<O, K, strict> : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O
    ? O[K]
    : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown
    ? AtStrict<O, K>
    : never;
  export type At<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
        [K in keyof A]: A[K];
      } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
      ?
          | (K extends keyof O ? { [P in K]: O[P] } & O : O)
          | ({ [P in keyof O as P extends K ? P : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown
    ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>>
    : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
      ? 1
      : 0;

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>,
  > = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<
            UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never
          >
        : never
      : {} extends FieldPaths<T[K]>
        ? never
        : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<
    T,
    K extends Enumerable<keyof T> | keyof T,
  > = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}`
    ? never
    : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never
    ? never
    : FieldRef<Model, FieldType>;

  export const ModelName: {
    User: 'User';
    UserProgress: 'UserProgress';
    Achievement: 'Achievement';
    UserAchievement: 'UserAchievement';
    Team: 'Team';
    TeamBattleResult: 'TeamBattleResult';
    Lesson: 'Lesson';
    UserLessonProgress: 'UserLessonProgress';
    DailyActivityLog: 'DailyActivityLog';
    QuizResult: 'QuizResult';
    LeaderboardEntry: 'LeaderboardEntry';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb<ClientOptions = {}>
    extends $Utils.Fn<
      { extArgs: $Extensions.InternalArgs },
      $Utils.Record<string, any>
    > {
    returns: Prisma.TypeMap<
      this['params']['extArgs'],
      ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}
    >;
  }

  export type TypeMap<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > = {
    globalOmitOptions: {
      omit: GlobalOmitOptions;
    };
    meta: {
      modelProps:
        | 'user'
        | 'userProgress'
        | 'achievement'
        | 'userAchievement'
        | 'team'
        | 'teamBattleResult'
        | 'lesson'
        | 'userLessonProgress'
        | 'dailyActivityLog'
        | 'quizResult'
        | 'leaderboardEntry';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>;
        fields: Prisma.UserFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.UserCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
      UserProgress: {
        payload: Prisma.$UserProgressPayload<ExtArgs>;
        fields: Prisma.UserProgressFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.UserProgressFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserProgressPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.UserProgressFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserProgressPayload>;
          };
          findFirst: {
            args: Prisma.UserProgressFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserProgressPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.UserProgressFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserProgressPayload>;
          };
          findMany: {
            args: Prisma.UserProgressFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserProgressPayload>[];
          };
          create: {
            args: Prisma.UserProgressCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserProgressPayload>;
          };
          createMany: {
            args: Prisma.UserProgressCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.UserProgressCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserProgressPayload>[];
          };
          delete: {
            args: Prisma.UserProgressDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserProgressPayload>;
          };
          update: {
            args: Prisma.UserProgressUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserProgressPayload>;
          };
          deleteMany: {
            args: Prisma.UserProgressDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.UserProgressUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.UserProgressUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserProgressPayload>[];
          };
          upsert: {
            args: Prisma.UserProgressUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserProgressPayload>;
          };
          aggregate: {
            args: Prisma.UserProgressAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUserProgress>;
          };
          groupBy: {
            args: Prisma.UserProgressGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserProgressGroupByOutputType>[];
          };
          count: {
            args: Prisma.UserProgressCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<UserProgressCountAggregateOutputType>
              | number;
          };
        };
      };
      Achievement: {
        payload: Prisma.$AchievementPayload<ExtArgs>;
        fields: Prisma.AchievementFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.AchievementFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.AchievementFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>;
          };
          findFirst: {
            args: Prisma.AchievementFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.AchievementFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>;
          };
          findMany: {
            args: Prisma.AchievementFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>[];
          };
          create: {
            args: Prisma.AchievementCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>;
          };
          createMany: {
            args: Prisma.AchievementCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.AchievementCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>[];
          };
          delete: {
            args: Prisma.AchievementDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>;
          };
          update: {
            args: Prisma.AchievementUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>;
          };
          deleteMany: {
            args: Prisma.AchievementDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.AchievementUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.AchievementUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>[];
          };
          upsert: {
            args: Prisma.AchievementUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>;
          };
          aggregate: {
            args: Prisma.AchievementAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateAchievement>;
          };
          groupBy: {
            args: Prisma.AchievementGroupByArgs<ExtArgs>;
            result: $Utils.Optional<AchievementGroupByOutputType>[];
          };
          count: {
            args: Prisma.AchievementCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<AchievementCountAggregateOutputType>
              | number;
          };
        };
      };
      UserAchievement: {
        payload: Prisma.$UserAchievementPayload<ExtArgs>;
        fields: Prisma.UserAchievementFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.UserAchievementFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserAchievementPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.UserAchievementFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserAchievementPayload>;
          };
          findFirst: {
            args: Prisma.UserAchievementFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserAchievementPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.UserAchievementFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserAchievementPayload>;
          };
          findMany: {
            args: Prisma.UserAchievementFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserAchievementPayload>[];
          };
          create: {
            args: Prisma.UserAchievementCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserAchievementPayload>;
          };
          createMany: {
            args: Prisma.UserAchievementCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.UserAchievementCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserAchievementPayload>[];
          };
          delete: {
            args: Prisma.UserAchievementDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserAchievementPayload>;
          };
          update: {
            args: Prisma.UserAchievementUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserAchievementPayload>;
          };
          deleteMany: {
            args: Prisma.UserAchievementDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.UserAchievementUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.UserAchievementUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserAchievementPayload>[];
          };
          upsert: {
            args: Prisma.UserAchievementUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserAchievementPayload>;
          };
          aggregate: {
            args: Prisma.UserAchievementAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUserAchievement>;
          };
          groupBy: {
            args: Prisma.UserAchievementGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserAchievementGroupByOutputType>[];
          };
          count: {
            args: Prisma.UserAchievementCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<UserAchievementCountAggregateOutputType>
              | number;
          };
        };
      };
      Team: {
        payload: Prisma.$TeamPayload<ExtArgs>;
        fields: Prisma.TeamFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.TeamFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TeamPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.TeamFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>;
          };
          findFirst: {
            args: Prisma.TeamFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TeamPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.TeamFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>;
          };
          findMany: {
            args: Prisma.TeamFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>[];
          };
          create: {
            args: Prisma.TeamCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>;
          };
          createMany: {
            args: Prisma.TeamCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.TeamCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>[];
          };
          delete: {
            args: Prisma.TeamDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>;
          };
          update: {
            args: Prisma.TeamUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>;
          };
          deleteMany: {
            args: Prisma.TeamDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.TeamUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.TeamUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>[];
          };
          upsert: {
            args: Prisma.TeamUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>;
          };
          aggregate: {
            args: Prisma.TeamAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateTeam>;
          };
          groupBy: {
            args: Prisma.TeamGroupByArgs<ExtArgs>;
            result: $Utils.Optional<TeamGroupByOutputType>[];
          };
          count: {
            args: Prisma.TeamCountArgs<ExtArgs>;
            result: $Utils.Optional<TeamCountAggregateOutputType> | number;
          };
        };
      };
      TeamBattleResult: {
        payload: Prisma.$TeamBattleResultPayload<ExtArgs>;
        fields: Prisma.TeamBattleResultFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.TeamBattleResultFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TeamBattleResultPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.TeamBattleResultFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TeamBattleResultPayload>;
          };
          findFirst: {
            args: Prisma.TeamBattleResultFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TeamBattleResultPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.TeamBattleResultFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TeamBattleResultPayload>;
          };
          findMany: {
            args: Prisma.TeamBattleResultFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TeamBattleResultPayload>[];
          };
          create: {
            args: Prisma.TeamBattleResultCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TeamBattleResultPayload>;
          };
          createMany: {
            args: Prisma.TeamBattleResultCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.TeamBattleResultCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TeamBattleResultPayload>[];
          };
          delete: {
            args: Prisma.TeamBattleResultDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TeamBattleResultPayload>;
          };
          update: {
            args: Prisma.TeamBattleResultUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TeamBattleResultPayload>;
          };
          deleteMany: {
            args: Prisma.TeamBattleResultDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.TeamBattleResultUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.TeamBattleResultUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TeamBattleResultPayload>[];
          };
          upsert: {
            args: Prisma.TeamBattleResultUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TeamBattleResultPayload>;
          };
          aggregate: {
            args: Prisma.TeamBattleResultAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateTeamBattleResult>;
          };
          groupBy: {
            args: Prisma.TeamBattleResultGroupByArgs<ExtArgs>;
            result: $Utils.Optional<TeamBattleResultGroupByOutputType>[];
          };
          count: {
            args: Prisma.TeamBattleResultCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<TeamBattleResultCountAggregateOutputType>
              | number;
          };
        };
      };
      Lesson: {
        payload: Prisma.$LessonPayload<ExtArgs>;
        fields: Prisma.LessonFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.LessonFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LessonPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.LessonFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>;
          };
          findFirst: {
            args: Prisma.LessonFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LessonPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.LessonFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>;
          };
          findMany: {
            args: Prisma.LessonFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>[];
          };
          create: {
            args: Prisma.LessonCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>;
          };
          createMany: {
            args: Prisma.LessonCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.LessonCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>[];
          };
          delete: {
            args: Prisma.LessonDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>;
          };
          update: {
            args: Prisma.LessonUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>;
          };
          deleteMany: {
            args: Prisma.LessonDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.LessonUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.LessonUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>[];
          };
          upsert: {
            args: Prisma.LessonUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>;
          };
          aggregate: {
            args: Prisma.LessonAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateLesson>;
          };
          groupBy: {
            args: Prisma.LessonGroupByArgs<ExtArgs>;
            result: $Utils.Optional<LessonGroupByOutputType>[];
          };
          count: {
            args: Prisma.LessonCountArgs<ExtArgs>;
            result: $Utils.Optional<LessonCountAggregateOutputType> | number;
          };
        };
      };
      UserLessonProgress: {
        payload: Prisma.$UserLessonProgressPayload<ExtArgs>;
        fields: Prisma.UserLessonProgressFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.UserLessonProgressFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserLessonProgressPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.UserLessonProgressFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserLessonProgressPayload>;
          };
          findFirst: {
            args: Prisma.UserLessonProgressFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserLessonProgressPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.UserLessonProgressFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserLessonProgressPayload>;
          };
          findMany: {
            args: Prisma.UserLessonProgressFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserLessonProgressPayload>[];
          };
          create: {
            args: Prisma.UserLessonProgressCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserLessonProgressPayload>;
          };
          createMany: {
            args: Prisma.UserLessonProgressCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.UserLessonProgressCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserLessonProgressPayload>[];
          };
          delete: {
            args: Prisma.UserLessonProgressDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserLessonProgressPayload>;
          };
          update: {
            args: Prisma.UserLessonProgressUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserLessonProgressPayload>;
          };
          deleteMany: {
            args: Prisma.UserLessonProgressDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.UserLessonProgressUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.UserLessonProgressUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserLessonProgressPayload>[];
          };
          upsert: {
            args: Prisma.UserLessonProgressUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserLessonProgressPayload>;
          };
          aggregate: {
            args: Prisma.UserLessonProgressAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUserLessonProgress>;
          };
          groupBy: {
            args: Prisma.UserLessonProgressGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserLessonProgressGroupByOutputType>[];
          };
          count: {
            args: Prisma.UserLessonProgressCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<UserLessonProgressCountAggregateOutputType>
              | number;
          };
        };
      };
      DailyActivityLog: {
        payload: Prisma.$DailyActivityLogPayload<ExtArgs>;
        fields: Prisma.DailyActivityLogFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.DailyActivityLogFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$DailyActivityLogPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.DailyActivityLogFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$DailyActivityLogPayload>;
          };
          findFirst: {
            args: Prisma.DailyActivityLogFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$DailyActivityLogPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.DailyActivityLogFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$DailyActivityLogPayload>;
          };
          findMany: {
            args: Prisma.DailyActivityLogFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$DailyActivityLogPayload>[];
          };
          create: {
            args: Prisma.DailyActivityLogCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$DailyActivityLogPayload>;
          };
          createMany: {
            args: Prisma.DailyActivityLogCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.DailyActivityLogCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$DailyActivityLogPayload>[];
          };
          delete: {
            args: Prisma.DailyActivityLogDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$DailyActivityLogPayload>;
          };
          update: {
            args: Prisma.DailyActivityLogUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$DailyActivityLogPayload>;
          };
          deleteMany: {
            args: Prisma.DailyActivityLogDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.DailyActivityLogUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.DailyActivityLogUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$DailyActivityLogPayload>[];
          };
          upsert: {
            args: Prisma.DailyActivityLogUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$DailyActivityLogPayload>;
          };
          aggregate: {
            args: Prisma.DailyActivityLogAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateDailyActivityLog>;
          };
          groupBy: {
            args: Prisma.DailyActivityLogGroupByArgs<ExtArgs>;
            result: $Utils.Optional<DailyActivityLogGroupByOutputType>[];
          };
          count: {
            args: Prisma.DailyActivityLogCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<DailyActivityLogCountAggregateOutputType>
              | number;
          };
        };
      };
      QuizResult: {
        payload: Prisma.$QuizResultPayload<ExtArgs>;
        fields: Prisma.QuizResultFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.QuizResultFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$QuizResultPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.QuizResultFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$QuizResultPayload>;
          };
          findFirst: {
            args: Prisma.QuizResultFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$QuizResultPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.QuizResultFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$QuizResultPayload>;
          };
          findMany: {
            args: Prisma.QuizResultFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$QuizResultPayload>[];
          };
          create: {
            args: Prisma.QuizResultCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$QuizResultPayload>;
          };
          createMany: {
            args: Prisma.QuizResultCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.QuizResultCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$QuizResultPayload>[];
          };
          delete: {
            args: Prisma.QuizResultDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$QuizResultPayload>;
          };
          update: {
            args: Prisma.QuizResultUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$QuizResultPayload>;
          };
          deleteMany: {
            args: Prisma.QuizResultDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.QuizResultUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.QuizResultUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$QuizResultPayload>[];
          };
          upsert: {
            args: Prisma.QuizResultUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$QuizResultPayload>;
          };
          aggregate: {
            args: Prisma.QuizResultAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateQuizResult>;
          };
          groupBy: {
            args: Prisma.QuizResultGroupByArgs<ExtArgs>;
            result: $Utils.Optional<QuizResultGroupByOutputType>[];
          };
          count: {
            args: Prisma.QuizResultCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<QuizResultCountAggregateOutputType>
              | number;
          };
        };
      };
      LeaderboardEntry: {
        payload: Prisma.$LeaderboardEntryPayload<ExtArgs>;
        fields: Prisma.LeaderboardEntryFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.LeaderboardEntryFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LeaderboardEntryPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.LeaderboardEntryFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LeaderboardEntryPayload>;
          };
          findFirst: {
            args: Prisma.LeaderboardEntryFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LeaderboardEntryPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.LeaderboardEntryFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LeaderboardEntryPayload>;
          };
          findMany: {
            args: Prisma.LeaderboardEntryFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LeaderboardEntryPayload>[];
          };
          create: {
            args: Prisma.LeaderboardEntryCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LeaderboardEntryPayload>;
          };
          createMany: {
            args: Prisma.LeaderboardEntryCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.LeaderboardEntryCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LeaderboardEntryPayload>[];
          };
          delete: {
            args: Prisma.LeaderboardEntryDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LeaderboardEntryPayload>;
          };
          update: {
            args: Prisma.LeaderboardEntryUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LeaderboardEntryPayload>;
          };
          deleteMany: {
            args: Prisma.LeaderboardEntryDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.LeaderboardEntryUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.LeaderboardEntryUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LeaderboardEntryPayload>[];
          };
          upsert: {
            args: Prisma.LeaderboardEntryUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LeaderboardEntryPayload>;
          };
          aggregate: {
            args: Prisma.LeaderboardEntryAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateLeaderboardEntry>;
          };
          groupBy: {
            args: Prisma.LeaderboardEntryGroupByArgs<ExtArgs>;
            result: $Utils.Optional<LeaderboardEntryGroupByOutputType>[];
          };
          count: {
            args: Prisma.LeaderboardEntryCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<LeaderboardEntryCountAggregateOutputType>
              | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<
    'define',
    Prisma.TypeMapCb,
    $Extensions.DefaultArgs
  >;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[];
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    };
    /**
     * Global configuration for omitting model fields by default.
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig;
  }
  export type GlobalOmitConfig = {
    user?: UserOmit;
    userProgress?: UserProgressOmit;
    achievement?: AchievementOmit;
    userAchievement?: UserAchievementOmit;
    team?: TeamOmit;
    teamBattleResult?: TeamBattleResultOmit;
    lesson?: LessonOmit;
    userLessonProgress?: UserLessonProgressOmit;
    dailyActivityLog?: DailyActivityLogOmit;
    quizResult?: QuizResultOmit;
    leaderboardEntry?: LeaderboardEntryOmit;
  };

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type GetLogType<T extends LogLevel | LogDefinition> =
    T extends LogDefinition
      ? T['emit'] extends 'event'
        ? T['level']
        : never
      : never;
  export type GetEvents<T extends any> =
    T extends Array<LogLevel | LogDefinition>
      ?
          | GetLogType<T[0]>
          | GetLogType<T[1]>
          | GetLogType<T[2]>
          | GetLogType<T[3]>
      : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy';

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(
    log: Array<LogLevel | LogDefinition>,
  ): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<
    Prisma.DefaultPrismaClient,
    runtime.ITXClientDenyList
  >;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    achievements: number;
    lessonProgress: number;
    activityLogs: number;
    quizResults: number;
    leaderboardEntries: number;
  };

  export type UserCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    achievements?: boolean | UserCountOutputTypeCountAchievementsArgs;
    lessonProgress?: boolean | UserCountOutputTypeCountLessonProgressArgs;
    activityLogs?: boolean | UserCountOutputTypeCountActivityLogsArgs;
    quizResults?: boolean | UserCountOutputTypeCountQuizResultsArgs;
    leaderboardEntries?:
      | boolean
      | UserCountOutputTypeCountLeaderboardEntriesArgs;
  };

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAchievementsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: UserAchievementWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLessonProgressArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: UserLessonProgressWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountActivityLogsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: DailyActivityLogWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountQuizResultsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: QuizResultWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLeaderboardEntriesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: LeaderboardEntryWhereInput;
  };

  /**
   * Count Type AchievementCountOutputType
   */

  export type AchievementCountOutputType = {
    users: number;
  };

  export type AchievementCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    users?: boolean | AchievementCountOutputTypeCountUsersArgs;
  };

  // Custom InputTypes
  /**
   * AchievementCountOutputType without action
   */
  export type AchievementCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AchievementCountOutputType
     */
    select?: AchievementCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * AchievementCountOutputType without action
   */
  export type AchievementCountOutputTypeCountUsersArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: UserAchievementWhereInput;
  };

  /**
   * Count Type TeamCountOutputType
   */

  export type TeamCountOutputType = {
    members: number;
    results: number;
  };

  export type TeamCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    members?: boolean | TeamCountOutputTypeCountMembersArgs;
    results?: boolean | TeamCountOutputTypeCountResultsArgs;
  };

  // Custom InputTypes
  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TeamCountOutputType
     */
    select?: TeamCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountMembersArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: UserWhereInput;
  };

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountResultsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: TeamBattleResultWhereInput;
  };

  /**
   * Count Type LessonCountOutputType
   */

  export type LessonCountOutputType = {
    progress: number;
  };

  export type LessonCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    progress?: boolean | LessonCountOutputTypeCountProgressArgs;
  };

  // Custom InputTypes
  /**
   * LessonCountOutputType without action
   */
  export type LessonCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the LessonCountOutputType
     */
    select?: LessonCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * LessonCountOutputType without action
   */
  export type LessonCountOutputTypeCountProgressArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: UserLessonProgressWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserMinAggregateOutputType = {
    id: string | null;
    firstName: string | null;
    lastName: string | null;
    role: string | null;
    status: string | null;
    email: string | null;
    passwordHash: string | null;
    isApprovedByAdmin: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    teamId: string | null;
  };

  export type UserMaxAggregateOutputType = {
    id: string | null;
    firstName: string | null;
    lastName: string | null;
    role: string | null;
    status: string | null;
    email: string | null;
    passwordHash: string | null;
    isApprovedByAdmin: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    teamId: string | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    firstName: number;
    lastName: number;
    role: number;
    status: number;
    email: number;
    passwordHash: number;
    isApprovedByAdmin: number;
    createdAt: number;
    updatedAt: number;
    teamId: number;
    _all: number;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    firstName?: true;
    lastName?: true;
    role?: true;
    status?: true;
    email?: true;
    passwordHash?: true;
    isApprovedByAdmin?: true;
    createdAt?: true;
    updatedAt?: true;
    teamId?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    firstName?: true;
    lastName?: true;
    role?: true;
    status?: true;
    email?: true;
    passwordHash?: true;
    isApprovedByAdmin?: true;
    createdAt?: true;
    updatedAt?: true;
    teamId?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    firstName?: true;
    lastName?: true;
    role?: true;
    status?: true;
    email?: true;
    passwordHash?: true;
    isApprovedByAdmin?: true;
    createdAt?: true;
    updatedAt?: true;
    teamId?: true;
    _all?: true;
  };

  export type UserAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type UserGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: UserWhereInput;
    orderBy?:
      | UserOrderByWithAggregationInput
      | UserOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: UserScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: string;
    firstName: string;
    lastName: string;
    role: string;
    status: string;
    email: string;
    passwordHash: string;
    isApprovedByAdmin: boolean;
    createdAt: Date;
    updatedAt: Date;
    teamId: string | null;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type UserSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      firstName?: boolean;
      lastName?: boolean;
      role?: boolean;
      status?: boolean;
      email?: boolean;
      passwordHash?: boolean;
      isApprovedByAdmin?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      teamId?: boolean;
      progress?: boolean | User$progressArgs<ExtArgs>;
      achievements?: boolean | User$achievementsArgs<ExtArgs>;
      lessonProgress?: boolean | User$lessonProgressArgs<ExtArgs>;
      activityLogs?: boolean | User$activityLogsArgs<ExtArgs>;
      quizResults?: boolean | User$quizResultsArgs<ExtArgs>;
      leaderboardEntries?: boolean | User$leaderboardEntriesArgs<ExtArgs>;
      team?: boolean | User$teamArgs<ExtArgs>;
      _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['user']
  >;

  export type UserSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      firstName?: boolean;
      lastName?: boolean;
      role?: boolean;
      status?: boolean;
      email?: boolean;
      passwordHash?: boolean;
      isApprovedByAdmin?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      teamId?: boolean;
      team?: boolean | User$teamArgs<ExtArgs>;
    },
    ExtArgs['result']['user']
  >;

  export type UserSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      firstName?: boolean;
      lastName?: boolean;
      role?: boolean;
      status?: boolean;
      email?: boolean;
      passwordHash?: boolean;
      isApprovedByAdmin?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      teamId?: boolean;
      team?: boolean | User$teamArgs<ExtArgs>;
    },
    ExtArgs['result']['user']
  >;

  export type UserSelectScalar = {
    id?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    role?: boolean;
    status?: boolean;
    email?: boolean;
    passwordHash?: boolean;
    isApprovedByAdmin?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    teamId?: boolean;
  };

  export type UserOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | 'id'
    | 'firstName'
    | 'lastName'
    | 'role'
    | 'status'
    | 'email'
    | 'passwordHash'
    | 'isApprovedByAdmin'
    | 'createdAt'
    | 'updatedAt'
    | 'teamId',
    ExtArgs['result']['user']
  >;
  export type UserInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    progress?: boolean | User$progressArgs<ExtArgs>;
    achievements?: boolean | User$achievementsArgs<ExtArgs>;
    lessonProgress?: boolean | User$lessonProgressArgs<ExtArgs>;
    activityLogs?: boolean | User$activityLogsArgs<ExtArgs>;
    quizResults?: boolean | User$quizResultsArgs<ExtArgs>;
    leaderboardEntries?: boolean | User$leaderboardEntriesArgs<ExtArgs>;
    team?: boolean | User$teamArgs<ExtArgs>;
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type UserIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    team?: boolean | User$teamArgs<ExtArgs>;
  };
  export type UserIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    team?: boolean | User$teamArgs<ExtArgs>;
  };

  export type $UserPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'User';
    objects: {
      progress: Prisma.$UserProgressPayload<ExtArgs> | null;
      achievements: Prisma.$UserAchievementPayload<ExtArgs>[];
      lessonProgress: Prisma.$UserLessonProgressPayload<ExtArgs>[];
      activityLogs: Prisma.$DailyActivityLogPayload<ExtArgs>[];
      quizResults: Prisma.$QuizResultPayload<ExtArgs>[];
      leaderboardEntries: Prisma.$LeaderboardEntryPayload<ExtArgs>[];
      team: Prisma.$TeamPayload<ExtArgs> | null;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        firstName: string;
        lastName: string;
        role: string;
        status: string;
        email: string;
        passwordHash: string;
        isApprovedByAdmin: boolean;
        createdAt: Date;
        updatedAt: Date;
        teamId: string | null;
      },
      ExtArgs['result']['user']
    >;
    composites: {};
  };

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> =
    $Result.GetResult<Prisma.$UserPayload, S>;

  type UserCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UserCountAggregateInputType | true;
  };

  export interface UserDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['User'];
      meta: { name: 'User' };
    };
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
      args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     */
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     */
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(
      args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     */
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(
      args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetUserGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the User model
     */
    readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    progress<T extends User$progressArgs<ExtArgs> = {}>(
      args?: Subset<T, User$progressArgs<ExtArgs>>,
    ): Prisma__UserProgressClient<
      $Result.GetResult<
        Prisma.$UserProgressPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;
    achievements<T extends User$achievementsArgs<ExtArgs> = {}>(
      args?: Subset<T, User$achievementsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$UserAchievementPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    lessonProgress<T extends User$lessonProgressArgs<ExtArgs> = {}>(
      args?: Subset<T, User$lessonProgressArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$UserLessonProgressPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    activityLogs<T extends User$activityLogsArgs<ExtArgs> = {}>(
      args?: Subset<T, User$activityLogsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$DailyActivityLogPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    quizResults<T extends User$quizResultsArgs<ExtArgs> = {}>(
      args?: Subset<T, User$quizResultsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$QuizResultPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    leaderboardEntries<T extends User$leaderboardEntriesArgs<ExtArgs> = {}>(
      args?: Subset<T, User$leaderboardEntriesArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$LeaderboardEntryPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    team<T extends User$teamArgs<ExtArgs> = {}>(
      args?: Subset<T, User$teamArgs<ExtArgs>>,
    ): Prisma__TeamClient<
      $Result.GetResult<
        Prisma.$TeamPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<'User', 'String'>;
    readonly firstName: FieldRef<'User', 'String'>;
    readonly lastName: FieldRef<'User', 'String'>;
    readonly role: FieldRef<'User', 'String'>;
    readonly status: FieldRef<'User', 'String'>;
    readonly email: FieldRef<'User', 'String'>;
    readonly passwordHash: FieldRef<'User', 'String'>;
    readonly isApprovedByAdmin: FieldRef<'User', 'Boolean'>;
    readonly createdAt: FieldRef<'User', 'DateTime'>;
    readonly updatedAt: FieldRef<'User', 'DateTime'>;
    readonly teamId: FieldRef<'User', 'String'>;
  }

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User findMany
   */
  export type UserFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User create
   */
  export type UserCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>;
  };

  /**
   * User createMany
   */
  export type UserCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * User update
   */
  export type UserUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput;
    /**
     * Limit how many Users to update.
     */
    limit?: number;
  };

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput;
    /**
     * Limit how many Users to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * User upsert
   */
  export type UserUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput;
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>;
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
  };

  /**
   * User delete
   */
  export type UserDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput;
    /**
     * Limit how many Users to delete.
     */
    limit?: number;
  };

  /**
   * User.progress
   */
  export type User$progressArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserProgress
     */
    select?: UserProgressSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserProgress
     */
    omit?: UserProgressOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProgressInclude<ExtArgs> | null;
    where?: UserProgressWhereInput;
  };

  /**
   * User.achievements
   */
  export type User$achievementsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserAchievement
     */
    select?: UserAchievementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserAchievement
     */
    omit?: UserAchievementOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAchievementInclude<ExtArgs> | null;
    where?: UserAchievementWhereInput;
    orderBy?:
      | UserAchievementOrderByWithRelationInput
      | UserAchievementOrderByWithRelationInput[];
    cursor?: UserAchievementWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?:
      | UserAchievementScalarFieldEnum
      | UserAchievementScalarFieldEnum[];
  };

  /**
   * User.lessonProgress
   */
  export type User$lessonProgressArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserLessonProgress
     */
    select?: UserLessonProgressSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserLessonProgress
     */
    omit?: UserLessonProgressOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLessonProgressInclude<ExtArgs> | null;
    where?: UserLessonProgressWhereInput;
    orderBy?:
      | UserLessonProgressOrderByWithRelationInput
      | UserLessonProgressOrderByWithRelationInput[];
    cursor?: UserLessonProgressWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?:
      | UserLessonProgressScalarFieldEnum
      | UserLessonProgressScalarFieldEnum[];
  };

  /**
   * User.activityLogs
   */
  export type User$activityLogsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the DailyActivityLog
     */
    select?: DailyActivityLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DailyActivityLog
     */
    omit?: DailyActivityLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyActivityLogInclude<ExtArgs> | null;
    where?: DailyActivityLogWhereInput;
    orderBy?:
      | DailyActivityLogOrderByWithRelationInput
      | DailyActivityLogOrderByWithRelationInput[];
    cursor?: DailyActivityLogWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?:
      | DailyActivityLogScalarFieldEnum
      | DailyActivityLogScalarFieldEnum[];
  };

  /**
   * User.quizResults
   */
  export type User$quizResultsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the QuizResult
     */
    select?: QuizResultSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the QuizResult
     */
    omit?: QuizResultOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizResultInclude<ExtArgs> | null;
    where?: QuizResultWhereInput;
    orderBy?:
      | QuizResultOrderByWithRelationInput
      | QuizResultOrderByWithRelationInput[];
    cursor?: QuizResultWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: QuizResultScalarFieldEnum | QuizResultScalarFieldEnum[];
  };

  /**
   * User.leaderboardEntries
   */
  export type User$leaderboardEntriesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the LeaderboardEntry
     */
    select?: LeaderboardEntrySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LeaderboardEntry
     */
    omit?: LeaderboardEntryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaderboardEntryInclude<ExtArgs> | null;
    where?: LeaderboardEntryWhereInput;
    orderBy?:
      | LeaderboardEntryOrderByWithRelationInput
      | LeaderboardEntryOrderByWithRelationInput[];
    cursor?: LeaderboardEntryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?:
      | LeaderboardEntryScalarFieldEnum
      | LeaderboardEntryScalarFieldEnum[];
  };

  /**
   * User.team
   */
  export type User$teamArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null;
    where?: TeamWhereInput;
  };

  /**
   * User without action
   */
  export type UserDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
  };

  /**
   * Model UserProgress
   */

  export type AggregateUserProgress = {
    _count: UserProgressCountAggregateOutputType | null;
    _avg: UserProgressAvgAggregateOutputType | null;
    _sum: UserProgressSumAggregateOutputType | null;
    _min: UserProgressMinAggregateOutputType | null;
    _max: UserProgressMaxAggregateOutputType | null;
  };

  export type UserProgressAvgAggregateOutputType = {
    xp: number | null;
    level: number | null;
    streak: number | null;
    accuracy: number | null;
  };

  export type UserProgressSumAggregateOutputType = {
    xp: number | null;
    level: number | null;
    streak: number | null;
    accuracy: number | null;
  };

  export type UserProgressMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    xp: number | null;
    level: number | null;
    streak: number | null;
    accuracy: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type UserProgressMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    xp: number | null;
    level: number | null;
    streak: number | null;
    accuracy: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type UserProgressCountAggregateOutputType = {
    id: number;
    userId: number;
    xp: number;
    level: number;
    streak: number;
    accuracy: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type UserProgressAvgAggregateInputType = {
    xp?: true;
    level?: true;
    streak?: true;
    accuracy?: true;
  };

  export type UserProgressSumAggregateInputType = {
    xp?: true;
    level?: true;
    streak?: true;
    accuracy?: true;
  };

  export type UserProgressMinAggregateInputType = {
    id?: true;
    userId?: true;
    xp?: true;
    level?: true;
    streak?: true;
    accuracy?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type UserProgressMaxAggregateInputType = {
    id?: true;
    userId?: true;
    xp?: true;
    level?: true;
    streak?: true;
    accuracy?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type UserProgressCountAggregateInputType = {
    id?: true;
    userId?: true;
    xp?: true;
    level?: true;
    streak?: true;
    accuracy?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type UserProgressAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which UserProgress to aggregate.
     */
    where?: UserProgressWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of UserProgresses to fetch.
     */
    orderBy?:
      | UserProgressOrderByWithRelationInput
      | UserProgressOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: UserProgressWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` UserProgresses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` UserProgresses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned UserProgresses
     **/
    _count?: true | UserProgressCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: UserProgressAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: UserProgressSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserProgressMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserProgressMaxAggregateInputType;
  };

  export type GetUserProgressAggregateType<
    T extends UserProgressAggregateArgs,
  > = {
    [P in keyof T & keyof AggregateUserProgress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserProgress[P]>
      : GetScalarType<T[P], AggregateUserProgress[P]>;
  };

  export type UserProgressGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: UserProgressWhereInput;
    orderBy?:
      | UserProgressOrderByWithAggregationInput
      | UserProgressOrderByWithAggregationInput[];
    by: UserProgressScalarFieldEnum[] | UserProgressScalarFieldEnum;
    having?: UserProgressScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserProgressCountAggregateInputType | true;
    _avg?: UserProgressAvgAggregateInputType;
    _sum?: UserProgressSumAggregateInputType;
    _min?: UserProgressMinAggregateInputType;
    _max?: UserProgressMaxAggregateInputType;
  };

  export type UserProgressGroupByOutputType = {
    id: string;
    userId: string;
    xp: number;
    level: number;
    streak: number;
    accuracy: number | null;
    createdAt: Date;
    updatedAt: Date;
    _count: UserProgressCountAggregateOutputType | null;
    _avg: UserProgressAvgAggregateOutputType | null;
    _sum: UserProgressSumAggregateOutputType | null;
    _min: UserProgressMinAggregateOutputType | null;
    _max: UserProgressMaxAggregateOutputType | null;
  };

  type GetUserProgressGroupByPayload<T extends UserProgressGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<UserProgressGroupByOutputType, T['by']> & {
          [P in keyof T &
            keyof UserProgressGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserProgressGroupByOutputType[P]>
            : GetScalarType<T[P], UserProgressGroupByOutputType[P]>;
        }
      >
    >;

  export type UserProgressSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      xp?: boolean;
      level?: boolean;
      streak?: boolean;
      accuracy?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['userProgress']
  >;

  export type UserProgressSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      xp?: boolean;
      level?: boolean;
      streak?: boolean;
      accuracy?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['userProgress']
  >;

  export type UserProgressSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      xp?: boolean;
      level?: boolean;
      streak?: boolean;
      accuracy?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['userProgress']
  >;

  export type UserProgressSelectScalar = {
    id?: boolean;
    userId?: boolean;
    xp?: boolean;
    level?: boolean;
    streak?: boolean;
    accuracy?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type UserProgressOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | 'id'
    | 'userId'
    | 'xp'
    | 'level'
    | 'streak'
    | 'accuracy'
    | 'createdAt'
    | 'updatedAt',
    ExtArgs['result']['userProgress']
  >;
  export type UserProgressInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type UserProgressIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type UserProgressIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };

  export type $UserProgressPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'UserProgress';
    objects: {
      user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        userId: string;
        xp: number;
        level: number;
        streak: number;
        accuracy: number | null;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs['result']['userProgress']
    >;
    composites: {};
  };

  type UserProgressGetPayload<
    S extends boolean | null | undefined | UserProgressDefaultArgs,
  > = $Result.GetResult<Prisma.$UserProgressPayload, S>;

  type UserProgressCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    UserProgressFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: UserProgressCountAggregateInputType | true;
  };

  export interface UserProgressDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['UserProgress'];
      meta: { name: 'UserProgress' };
    };
    /**
     * Find zero or one UserProgress that matches the filter.
     * @param {UserProgressFindUniqueArgs} args - Arguments to find a UserProgress
     * @example
     * // Get one UserProgress
     * const userProgress = await prisma.userProgress.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserProgressFindUniqueArgs>(
      args: SelectSubset<T, UserProgressFindUniqueArgs<ExtArgs>>,
    ): Prisma__UserProgressClient<
      $Result.GetResult<
        Prisma.$UserProgressPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one UserProgress that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserProgressFindUniqueOrThrowArgs} args - Arguments to find a UserProgress
     * @example
     * // Get one UserProgress
     * const userProgress = await prisma.userProgress.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserProgressFindUniqueOrThrowArgs>(
      args: SelectSubset<T, UserProgressFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__UserProgressClient<
      $Result.GetResult<
        Prisma.$UserProgressPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first UserProgress that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProgressFindFirstArgs} args - Arguments to find a UserProgress
     * @example
     * // Get one UserProgress
     * const userProgress = await prisma.userProgress.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserProgressFindFirstArgs>(
      args?: SelectSubset<T, UserProgressFindFirstArgs<ExtArgs>>,
    ): Prisma__UserProgressClient<
      $Result.GetResult<
        Prisma.$UserProgressPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first UserProgress that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProgressFindFirstOrThrowArgs} args - Arguments to find a UserProgress
     * @example
     * // Get one UserProgress
     * const userProgress = await prisma.userProgress.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserProgressFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserProgressFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__UserProgressClient<
      $Result.GetResult<
        Prisma.$UserProgressPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more UserProgresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProgressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserProgresses
     * const userProgresses = await prisma.userProgress.findMany()
     *
     * // Get first 10 UserProgresses
     * const userProgresses = await prisma.userProgress.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userProgressWithIdOnly = await prisma.userProgress.findMany({ select: { id: true } })
     *
     */
    findMany<T extends UserProgressFindManyArgs>(
      args?: SelectSubset<T, UserProgressFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserProgressPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a UserProgress.
     * @param {UserProgressCreateArgs} args - Arguments to create a UserProgress.
     * @example
     * // Create one UserProgress
     * const UserProgress = await prisma.userProgress.create({
     *   data: {
     *     // ... data to create a UserProgress
     *   }
     * })
     *
     */
    create<T extends UserProgressCreateArgs>(
      args: SelectSubset<T, UserProgressCreateArgs<ExtArgs>>,
    ): Prisma__UserProgressClient<
      $Result.GetResult<
        Prisma.$UserProgressPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many UserProgresses.
     * @param {UserProgressCreateManyArgs} args - Arguments to create many UserProgresses.
     * @example
     * // Create many UserProgresses
     * const userProgress = await prisma.userProgress.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends UserProgressCreateManyArgs>(
      args?: SelectSubset<T, UserProgressCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many UserProgresses and returns the data saved in the database.
     * @param {UserProgressCreateManyAndReturnArgs} args - Arguments to create many UserProgresses.
     * @example
     * // Create many UserProgresses
     * const userProgress = await prisma.userProgress.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many UserProgresses and only return the `id`
     * const userProgressWithIdOnly = await prisma.userProgress.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends UserProgressCreateManyAndReturnArgs>(
      args?: SelectSubset<T, UserProgressCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserProgressPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a UserProgress.
     * @param {UserProgressDeleteArgs} args - Arguments to delete one UserProgress.
     * @example
     * // Delete one UserProgress
     * const UserProgress = await prisma.userProgress.delete({
     *   where: {
     *     // ... filter to delete one UserProgress
     *   }
     * })
     *
     */
    delete<T extends UserProgressDeleteArgs>(
      args: SelectSubset<T, UserProgressDeleteArgs<ExtArgs>>,
    ): Prisma__UserProgressClient<
      $Result.GetResult<
        Prisma.$UserProgressPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one UserProgress.
     * @param {UserProgressUpdateArgs} args - Arguments to update one UserProgress.
     * @example
     * // Update one UserProgress
     * const userProgress = await prisma.userProgress.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends UserProgressUpdateArgs>(
      args: SelectSubset<T, UserProgressUpdateArgs<ExtArgs>>,
    ): Prisma__UserProgressClient<
      $Result.GetResult<
        Prisma.$UserProgressPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more UserProgresses.
     * @param {UserProgressDeleteManyArgs} args - Arguments to filter UserProgresses to delete.
     * @example
     * // Delete a few UserProgresses
     * const { count } = await prisma.userProgress.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends UserProgressDeleteManyArgs>(
      args?: SelectSubset<T, UserProgressDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more UserProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProgressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserProgresses
     * const userProgress = await prisma.userProgress.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends UserProgressUpdateManyArgs>(
      args: SelectSubset<T, UserProgressUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more UserProgresses and returns the data updated in the database.
     * @param {UserProgressUpdateManyAndReturnArgs} args - Arguments to update many UserProgresses.
     * @example
     * // Update many UserProgresses
     * const userProgress = await prisma.userProgress.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more UserProgresses and only return the `id`
     * const userProgressWithIdOnly = await prisma.userProgress.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends UserProgressUpdateManyAndReturnArgs>(
      args: SelectSubset<T, UserProgressUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserProgressPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one UserProgress.
     * @param {UserProgressUpsertArgs} args - Arguments to update or create a UserProgress.
     * @example
     * // Update or create a UserProgress
     * const userProgress = await prisma.userProgress.upsert({
     *   create: {
     *     // ... data to create a UserProgress
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserProgress we want to update
     *   }
     * })
     */
    upsert<T extends UserProgressUpsertArgs>(
      args: SelectSubset<T, UserProgressUpsertArgs<ExtArgs>>,
    ): Prisma__UserProgressClient<
      $Result.GetResult<
        Prisma.$UserProgressPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of UserProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProgressCountArgs} args - Arguments to filter UserProgresses to count.
     * @example
     * // Count the number of UserProgresses
     * const count = await prisma.userProgress.count({
     *   where: {
     *     // ... the filter for the UserProgresses we want to count
     *   }
     * })
     **/
    count<T extends UserProgressCountArgs>(
      args?: Subset<T, UserProgressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserProgressCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a UserProgress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProgressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends UserProgressAggregateArgs>(
      args: Subset<T, UserProgressAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserProgressAggregateType<T>>;

    /**
     * Group by UserProgress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProgressGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends UserProgressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserProgressGroupByArgs['orderBy'] }
        : { orderBy?: UserProgressGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, UserProgressGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetUserProgressGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the UserProgress model
     */
    readonly fields: UserProgressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserProgress.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserProgressClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    user<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>,
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the UserProgress model
   */
  interface UserProgressFieldRefs {
    readonly id: FieldRef<'UserProgress', 'String'>;
    readonly userId: FieldRef<'UserProgress', 'String'>;
    readonly xp: FieldRef<'UserProgress', 'Int'>;
    readonly level: FieldRef<'UserProgress', 'Int'>;
    readonly streak: FieldRef<'UserProgress', 'Int'>;
    readonly accuracy: FieldRef<'UserProgress', 'Float'>;
    readonly createdAt: FieldRef<'UserProgress', 'DateTime'>;
    readonly updatedAt: FieldRef<'UserProgress', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * UserProgress findUnique
   */
  export type UserProgressFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserProgress
     */
    select?: UserProgressSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserProgress
     */
    omit?: UserProgressOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProgressInclude<ExtArgs> | null;
    /**
     * Filter, which UserProgress to fetch.
     */
    where: UserProgressWhereUniqueInput;
  };

  /**
   * UserProgress findUniqueOrThrow
   */
  export type UserProgressFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserProgress
     */
    select?: UserProgressSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserProgress
     */
    omit?: UserProgressOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProgressInclude<ExtArgs> | null;
    /**
     * Filter, which UserProgress to fetch.
     */
    where: UserProgressWhereUniqueInput;
  };

  /**
   * UserProgress findFirst
   */
  export type UserProgressFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserProgress
     */
    select?: UserProgressSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserProgress
     */
    omit?: UserProgressOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProgressInclude<ExtArgs> | null;
    /**
     * Filter, which UserProgress to fetch.
     */
    where?: UserProgressWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of UserProgresses to fetch.
     */
    orderBy?:
      | UserProgressOrderByWithRelationInput
      | UserProgressOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for UserProgresses.
     */
    cursor?: UserProgressWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` UserProgresses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` UserProgresses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of UserProgresses.
     */
    distinct?: UserProgressScalarFieldEnum | UserProgressScalarFieldEnum[];
  };

  /**
   * UserProgress findFirstOrThrow
   */
  export type UserProgressFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserProgress
     */
    select?: UserProgressSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserProgress
     */
    omit?: UserProgressOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProgressInclude<ExtArgs> | null;
    /**
     * Filter, which UserProgress to fetch.
     */
    where?: UserProgressWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of UserProgresses to fetch.
     */
    orderBy?:
      | UserProgressOrderByWithRelationInput
      | UserProgressOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for UserProgresses.
     */
    cursor?: UserProgressWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` UserProgresses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` UserProgresses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of UserProgresses.
     */
    distinct?: UserProgressScalarFieldEnum | UserProgressScalarFieldEnum[];
  };

  /**
   * UserProgress findMany
   */
  export type UserProgressFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserProgress
     */
    select?: UserProgressSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserProgress
     */
    omit?: UserProgressOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProgressInclude<ExtArgs> | null;
    /**
     * Filter, which UserProgresses to fetch.
     */
    where?: UserProgressWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of UserProgresses to fetch.
     */
    orderBy?:
      | UserProgressOrderByWithRelationInput
      | UserProgressOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing UserProgresses.
     */
    cursor?: UserProgressWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` UserProgresses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` UserProgresses.
     */
    skip?: number;
    distinct?: UserProgressScalarFieldEnum | UserProgressScalarFieldEnum[];
  };

  /**
   * UserProgress create
   */
  export type UserProgressCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserProgress
     */
    select?: UserProgressSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserProgress
     */
    omit?: UserProgressOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProgressInclude<ExtArgs> | null;
    /**
     * The data needed to create a UserProgress.
     */
    data: XOR<UserProgressCreateInput, UserProgressUncheckedCreateInput>;
  };

  /**
   * UserProgress createMany
   */
  export type UserProgressCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many UserProgresses.
     */
    data: UserProgressCreateManyInput | UserProgressCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * UserProgress createManyAndReturn
   */
  export type UserProgressCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserProgress
     */
    select?: UserProgressSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the UserProgress
     */
    omit?: UserProgressOmit<ExtArgs> | null;
    /**
     * The data used to create many UserProgresses.
     */
    data: UserProgressCreateManyInput | UserProgressCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProgressIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * UserProgress update
   */
  export type UserProgressUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserProgress
     */
    select?: UserProgressSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserProgress
     */
    omit?: UserProgressOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProgressInclude<ExtArgs> | null;
    /**
     * The data needed to update a UserProgress.
     */
    data: XOR<UserProgressUpdateInput, UserProgressUncheckedUpdateInput>;
    /**
     * Choose, which UserProgress to update.
     */
    where: UserProgressWhereUniqueInput;
  };

  /**
   * UserProgress updateMany
   */
  export type UserProgressUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update UserProgresses.
     */
    data: XOR<
      UserProgressUpdateManyMutationInput,
      UserProgressUncheckedUpdateManyInput
    >;
    /**
     * Filter which UserProgresses to update
     */
    where?: UserProgressWhereInput;
    /**
     * Limit how many UserProgresses to update.
     */
    limit?: number;
  };

  /**
   * UserProgress updateManyAndReturn
   */
  export type UserProgressUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserProgress
     */
    select?: UserProgressSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the UserProgress
     */
    omit?: UserProgressOmit<ExtArgs> | null;
    /**
     * The data used to update UserProgresses.
     */
    data: XOR<
      UserProgressUpdateManyMutationInput,
      UserProgressUncheckedUpdateManyInput
    >;
    /**
     * Filter which UserProgresses to update
     */
    where?: UserProgressWhereInput;
    /**
     * Limit how many UserProgresses to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProgressIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * UserProgress upsert
   */
  export type UserProgressUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserProgress
     */
    select?: UserProgressSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserProgress
     */
    omit?: UserProgressOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProgressInclude<ExtArgs> | null;
    /**
     * The filter to search for the UserProgress to update in case it exists.
     */
    where: UserProgressWhereUniqueInput;
    /**
     * In case the UserProgress found by the `where` argument doesn't exist, create a new UserProgress with this data.
     */
    create: XOR<UserProgressCreateInput, UserProgressUncheckedCreateInput>;
    /**
     * In case the UserProgress was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserProgressUpdateInput, UserProgressUncheckedUpdateInput>;
  };

  /**
   * UserProgress delete
   */
  export type UserProgressDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserProgress
     */
    select?: UserProgressSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserProgress
     */
    omit?: UserProgressOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProgressInclude<ExtArgs> | null;
    /**
     * Filter which UserProgress to delete.
     */
    where: UserProgressWhereUniqueInput;
  };

  /**
   * UserProgress deleteMany
   */
  export type UserProgressDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which UserProgresses to delete
     */
    where?: UserProgressWhereInput;
    /**
     * Limit how many UserProgresses to delete.
     */
    limit?: number;
  };

  /**
   * UserProgress without action
   */
  export type UserProgressDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserProgress
     */
    select?: UserProgressSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserProgress
     */
    omit?: UserProgressOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProgressInclude<ExtArgs> | null;
  };

  /**
   * Model Achievement
   */

  export type AggregateAchievement = {
    _count: AchievementCountAggregateOutputType | null;
    _min: AchievementMinAggregateOutputType | null;
    _max: AchievementMaxAggregateOutputType | null;
  };

  export type AchievementMinAggregateOutputType = {
    id: string | null;
    code: string | null;
    name: string | null;
    description: string | null;
    icon: string | null;
  };

  export type AchievementMaxAggregateOutputType = {
    id: string | null;
    code: string | null;
    name: string | null;
    description: string | null;
    icon: string | null;
  };

  export type AchievementCountAggregateOutputType = {
    id: number;
    code: number;
    name: number;
    description: number;
    icon: number;
    _all: number;
  };

  export type AchievementMinAggregateInputType = {
    id?: true;
    code?: true;
    name?: true;
    description?: true;
    icon?: true;
  };

  export type AchievementMaxAggregateInputType = {
    id?: true;
    code?: true;
    name?: true;
    description?: true;
    icon?: true;
  };

  export type AchievementCountAggregateInputType = {
    id?: true;
    code?: true;
    name?: true;
    description?: true;
    icon?: true;
    _all?: true;
  };

  export type AchievementAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Achievement to aggregate.
     */
    where?: AchievementWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Achievements to fetch.
     */
    orderBy?:
      | AchievementOrderByWithRelationInput
      | AchievementOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: AchievementWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Achievements from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Achievements.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Achievements
     **/
    _count?: true | AchievementCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: AchievementMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: AchievementMaxAggregateInputType;
  };

  export type GetAchievementAggregateType<T extends AchievementAggregateArgs> =
    {
      [P in keyof T & keyof AggregateAchievement]: P extends '_count' | 'count'
        ? T[P] extends true
          ? number
          : GetScalarType<T[P], AggregateAchievement[P]>
        : GetScalarType<T[P], AggregateAchievement[P]>;
    };

  export type AchievementGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: AchievementWhereInput;
    orderBy?:
      | AchievementOrderByWithAggregationInput
      | AchievementOrderByWithAggregationInput[];
    by: AchievementScalarFieldEnum[] | AchievementScalarFieldEnum;
    having?: AchievementScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AchievementCountAggregateInputType | true;
    _min?: AchievementMinAggregateInputType;
    _max?: AchievementMaxAggregateInputType;
  };

  export type AchievementGroupByOutputType = {
    id: string;
    code: string;
    name: string;
    description: string;
    icon: string;
    _count: AchievementCountAggregateOutputType | null;
    _min: AchievementMinAggregateOutputType | null;
    _max: AchievementMaxAggregateOutputType | null;
  };

  type GetAchievementGroupByPayload<T extends AchievementGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<AchievementGroupByOutputType, T['by']> & {
          [P in keyof T &
            keyof AchievementGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AchievementGroupByOutputType[P]>
            : GetScalarType<T[P], AchievementGroupByOutputType[P]>;
        }
      >
    >;

  export type AchievementSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      code?: boolean;
      name?: boolean;
      description?: boolean;
      icon?: boolean;
      users?: boolean | Achievement$usersArgs<ExtArgs>;
      _count?: boolean | AchievementCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['achievement']
  >;

  export type AchievementSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      code?: boolean;
      name?: boolean;
      description?: boolean;
      icon?: boolean;
    },
    ExtArgs['result']['achievement']
  >;

  export type AchievementSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      code?: boolean;
      name?: boolean;
      description?: boolean;
      icon?: boolean;
    },
    ExtArgs['result']['achievement']
  >;

  export type AchievementSelectScalar = {
    id?: boolean;
    code?: boolean;
    name?: boolean;
    description?: boolean;
    icon?: boolean;
  };

  export type AchievementOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'id' | 'code' | 'name' | 'description' | 'icon',
    ExtArgs['result']['achievement']
  >;
  export type AchievementInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    users?: boolean | Achievement$usersArgs<ExtArgs>;
    _count?: boolean | AchievementCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type AchievementIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};
  export type AchievementIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};

  export type $AchievementPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Achievement';
    objects: {
      users: Prisma.$UserAchievementPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        code: string;
        name: string;
        description: string;
        icon: string;
      },
      ExtArgs['result']['achievement']
    >;
    composites: {};
  };

  type AchievementGetPayload<
    S extends boolean | null | undefined | AchievementDefaultArgs,
  > = $Result.GetResult<Prisma.$AchievementPayload, S>;

  type AchievementCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    AchievementFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: AchievementCountAggregateInputType | true;
  };

  export interface AchievementDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Achievement'];
      meta: { name: 'Achievement' };
    };
    /**
     * Find zero or one Achievement that matches the filter.
     * @param {AchievementFindUniqueArgs} args - Arguments to find a Achievement
     * @example
     * // Get one Achievement
     * const achievement = await prisma.achievement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AchievementFindUniqueArgs>(
      args: SelectSubset<T, AchievementFindUniqueArgs<ExtArgs>>,
    ): Prisma__AchievementClient<
      $Result.GetResult<
        Prisma.$AchievementPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Achievement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AchievementFindUniqueOrThrowArgs} args - Arguments to find a Achievement
     * @example
     * // Get one Achievement
     * const achievement = await prisma.achievement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AchievementFindUniqueOrThrowArgs>(
      args: SelectSubset<T, AchievementFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__AchievementClient<
      $Result.GetResult<
        Prisma.$AchievementPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Achievement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementFindFirstArgs} args - Arguments to find a Achievement
     * @example
     * // Get one Achievement
     * const achievement = await prisma.achievement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AchievementFindFirstArgs>(
      args?: SelectSubset<T, AchievementFindFirstArgs<ExtArgs>>,
    ): Prisma__AchievementClient<
      $Result.GetResult<
        Prisma.$AchievementPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Achievement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementFindFirstOrThrowArgs} args - Arguments to find a Achievement
     * @example
     * // Get one Achievement
     * const achievement = await prisma.achievement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AchievementFindFirstOrThrowArgs>(
      args?: SelectSubset<T, AchievementFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__AchievementClient<
      $Result.GetResult<
        Prisma.$AchievementPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Achievements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Achievements
     * const achievements = await prisma.achievement.findMany()
     *
     * // Get first 10 Achievements
     * const achievements = await prisma.achievement.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const achievementWithIdOnly = await prisma.achievement.findMany({ select: { id: true } })
     *
     */
    findMany<T extends AchievementFindManyArgs>(
      args?: SelectSubset<T, AchievementFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$AchievementPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Achievement.
     * @param {AchievementCreateArgs} args - Arguments to create a Achievement.
     * @example
     * // Create one Achievement
     * const Achievement = await prisma.achievement.create({
     *   data: {
     *     // ... data to create a Achievement
     *   }
     * })
     *
     */
    create<T extends AchievementCreateArgs>(
      args: SelectSubset<T, AchievementCreateArgs<ExtArgs>>,
    ): Prisma__AchievementClient<
      $Result.GetResult<
        Prisma.$AchievementPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Achievements.
     * @param {AchievementCreateManyArgs} args - Arguments to create many Achievements.
     * @example
     * // Create many Achievements
     * const achievement = await prisma.achievement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends AchievementCreateManyArgs>(
      args?: SelectSubset<T, AchievementCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Achievements and returns the data saved in the database.
     * @param {AchievementCreateManyAndReturnArgs} args - Arguments to create many Achievements.
     * @example
     * // Create many Achievements
     * const achievement = await prisma.achievement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Achievements and only return the `id`
     * const achievementWithIdOnly = await prisma.achievement.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends AchievementCreateManyAndReturnArgs>(
      args?: SelectSubset<T, AchievementCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$AchievementPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Achievement.
     * @param {AchievementDeleteArgs} args - Arguments to delete one Achievement.
     * @example
     * // Delete one Achievement
     * const Achievement = await prisma.achievement.delete({
     *   where: {
     *     // ... filter to delete one Achievement
     *   }
     * })
     *
     */
    delete<T extends AchievementDeleteArgs>(
      args: SelectSubset<T, AchievementDeleteArgs<ExtArgs>>,
    ): Prisma__AchievementClient<
      $Result.GetResult<
        Prisma.$AchievementPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Achievement.
     * @param {AchievementUpdateArgs} args - Arguments to update one Achievement.
     * @example
     * // Update one Achievement
     * const achievement = await prisma.achievement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends AchievementUpdateArgs>(
      args: SelectSubset<T, AchievementUpdateArgs<ExtArgs>>,
    ): Prisma__AchievementClient<
      $Result.GetResult<
        Prisma.$AchievementPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Achievements.
     * @param {AchievementDeleteManyArgs} args - Arguments to filter Achievements to delete.
     * @example
     * // Delete a few Achievements
     * const { count } = await prisma.achievement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends AchievementDeleteManyArgs>(
      args?: SelectSubset<T, AchievementDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Achievements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Achievements
     * const achievement = await prisma.achievement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends AchievementUpdateManyArgs>(
      args: SelectSubset<T, AchievementUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Achievements and returns the data updated in the database.
     * @param {AchievementUpdateManyAndReturnArgs} args - Arguments to update many Achievements.
     * @example
     * // Update many Achievements
     * const achievement = await prisma.achievement.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Achievements and only return the `id`
     * const achievementWithIdOnly = await prisma.achievement.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends AchievementUpdateManyAndReturnArgs>(
      args: SelectSubset<T, AchievementUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$AchievementPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Achievement.
     * @param {AchievementUpsertArgs} args - Arguments to update or create a Achievement.
     * @example
     * // Update or create a Achievement
     * const achievement = await prisma.achievement.upsert({
     *   create: {
     *     // ... data to create a Achievement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Achievement we want to update
     *   }
     * })
     */
    upsert<T extends AchievementUpsertArgs>(
      args: SelectSubset<T, AchievementUpsertArgs<ExtArgs>>,
    ): Prisma__AchievementClient<
      $Result.GetResult<
        Prisma.$AchievementPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Achievements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementCountArgs} args - Arguments to filter Achievements to count.
     * @example
     * // Count the number of Achievements
     * const count = await prisma.achievement.count({
     *   where: {
     *     // ... the filter for the Achievements we want to count
     *   }
     * })
     **/
    count<T extends AchievementCountArgs>(
      args?: Subset<T, AchievementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AchievementCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Achievement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends AchievementAggregateArgs>(
      args: Subset<T, AchievementAggregateArgs>,
    ): Prisma.PrismaPromise<GetAchievementAggregateType<T>>;

    /**
     * Group by Achievement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends AchievementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AchievementGroupByArgs['orderBy'] }
        : { orderBy?: AchievementGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, AchievementGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetAchievementGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Achievement model
     */
    readonly fields: AchievementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Achievement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AchievementClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    users<T extends Achievement$usersArgs<ExtArgs> = {}>(
      args?: Subset<T, Achievement$usersArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$UserAchievementPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Achievement model
   */
  interface AchievementFieldRefs {
    readonly id: FieldRef<'Achievement', 'String'>;
    readonly code: FieldRef<'Achievement', 'String'>;
    readonly name: FieldRef<'Achievement', 'String'>;
    readonly description: FieldRef<'Achievement', 'String'>;
    readonly icon: FieldRef<'Achievement', 'String'>;
  }

  // Custom InputTypes
  /**
   * Achievement findUnique
   */
  export type AchievementFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null;
    /**
     * Filter, which Achievement to fetch.
     */
    where: AchievementWhereUniqueInput;
  };

  /**
   * Achievement findUniqueOrThrow
   */
  export type AchievementFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null;
    /**
     * Filter, which Achievement to fetch.
     */
    where: AchievementWhereUniqueInput;
  };

  /**
   * Achievement findFirst
   */
  export type AchievementFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null;
    /**
     * Filter, which Achievement to fetch.
     */
    where?: AchievementWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Achievements to fetch.
     */
    orderBy?:
      | AchievementOrderByWithRelationInput
      | AchievementOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Achievements.
     */
    cursor?: AchievementWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Achievements from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Achievements.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Achievements.
     */
    distinct?: AchievementScalarFieldEnum | AchievementScalarFieldEnum[];
  };

  /**
   * Achievement findFirstOrThrow
   */
  export type AchievementFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null;
    /**
     * Filter, which Achievement to fetch.
     */
    where?: AchievementWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Achievements to fetch.
     */
    orderBy?:
      | AchievementOrderByWithRelationInput
      | AchievementOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Achievements.
     */
    cursor?: AchievementWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Achievements from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Achievements.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Achievements.
     */
    distinct?: AchievementScalarFieldEnum | AchievementScalarFieldEnum[];
  };

  /**
   * Achievement findMany
   */
  export type AchievementFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null;
    /**
     * Filter, which Achievements to fetch.
     */
    where?: AchievementWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Achievements to fetch.
     */
    orderBy?:
      | AchievementOrderByWithRelationInput
      | AchievementOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Achievements.
     */
    cursor?: AchievementWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Achievements from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Achievements.
     */
    skip?: number;
    distinct?: AchievementScalarFieldEnum | AchievementScalarFieldEnum[];
  };

  /**
   * Achievement create
   */
  export type AchievementCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null;
    /**
     * The data needed to create a Achievement.
     */
    data: XOR<AchievementCreateInput, AchievementUncheckedCreateInput>;
  };

  /**
   * Achievement createMany
   */
  export type AchievementCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Achievements.
     */
    data: AchievementCreateManyInput | AchievementCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Achievement createManyAndReturn
   */
  export type AchievementCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null;
    /**
     * The data used to create many Achievements.
     */
    data: AchievementCreateManyInput | AchievementCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Achievement update
   */
  export type AchievementUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null;
    /**
     * The data needed to update a Achievement.
     */
    data: XOR<AchievementUpdateInput, AchievementUncheckedUpdateInput>;
    /**
     * Choose, which Achievement to update.
     */
    where: AchievementWhereUniqueInput;
  };

  /**
   * Achievement updateMany
   */
  export type AchievementUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Achievements.
     */
    data: XOR<
      AchievementUpdateManyMutationInput,
      AchievementUncheckedUpdateManyInput
    >;
    /**
     * Filter which Achievements to update
     */
    where?: AchievementWhereInput;
    /**
     * Limit how many Achievements to update.
     */
    limit?: number;
  };

  /**
   * Achievement updateManyAndReturn
   */
  export type AchievementUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null;
    /**
     * The data used to update Achievements.
     */
    data: XOR<
      AchievementUpdateManyMutationInput,
      AchievementUncheckedUpdateManyInput
    >;
    /**
     * Filter which Achievements to update
     */
    where?: AchievementWhereInput;
    /**
     * Limit how many Achievements to update.
     */
    limit?: number;
  };

  /**
   * Achievement upsert
   */
  export type AchievementUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null;
    /**
     * The filter to search for the Achievement to update in case it exists.
     */
    where: AchievementWhereUniqueInput;
    /**
     * In case the Achievement found by the `where` argument doesn't exist, create a new Achievement with this data.
     */
    create: XOR<AchievementCreateInput, AchievementUncheckedCreateInput>;
    /**
     * In case the Achievement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AchievementUpdateInput, AchievementUncheckedUpdateInput>;
  };

  /**
   * Achievement delete
   */
  export type AchievementDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null;
    /**
     * Filter which Achievement to delete.
     */
    where: AchievementWhereUniqueInput;
  };

  /**
   * Achievement deleteMany
   */
  export type AchievementDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Achievements to delete
     */
    where?: AchievementWhereInput;
    /**
     * Limit how many Achievements to delete.
     */
    limit?: number;
  };

  /**
   * Achievement.users
   */
  export type Achievement$usersArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserAchievement
     */
    select?: UserAchievementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserAchievement
     */
    omit?: UserAchievementOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAchievementInclude<ExtArgs> | null;
    where?: UserAchievementWhereInput;
    orderBy?:
      | UserAchievementOrderByWithRelationInput
      | UserAchievementOrderByWithRelationInput[];
    cursor?: UserAchievementWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?:
      | UserAchievementScalarFieldEnum
      | UserAchievementScalarFieldEnum[];
  };

  /**
   * Achievement without action
   */
  export type AchievementDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null;
  };

  /**
   * Model UserAchievement
   */

  export type AggregateUserAchievement = {
    _count: UserAchievementCountAggregateOutputType | null;
    _min: UserAchievementMinAggregateOutputType | null;
    _max: UserAchievementMaxAggregateOutputType | null;
  };

  export type UserAchievementMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    achievementId: string | null;
    achievedAt: Date | null;
  };

  export type UserAchievementMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    achievementId: string | null;
    achievedAt: Date | null;
  };

  export type UserAchievementCountAggregateOutputType = {
    id: number;
    userId: number;
    achievementId: number;
    achievedAt: number;
    _all: number;
  };

  export type UserAchievementMinAggregateInputType = {
    id?: true;
    userId?: true;
    achievementId?: true;
    achievedAt?: true;
  };

  export type UserAchievementMaxAggregateInputType = {
    id?: true;
    userId?: true;
    achievementId?: true;
    achievedAt?: true;
  };

  export type UserAchievementCountAggregateInputType = {
    id?: true;
    userId?: true;
    achievementId?: true;
    achievedAt?: true;
    _all?: true;
  };

  export type UserAchievementAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which UserAchievement to aggregate.
     */
    where?: UserAchievementWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of UserAchievements to fetch.
     */
    orderBy?:
      | UserAchievementOrderByWithRelationInput
      | UserAchievementOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: UserAchievementWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` UserAchievements from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` UserAchievements.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned UserAchievements
     **/
    _count?: true | UserAchievementCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserAchievementMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserAchievementMaxAggregateInputType;
  };

  export type GetUserAchievementAggregateType<
    T extends UserAchievementAggregateArgs,
  > = {
    [P in keyof T & keyof AggregateUserAchievement]: P extends
      | '_count'
      | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserAchievement[P]>
      : GetScalarType<T[P], AggregateUserAchievement[P]>;
  };

  export type UserAchievementGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: UserAchievementWhereInput;
    orderBy?:
      | UserAchievementOrderByWithAggregationInput
      | UserAchievementOrderByWithAggregationInput[];
    by: UserAchievementScalarFieldEnum[] | UserAchievementScalarFieldEnum;
    having?: UserAchievementScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserAchievementCountAggregateInputType | true;
    _min?: UserAchievementMinAggregateInputType;
    _max?: UserAchievementMaxAggregateInputType;
  };

  export type UserAchievementGroupByOutputType = {
    id: string;
    userId: string;
    achievementId: string;
    achievedAt: Date;
    _count: UserAchievementCountAggregateOutputType | null;
    _min: UserAchievementMinAggregateOutputType | null;
    _max: UserAchievementMaxAggregateOutputType | null;
  };

  type GetUserAchievementGroupByPayload<T extends UserAchievementGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<UserAchievementGroupByOutputType, T['by']> & {
          [P in keyof T &
            keyof UserAchievementGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserAchievementGroupByOutputType[P]>
            : GetScalarType<T[P], UserAchievementGroupByOutputType[P]>;
        }
      >
    >;

  export type UserAchievementSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      achievementId?: boolean;
      achievedAt?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
      achievement?: boolean | AchievementDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['userAchievement']
  >;

  export type UserAchievementSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      achievementId?: boolean;
      achievedAt?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
      achievement?: boolean | AchievementDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['userAchievement']
  >;

  export type UserAchievementSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      achievementId?: boolean;
      achievedAt?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
      achievement?: boolean | AchievementDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['userAchievement']
  >;

  export type UserAchievementSelectScalar = {
    id?: boolean;
    userId?: boolean;
    achievementId?: boolean;
    achievedAt?: boolean;
  };

  export type UserAchievementOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'id' | 'userId' | 'achievementId' | 'achievedAt',
    ExtArgs['result']['userAchievement']
  >;
  export type UserAchievementInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
    achievement?: boolean | AchievementDefaultArgs<ExtArgs>;
  };
  export type UserAchievementIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
    achievement?: boolean | AchievementDefaultArgs<ExtArgs>;
  };
  export type UserAchievementIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
    achievement?: boolean | AchievementDefaultArgs<ExtArgs>;
  };

  export type $UserAchievementPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'UserAchievement';
    objects: {
      user: Prisma.$UserPayload<ExtArgs>;
      achievement: Prisma.$AchievementPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        userId: string;
        achievementId: string;
        achievedAt: Date;
      },
      ExtArgs['result']['userAchievement']
    >;
    composites: {};
  };

  type UserAchievementGetPayload<
    S extends boolean | null | undefined | UserAchievementDefaultArgs,
  > = $Result.GetResult<Prisma.$UserAchievementPayload, S>;

  type UserAchievementCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    UserAchievementFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: UserAchievementCountAggregateInputType | true;
  };

  export interface UserAchievementDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['UserAchievement'];
      meta: { name: 'UserAchievement' };
    };
    /**
     * Find zero or one UserAchievement that matches the filter.
     * @param {UserAchievementFindUniqueArgs} args - Arguments to find a UserAchievement
     * @example
     * // Get one UserAchievement
     * const userAchievement = await prisma.userAchievement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserAchievementFindUniqueArgs>(
      args: SelectSubset<T, UserAchievementFindUniqueArgs<ExtArgs>>,
    ): Prisma__UserAchievementClient<
      $Result.GetResult<
        Prisma.$UserAchievementPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one UserAchievement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserAchievementFindUniqueOrThrowArgs} args - Arguments to find a UserAchievement
     * @example
     * // Get one UserAchievement
     * const userAchievement = await prisma.userAchievement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserAchievementFindUniqueOrThrowArgs>(
      args: SelectSubset<T, UserAchievementFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__UserAchievementClient<
      $Result.GetResult<
        Prisma.$UserAchievementPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first UserAchievement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAchievementFindFirstArgs} args - Arguments to find a UserAchievement
     * @example
     * // Get one UserAchievement
     * const userAchievement = await prisma.userAchievement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserAchievementFindFirstArgs>(
      args?: SelectSubset<T, UserAchievementFindFirstArgs<ExtArgs>>,
    ): Prisma__UserAchievementClient<
      $Result.GetResult<
        Prisma.$UserAchievementPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first UserAchievement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAchievementFindFirstOrThrowArgs} args - Arguments to find a UserAchievement
     * @example
     * // Get one UserAchievement
     * const userAchievement = await prisma.userAchievement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserAchievementFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserAchievementFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__UserAchievementClient<
      $Result.GetResult<
        Prisma.$UserAchievementPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more UserAchievements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAchievementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserAchievements
     * const userAchievements = await prisma.userAchievement.findMany()
     *
     * // Get first 10 UserAchievements
     * const userAchievements = await prisma.userAchievement.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userAchievementWithIdOnly = await prisma.userAchievement.findMany({ select: { id: true } })
     *
     */
    findMany<T extends UserAchievementFindManyArgs>(
      args?: SelectSubset<T, UserAchievementFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserAchievementPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a UserAchievement.
     * @param {UserAchievementCreateArgs} args - Arguments to create a UserAchievement.
     * @example
     * // Create one UserAchievement
     * const UserAchievement = await prisma.userAchievement.create({
     *   data: {
     *     // ... data to create a UserAchievement
     *   }
     * })
     *
     */
    create<T extends UserAchievementCreateArgs>(
      args: SelectSubset<T, UserAchievementCreateArgs<ExtArgs>>,
    ): Prisma__UserAchievementClient<
      $Result.GetResult<
        Prisma.$UserAchievementPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many UserAchievements.
     * @param {UserAchievementCreateManyArgs} args - Arguments to create many UserAchievements.
     * @example
     * // Create many UserAchievements
     * const userAchievement = await prisma.userAchievement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends UserAchievementCreateManyArgs>(
      args?: SelectSubset<T, UserAchievementCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many UserAchievements and returns the data saved in the database.
     * @param {UserAchievementCreateManyAndReturnArgs} args - Arguments to create many UserAchievements.
     * @example
     * // Create many UserAchievements
     * const userAchievement = await prisma.userAchievement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many UserAchievements and only return the `id`
     * const userAchievementWithIdOnly = await prisma.userAchievement.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends UserAchievementCreateManyAndReturnArgs>(
      args?: SelectSubset<T, UserAchievementCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserAchievementPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a UserAchievement.
     * @param {UserAchievementDeleteArgs} args - Arguments to delete one UserAchievement.
     * @example
     * // Delete one UserAchievement
     * const UserAchievement = await prisma.userAchievement.delete({
     *   where: {
     *     // ... filter to delete one UserAchievement
     *   }
     * })
     *
     */
    delete<T extends UserAchievementDeleteArgs>(
      args: SelectSubset<T, UserAchievementDeleteArgs<ExtArgs>>,
    ): Prisma__UserAchievementClient<
      $Result.GetResult<
        Prisma.$UserAchievementPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one UserAchievement.
     * @param {UserAchievementUpdateArgs} args - Arguments to update one UserAchievement.
     * @example
     * // Update one UserAchievement
     * const userAchievement = await prisma.userAchievement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends UserAchievementUpdateArgs>(
      args: SelectSubset<T, UserAchievementUpdateArgs<ExtArgs>>,
    ): Prisma__UserAchievementClient<
      $Result.GetResult<
        Prisma.$UserAchievementPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more UserAchievements.
     * @param {UserAchievementDeleteManyArgs} args - Arguments to filter UserAchievements to delete.
     * @example
     * // Delete a few UserAchievements
     * const { count } = await prisma.userAchievement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends UserAchievementDeleteManyArgs>(
      args?: SelectSubset<T, UserAchievementDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more UserAchievements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAchievementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserAchievements
     * const userAchievement = await prisma.userAchievement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends UserAchievementUpdateManyArgs>(
      args: SelectSubset<T, UserAchievementUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more UserAchievements and returns the data updated in the database.
     * @param {UserAchievementUpdateManyAndReturnArgs} args - Arguments to update many UserAchievements.
     * @example
     * // Update many UserAchievements
     * const userAchievement = await prisma.userAchievement.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more UserAchievements and only return the `id`
     * const userAchievementWithIdOnly = await prisma.userAchievement.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends UserAchievementUpdateManyAndReturnArgs>(
      args: SelectSubset<T, UserAchievementUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserAchievementPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one UserAchievement.
     * @param {UserAchievementUpsertArgs} args - Arguments to update or create a UserAchievement.
     * @example
     * // Update or create a UserAchievement
     * const userAchievement = await prisma.userAchievement.upsert({
     *   create: {
     *     // ... data to create a UserAchievement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserAchievement we want to update
     *   }
     * })
     */
    upsert<T extends UserAchievementUpsertArgs>(
      args: SelectSubset<T, UserAchievementUpsertArgs<ExtArgs>>,
    ): Prisma__UserAchievementClient<
      $Result.GetResult<
        Prisma.$UserAchievementPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of UserAchievements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAchievementCountArgs} args - Arguments to filter UserAchievements to count.
     * @example
     * // Count the number of UserAchievements
     * const count = await prisma.userAchievement.count({
     *   where: {
     *     // ... the filter for the UserAchievements we want to count
     *   }
     * })
     **/
    count<T extends UserAchievementCountArgs>(
      args?: Subset<T, UserAchievementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserAchievementCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a UserAchievement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAchievementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends UserAchievementAggregateArgs>(
      args: Subset<T, UserAchievementAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserAchievementAggregateType<T>>;

    /**
     * Group by UserAchievement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAchievementGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends UserAchievementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserAchievementGroupByArgs['orderBy'] }
        : { orderBy?: UserAchievementGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, UserAchievementGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetUserAchievementGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the UserAchievement model
     */
    readonly fields: UserAchievementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserAchievement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserAchievementClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    user<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>,
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    achievement<T extends AchievementDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, AchievementDefaultArgs<ExtArgs>>,
    ): Prisma__AchievementClient<
      | $Result.GetResult<
          Prisma.$AchievementPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the UserAchievement model
   */
  interface UserAchievementFieldRefs {
    readonly id: FieldRef<'UserAchievement', 'String'>;
    readonly userId: FieldRef<'UserAchievement', 'String'>;
    readonly achievementId: FieldRef<'UserAchievement', 'String'>;
    readonly achievedAt: FieldRef<'UserAchievement', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * UserAchievement findUnique
   */
  export type UserAchievementFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserAchievement
     */
    select?: UserAchievementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserAchievement
     */
    omit?: UserAchievementOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAchievementInclude<ExtArgs> | null;
    /**
     * Filter, which UserAchievement to fetch.
     */
    where: UserAchievementWhereUniqueInput;
  };

  /**
   * UserAchievement findUniqueOrThrow
   */
  export type UserAchievementFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserAchievement
     */
    select?: UserAchievementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserAchievement
     */
    omit?: UserAchievementOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAchievementInclude<ExtArgs> | null;
    /**
     * Filter, which UserAchievement to fetch.
     */
    where: UserAchievementWhereUniqueInput;
  };

  /**
   * UserAchievement findFirst
   */
  export type UserAchievementFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserAchievement
     */
    select?: UserAchievementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserAchievement
     */
    omit?: UserAchievementOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAchievementInclude<ExtArgs> | null;
    /**
     * Filter, which UserAchievement to fetch.
     */
    where?: UserAchievementWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of UserAchievements to fetch.
     */
    orderBy?:
      | UserAchievementOrderByWithRelationInput
      | UserAchievementOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for UserAchievements.
     */
    cursor?: UserAchievementWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` UserAchievements from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` UserAchievements.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of UserAchievements.
     */
    distinct?:
      | UserAchievementScalarFieldEnum
      | UserAchievementScalarFieldEnum[];
  };

  /**
   * UserAchievement findFirstOrThrow
   */
  export type UserAchievementFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserAchievement
     */
    select?: UserAchievementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserAchievement
     */
    omit?: UserAchievementOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAchievementInclude<ExtArgs> | null;
    /**
     * Filter, which UserAchievement to fetch.
     */
    where?: UserAchievementWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of UserAchievements to fetch.
     */
    orderBy?:
      | UserAchievementOrderByWithRelationInput
      | UserAchievementOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for UserAchievements.
     */
    cursor?: UserAchievementWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` UserAchievements from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` UserAchievements.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of UserAchievements.
     */
    distinct?:
      | UserAchievementScalarFieldEnum
      | UserAchievementScalarFieldEnum[];
  };

  /**
   * UserAchievement findMany
   */
  export type UserAchievementFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserAchievement
     */
    select?: UserAchievementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserAchievement
     */
    omit?: UserAchievementOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAchievementInclude<ExtArgs> | null;
    /**
     * Filter, which UserAchievements to fetch.
     */
    where?: UserAchievementWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of UserAchievements to fetch.
     */
    orderBy?:
      | UserAchievementOrderByWithRelationInput
      | UserAchievementOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing UserAchievements.
     */
    cursor?: UserAchievementWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` UserAchievements from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` UserAchievements.
     */
    skip?: number;
    distinct?:
      | UserAchievementScalarFieldEnum
      | UserAchievementScalarFieldEnum[];
  };

  /**
   * UserAchievement create
   */
  export type UserAchievementCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserAchievement
     */
    select?: UserAchievementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserAchievement
     */
    omit?: UserAchievementOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAchievementInclude<ExtArgs> | null;
    /**
     * The data needed to create a UserAchievement.
     */
    data: XOR<UserAchievementCreateInput, UserAchievementUncheckedCreateInput>;
  };

  /**
   * UserAchievement createMany
   */
  export type UserAchievementCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many UserAchievements.
     */
    data: UserAchievementCreateManyInput | UserAchievementCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * UserAchievement createManyAndReturn
   */
  export type UserAchievementCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserAchievement
     */
    select?: UserAchievementSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the UserAchievement
     */
    omit?: UserAchievementOmit<ExtArgs> | null;
    /**
     * The data used to create many UserAchievements.
     */
    data: UserAchievementCreateManyInput | UserAchievementCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAchievementIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * UserAchievement update
   */
  export type UserAchievementUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserAchievement
     */
    select?: UserAchievementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserAchievement
     */
    omit?: UserAchievementOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAchievementInclude<ExtArgs> | null;
    /**
     * The data needed to update a UserAchievement.
     */
    data: XOR<UserAchievementUpdateInput, UserAchievementUncheckedUpdateInput>;
    /**
     * Choose, which UserAchievement to update.
     */
    where: UserAchievementWhereUniqueInput;
  };

  /**
   * UserAchievement updateMany
   */
  export type UserAchievementUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update UserAchievements.
     */
    data: XOR<
      UserAchievementUpdateManyMutationInput,
      UserAchievementUncheckedUpdateManyInput
    >;
    /**
     * Filter which UserAchievements to update
     */
    where?: UserAchievementWhereInput;
    /**
     * Limit how many UserAchievements to update.
     */
    limit?: number;
  };

  /**
   * UserAchievement updateManyAndReturn
   */
  export type UserAchievementUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserAchievement
     */
    select?: UserAchievementSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the UserAchievement
     */
    omit?: UserAchievementOmit<ExtArgs> | null;
    /**
     * The data used to update UserAchievements.
     */
    data: XOR<
      UserAchievementUpdateManyMutationInput,
      UserAchievementUncheckedUpdateManyInput
    >;
    /**
     * Filter which UserAchievements to update
     */
    where?: UserAchievementWhereInput;
    /**
     * Limit how many UserAchievements to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAchievementIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * UserAchievement upsert
   */
  export type UserAchievementUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserAchievement
     */
    select?: UserAchievementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserAchievement
     */
    omit?: UserAchievementOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAchievementInclude<ExtArgs> | null;
    /**
     * The filter to search for the UserAchievement to update in case it exists.
     */
    where: UserAchievementWhereUniqueInput;
    /**
     * In case the UserAchievement found by the `where` argument doesn't exist, create a new UserAchievement with this data.
     */
    create: XOR<
      UserAchievementCreateInput,
      UserAchievementUncheckedCreateInput
    >;
    /**
     * In case the UserAchievement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<
      UserAchievementUpdateInput,
      UserAchievementUncheckedUpdateInput
    >;
  };

  /**
   * UserAchievement delete
   */
  export type UserAchievementDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserAchievement
     */
    select?: UserAchievementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserAchievement
     */
    omit?: UserAchievementOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAchievementInclude<ExtArgs> | null;
    /**
     * Filter which UserAchievement to delete.
     */
    where: UserAchievementWhereUniqueInput;
  };

  /**
   * UserAchievement deleteMany
   */
  export type UserAchievementDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which UserAchievements to delete
     */
    where?: UserAchievementWhereInput;
    /**
     * Limit how many UserAchievements to delete.
     */
    limit?: number;
  };

  /**
   * UserAchievement without action
   */
  export type UserAchievementDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserAchievement
     */
    select?: UserAchievementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserAchievement
     */
    omit?: UserAchievementOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAchievementInclude<ExtArgs> | null;
  };

  /**
   * Model Team
   */

  export type AggregateTeam = {
    _count: TeamCountAggregateOutputType | null;
    _min: TeamMinAggregateOutputType | null;
    _max: TeamMaxAggregateOutputType | null;
  };

  export type TeamMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    createdAt: Date | null;
  };

  export type TeamMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    createdAt: Date | null;
  };

  export type TeamCountAggregateOutputType = {
    id: number;
    name: number;
    createdAt: number;
    _all: number;
  };

  export type TeamMinAggregateInputType = {
    id?: true;
    name?: true;
    createdAt?: true;
  };

  export type TeamMaxAggregateInputType = {
    id?: true;
    name?: true;
    createdAt?: true;
  };

  export type TeamCountAggregateInputType = {
    id?: true;
    name?: true;
    createdAt?: true;
    _all?: true;
  };

  export type TeamAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Team to aggregate.
     */
    where?: TeamWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: TeamWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Teams.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Teams
     **/
    _count?: true | TeamCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: TeamMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: TeamMaxAggregateInputType;
  };

  export type GetTeamAggregateType<T extends TeamAggregateArgs> = {
    [P in keyof T & keyof AggregateTeam]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeam[P]>
      : GetScalarType<T[P], AggregateTeam[P]>;
  };

  export type TeamGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: TeamWhereInput;
    orderBy?:
      | TeamOrderByWithAggregationInput
      | TeamOrderByWithAggregationInput[];
    by: TeamScalarFieldEnum[] | TeamScalarFieldEnum;
    having?: TeamScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TeamCountAggregateInputType | true;
    _min?: TeamMinAggregateInputType;
    _max?: TeamMaxAggregateInputType;
  };

  export type TeamGroupByOutputType = {
    id: string;
    name: string;
    createdAt: Date;
    _count: TeamCountAggregateOutputType | null;
    _min: TeamMinAggregateOutputType | null;
    _max: TeamMaxAggregateOutputType | null;
  };

  type GetTeamGroupByPayload<T extends TeamGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeamGroupByOutputType, T['by']> & {
        [P in keyof T & keyof TeamGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], TeamGroupByOutputType[P]>
          : GetScalarType<T[P], TeamGroupByOutputType[P]>;
      }
    >
  >;

  export type TeamSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      createdAt?: boolean;
      members?: boolean | Team$membersArgs<ExtArgs>;
      results?: boolean | Team$resultsArgs<ExtArgs>;
      _count?: boolean | TeamCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['team']
  >;

  export type TeamSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      createdAt?: boolean;
    },
    ExtArgs['result']['team']
  >;

  export type TeamSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      createdAt?: boolean;
    },
    ExtArgs['result']['team']
  >;

  export type TeamSelectScalar = {
    id?: boolean;
    name?: boolean;
    createdAt?: boolean;
  };

  export type TeamOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'id' | 'name' | 'createdAt',
    ExtArgs['result']['team']
  >;
  export type TeamInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    members?: boolean | Team$membersArgs<ExtArgs>;
    results?: boolean | Team$resultsArgs<ExtArgs>;
    _count?: boolean | TeamCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type TeamIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};
  export type TeamIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};

  export type $TeamPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Team';
    objects: {
      members: Prisma.$UserPayload<ExtArgs>[];
      results: Prisma.$TeamBattleResultPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        name: string;
        createdAt: Date;
      },
      ExtArgs['result']['team']
    >;
    composites: {};
  };

  type TeamGetPayload<S extends boolean | null | undefined | TeamDefaultArgs> =
    $Result.GetResult<Prisma.$TeamPayload, S>;

  type TeamCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<TeamFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TeamCountAggregateInputType | true;
  };

  export interface TeamDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Team'];
      meta: { name: 'Team' };
    };
    /**
     * Find zero or one Team that matches the filter.
     * @param {TeamFindUniqueArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeamFindUniqueArgs>(
      args: SelectSubset<T, TeamFindUniqueArgs<ExtArgs>>,
    ): Prisma__TeamClient<
      $Result.GetResult<
        Prisma.$TeamPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Team that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeamFindUniqueOrThrowArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeamFindUniqueOrThrowArgs>(
      args: SelectSubset<T, TeamFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__TeamClient<
      $Result.GetResult<
        Prisma.$TeamPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Team that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindFirstArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeamFindFirstArgs>(
      args?: SelectSubset<T, TeamFindFirstArgs<ExtArgs>>,
    ): Prisma__TeamClient<
      $Result.GetResult<
        Prisma.$TeamPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Team that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindFirstOrThrowArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeamFindFirstOrThrowArgs>(
      args?: SelectSubset<T, TeamFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__TeamClient<
      $Result.GetResult<
        Prisma.$TeamPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Teams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Teams
     * const teams = await prisma.team.findMany()
     *
     * // Get first 10 Teams
     * const teams = await prisma.team.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const teamWithIdOnly = await prisma.team.findMany({ select: { id: true } })
     *
     */
    findMany<T extends TeamFindManyArgs>(
      args?: SelectSubset<T, TeamFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$TeamPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Team.
     * @param {TeamCreateArgs} args - Arguments to create a Team.
     * @example
     * // Create one Team
     * const Team = await prisma.team.create({
     *   data: {
     *     // ... data to create a Team
     *   }
     * })
     *
     */
    create<T extends TeamCreateArgs>(
      args: SelectSubset<T, TeamCreateArgs<ExtArgs>>,
    ): Prisma__TeamClient<
      $Result.GetResult<
        Prisma.$TeamPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Teams.
     * @param {TeamCreateManyArgs} args - Arguments to create many Teams.
     * @example
     * // Create many Teams
     * const team = await prisma.team.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends TeamCreateManyArgs>(
      args?: SelectSubset<T, TeamCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Teams and returns the data saved in the database.
     * @param {TeamCreateManyAndReturnArgs} args - Arguments to create many Teams.
     * @example
     * // Create many Teams
     * const team = await prisma.team.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Teams and only return the `id`
     * const teamWithIdOnly = await prisma.team.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends TeamCreateManyAndReturnArgs>(
      args?: SelectSubset<T, TeamCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$TeamPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Team.
     * @param {TeamDeleteArgs} args - Arguments to delete one Team.
     * @example
     * // Delete one Team
     * const Team = await prisma.team.delete({
     *   where: {
     *     // ... filter to delete one Team
     *   }
     * })
     *
     */
    delete<T extends TeamDeleteArgs>(
      args: SelectSubset<T, TeamDeleteArgs<ExtArgs>>,
    ): Prisma__TeamClient<
      $Result.GetResult<
        Prisma.$TeamPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Team.
     * @param {TeamUpdateArgs} args - Arguments to update one Team.
     * @example
     * // Update one Team
     * const team = await prisma.team.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends TeamUpdateArgs>(
      args: SelectSubset<T, TeamUpdateArgs<ExtArgs>>,
    ): Prisma__TeamClient<
      $Result.GetResult<
        Prisma.$TeamPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Teams.
     * @param {TeamDeleteManyArgs} args - Arguments to filter Teams to delete.
     * @example
     * // Delete a few Teams
     * const { count } = await prisma.team.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends TeamDeleteManyArgs>(
      args?: SelectSubset<T, TeamDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Teams
     * const team = await prisma.team.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends TeamUpdateManyArgs>(
      args: SelectSubset<T, TeamUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Teams and returns the data updated in the database.
     * @param {TeamUpdateManyAndReturnArgs} args - Arguments to update many Teams.
     * @example
     * // Update many Teams
     * const team = await prisma.team.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Teams and only return the `id`
     * const teamWithIdOnly = await prisma.team.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends TeamUpdateManyAndReturnArgs>(
      args: SelectSubset<T, TeamUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$TeamPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Team.
     * @param {TeamUpsertArgs} args - Arguments to update or create a Team.
     * @example
     * // Update or create a Team
     * const team = await prisma.team.upsert({
     *   create: {
     *     // ... data to create a Team
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Team we want to update
     *   }
     * })
     */
    upsert<T extends TeamUpsertArgs>(
      args: SelectSubset<T, TeamUpsertArgs<ExtArgs>>,
    ): Prisma__TeamClient<
      $Result.GetResult<
        Prisma.$TeamPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamCountArgs} args - Arguments to filter Teams to count.
     * @example
     * // Count the number of Teams
     * const count = await prisma.team.count({
     *   where: {
     *     // ... the filter for the Teams we want to count
     *   }
     * })
     **/
    count<T extends TeamCountArgs>(
      args?: Subset<T, TeamCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeamCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Team.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends TeamAggregateArgs>(
      args: Subset<T, TeamAggregateArgs>,
    ): Prisma.PrismaPromise<GetTeamAggregateType<T>>;

    /**
     * Group by Team.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends TeamGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeamGroupByArgs['orderBy'] }
        : { orderBy?: TeamGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, TeamGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetTeamGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Team model
     */
    readonly fields: TeamFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Team.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeamClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    members<T extends Team$membersArgs<ExtArgs> = {}>(
      args?: Subset<T, Team$membersArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    results<T extends Team$resultsArgs<ExtArgs> = {}>(
      args?: Subset<T, Team$resultsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$TeamBattleResultPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Team model
   */
  interface TeamFieldRefs {
    readonly id: FieldRef<'Team', 'String'>;
    readonly name: FieldRef<'Team', 'String'>;
    readonly createdAt: FieldRef<'Team', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * Team findUnique
   */
  export type TeamFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null;
    /**
     * Filter, which Team to fetch.
     */
    where: TeamWhereUniqueInput;
  };

  /**
   * Team findUniqueOrThrow
   */
  export type TeamFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null;
    /**
     * Filter, which Team to fetch.
     */
    where: TeamWhereUniqueInput;
  };

  /**
   * Team findFirst
   */
  export type TeamFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null;
    /**
     * Filter, which Team to fetch.
     */
    where?: TeamWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Teams.
     */
    cursor?: TeamWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Teams.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Teams.
     */
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[];
  };

  /**
   * Team findFirstOrThrow
   */
  export type TeamFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null;
    /**
     * Filter, which Team to fetch.
     */
    where?: TeamWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Teams.
     */
    cursor?: TeamWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Teams.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Teams.
     */
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[];
  };

  /**
   * Team findMany
   */
  export type TeamFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null;
    /**
     * Filter, which Teams to fetch.
     */
    where?: TeamWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Teams.
     */
    cursor?: TeamWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Teams.
     */
    skip?: number;
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[];
  };

  /**
   * Team create
   */
  export type TeamCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null;
    /**
     * The data needed to create a Team.
     */
    data: XOR<TeamCreateInput, TeamUncheckedCreateInput>;
  };

  /**
   * Team createMany
   */
  export type TeamCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Teams.
     */
    data: TeamCreateManyInput | TeamCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Team createManyAndReturn
   */
  export type TeamCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null;
    /**
     * The data used to create many Teams.
     */
    data: TeamCreateManyInput | TeamCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Team update
   */
  export type TeamUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null;
    /**
     * The data needed to update a Team.
     */
    data: XOR<TeamUpdateInput, TeamUncheckedUpdateInput>;
    /**
     * Choose, which Team to update.
     */
    where: TeamWhereUniqueInput;
  };

  /**
   * Team updateMany
   */
  export type TeamUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Teams.
     */
    data: XOR<TeamUpdateManyMutationInput, TeamUncheckedUpdateManyInput>;
    /**
     * Filter which Teams to update
     */
    where?: TeamWhereInput;
    /**
     * Limit how many Teams to update.
     */
    limit?: number;
  };

  /**
   * Team updateManyAndReturn
   */
  export type TeamUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null;
    /**
     * The data used to update Teams.
     */
    data: XOR<TeamUpdateManyMutationInput, TeamUncheckedUpdateManyInput>;
    /**
     * Filter which Teams to update
     */
    where?: TeamWhereInput;
    /**
     * Limit how many Teams to update.
     */
    limit?: number;
  };

  /**
   * Team upsert
   */
  export type TeamUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null;
    /**
     * The filter to search for the Team to update in case it exists.
     */
    where: TeamWhereUniqueInput;
    /**
     * In case the Team found by the `where` argument doesn't exist, create a new Team with this data.
     */
    create: XOR<TeamCreateInput, TeamUncheckedCreateInput>;
    /**
     * In case the Team was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeamUpdateInput, TeamUncheckedUpdateInput>;
  };

  /**
   * Team delete
   */
  export type TeamDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null;
    /**
     * Filter which Team to delete.
     */
    where: TeamWhereUniqueInput;
  };

  /**
   * Team deleteMany
   */
  export type TeamDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Teams to delete
     */
    where?: TeamWhereInput;
    /**
     * Limit how many Teams to delete.
     */
    limit?: number;
  };

  /**
   * Team.members
   */
  export type Team$membersArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    where?: UserWhereInput;
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    cursor?: UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * Team.results
   */
  export type Team$resultsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TeamBattleResult
     */
    select?: TeamBattleResultSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TeamBattleResult
     */
    omit?: TeamBattleResultOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamBattleResultInclude<ExtArgs> | null;
    where?: TeamBattleResultWhereInput;
    orderBy?:
      | TeamBattleResultOrderByWithRelationInput
      | TeamBattleResultOrderByWithRelationInput[];
    cursor?: TeamBattleResultWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?:
      | TeamBattleResultScalarFieldEnum
      | TeamBattleResultScalarFieldEnum[];
  };

  /**
   * Team without action
   */
  export type TeamDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null;
  };

  /**
   * Model TeamBattleResult
   */

  export type AggregateTeamBattleResult = {
    _count: TeamBattleResultCountAggregateOutputType | null;
    _avg: TeamBattleResultAvgAggregateOutputType | null;
    _sum: TeamBattleResultSumAggregateOutputType | null;
    _min: TeamBattleResultMinAggregateOutputType | null;
    _max: TeamBattleResultMaxAggregateOutputType | null;
  };

  export type TeamBattleResultAvgAggregateOutputType = {
    score: number | null;
    position: number | null;
  };

  export type TeamBattleResultSumAggregateOutputType = {
    score: number | null;
    position: number | null;
  };

  export type TeamBattleResultMinAggregateOutputType = {
    id: string | null;
    teamId: string | null;
    score: number | null;
    date: Date | null;
    position: number | null;
  };

  export type TeamBattleResultMaxAggregateOutputType = {
    id: string | null;
    teamId: string | null;
    score: number | null;
    date: Date | null;
    position: number | null;
  };

  export type TeamBattleResultCountAggregateOutputType = {
    id: number;
    teamId: number;
    score: number;
    date: number;
    position: number;
    _all: number;
  };

  export type TeamBattleResultAvgAggregateInputType = {
    score?: true;
    position?: true;
  };

  export type TeamBattleResultSumAggregateInputType = {
    score?: true;
    position?: true;
  };

  export type TeamBattleResultMinAggregateInputType = {
    id?: true;
    teamId?: true;
    score?: true;
    date?: true;
    position?: true;
  };

  export type TeamBattleResultMaxAggregateInputType = {
    id?: true;
    teamId?: true;
    score?: true;
    date?: true;
    position?: true;
  };

  export type TeamBattleResultCountAggregateInputType = {
    id?: true;
    teamId?: true;
    score?: true;
    date?: true;
    position?: true;
    _all?: true;
  };

  export type TeamBattleResultAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which TeamBattleResult to aggregate.
     */
    where?: TeamBattleResultWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TeamBattleResults to fetch.
     */
    orderBy?:
      | TeamBattleResultOrderByWithRelationInput
      | TeamBattleResultOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: TeamBattleResultWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TeamBattleResults from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TeamBattleResults.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned TeamBattleResults
     **/
    _count?: true | TeamBattleResultCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: TeamBattleResultAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: TeamBattleResultSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: TeamBattleResultMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: TeamBattleResultMaxAggregateInputType;
  };

  export type GetTeamBattleResultAggregateType<
    T extends TeamBattleResultAggregateArgs,
  > = {
    [P in keyof T & keyof AggregateTeamBattleResult]: P extends
      | '_count'
      | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeamBattleResult[P]>
      : GetScalarType<T[P], AggregateTeamBattleResult[P]>;
  };

  export type TeamBattleResultGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: TeamBattleResultWhereInput;
    orderBy?:
      | TeamBattleResultOrderByWithAggregationInput
      | TeamBattleResultOrderByWithAggregationInput[];
    by: TeamBattleResultScalarFieldEnum[] | TeamBattleResultScalarFieldEnum;
    having?: TeamBattleResultScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TeamBattleResultCountAggregateInputType | true;
    _avg?: TeamBattleResultAvgAggregateInputType;
    _sum?: TeamBattleResultSumAggregateInputType;
    _min?: TeamBattleResultMinAggregateInputType;
    _max?: TeamBattleResultMaxAggregateInputType;
  };

  export type TeamBattleResultGroupByOutputType = {
    id: string;
    teamId: string;
    score: number;
    date: Date;
    position: number;
    _count: TeamBattleResultCountAggregateOutputType | null;
    _avg: TeamBattleResultAvgAggregateOutputType | null;
    _sum: TeamBattleResultSumAggregateOutputType | null;
    _min: TeamBattleResultMinAggregateOutputType | null;
    _max: TeamBattleResultMaxAggregateOutputType | null;
  };

  type GetTeamBattleResultGroupByPayload<
    T extends TeamBattleResultGroupByArgs,
  > = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeamBattleResultGroupByOutputType, T['by']> & {
        [P in keyof T &
          keyof TeamBattleResultGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], TeamBattleResultGroupByOutputType[P]>
          : GetScalarType<T[P], TeamBattleResultGroupByOutputType[P]>;
      }
    >
  >;

  export type TeamBattleResultSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      teamId?: boolean;
      score?: boolean;
      date?: boolean;
      position?: boolean;
      team?: boolean | TeamDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['teamBattleResult']
  >;

  export type TeamBattleResultSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      teamId?: boolean;
      score?: boolean;
      date?: boolean;
      position?: boolean;
      team?: boolean | TeamDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['teamBattleResult']
  >;

  export type TeamBattleResultSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      teamId?: boolean;
      score?: boolean;
      date?: boolean;
      position?: boolean;
      team?: boolean | TeamDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['teamBattleResult']
  >;

  export type TeamBattleResultSelectScalar = {
    id?: boolean;
    teamId?: boolean;
    score?: boolean;
    date?: boolean;
    position?: boolean;
  };

  export type TeamBattleResultOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'id' | 'teamId' | 'score' | 'date' | 'position',
    ExtArgs['result']['teamBattleResult']
  >;
  export type TeamBattleResultInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    team?: boolean | TeamDefaultArgs<ExtArgs>;
  };
  export type TeamBattleResultIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    team?: boolean | TeamDefaultArgs<ExtArgs>;
  };
  export type TeamBattleResultIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    team?: boolean | TeamDefaultArgs<ExtArgs>;
  };

  export type $TeamBattleResultPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'TeamBattleResult';
    objects: {
      team: Prisma.$TeamPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        teamId: string;
        score: number;
        date: Date;
        position: number;
      },
      ExtArgs['result']['teamBattleResult']
    >;
    composites: {};
  };

  type TeamBattleResultGetPayload<
    S extends boolean | null | undefined | TeamBattleResultDefaultArgs,
  > = $Result.GetResult<Prisma.$TeamBattleResultPayload, S>;

  type TeamBattleResultCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    TeamBattleResultFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: TeamBattleResultCountAggregateInputType | true;
  };

  export interface TeamBattleResultDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['TeamBattleResult'];
      meta: { name: 'TeamBattleResult' };
    };
    /**
     * Find zero or one TeamBattleResult that matches the filter.
     * @param {TeamBattleResultFindUniqueArgs} args - Arguments to find a TeamBattleResult
     * @example
     * // Get one TeamBattleResult
     * const teamBattleResult = await prisma.teamBattleResult.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeamBattleResultFindUniqueArgs>(
      args: SelectSubset<T, TeamBattleResultFindUniqueArgs<ExtArgs>>,
    ): Prisma__TeamBattleResultClient<
      $Result.GetResult<
        Prisma.$TeamBattleResultPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one TeamBattleResult that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeamBattleResultFindUniqueOrThrowArgs} args - Arguments to find a TeamBattleResult
     * @example
     * // Get one TeamBattleResult
     * const teamBattleResult = await prisma.teamBattleResult.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeamBattleResultFindUniqueOrThrowArgs>(
      args: SelectSubset<T, TeamBattleResultFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__TeamBattleResultClient<
      $Result.GetResult<
        Prisma.$TeamBattleResultPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first TeamBattleResult that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamBattleResultFindFirstArgs} args - Arguments to find a TeamBattleResult
     * @example
     * // Get one TeamBattleResult
     * const teamBattleResult = await prisma.teamBattleResult.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeamBattleResultFindFirstArgs>(
      args?: SelectSubset<T, TeamBattleResultFindFirstArgs<ExtArgs>>,
    ): Prisma__TeamBattleResultClient<
      $Result.GetResult<
        Prisma.$TeamBattleResultPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first TeamBattleResult that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamBattleResultFindFirstOrThrowArgs} args - Arguments to find a TeamBattleResult
     * @example
     * // Get one TeamBattleResult
     * const teamBattleResult = await prisma.teamBattleResult.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeamBattleResultFindFirstOrThrowArgs>(
      args?: SelectSubset<T, TeamBattleResultFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__TeamBattleResultClient<
      $Result.GetResult<
        Prisma.$TeamBattleResultPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more TeamBattleResults that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamBattleResultFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TeamBattleResults
     * const teamBattleResults = await prisma.teamBattleResult.findMany()
     *
     * // Get first 10 TeamBattleResults
     * const teamBattleResults = await prisma.teamBattleResult.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const teamBattleResultWithIdOnly = await prisma.teamBattleResult.findMany({ select: { id: true } })
     *
     */
    findMany<T extends TeamBattleResultFindManyArgs>(
      args?: SelectSubset<T, TeamBattleResultFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$TeamBattleResultPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a TeamBattleResult.
     * @param {TeamBattleResultCreateArgs} args - Arguments to create a TeamBattleResult.
     * @example
     * // Create one TeamBattleResult
     * const TeamBattleResult = await prisma.teamBattleResult.create({
     *   data: {
     *     // ... data to create a TeamBattleResult
     *   }
     * })
     *
     */
    create<T extends TeamBattleResultCreateArgs>(
      args: SelectSubset<T, TeamBattleResultCreateArgs<ExtArgs>>,
    ): Prisma__TeamBattleResultClient<
      $Result.GetResult<
        Prisma.$TeamBattleResultPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many TeamBattleResults.
     * @param {TeamBattleResultCreateManyArgs} args - Arguments to create many TeamBattleResults.
     * @example
     * // Create many TeamBattleResults
     * const teamBattleResult = await prisma.teamBattleResult.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends TeamBattleResultCreateManyArgs>(
      args?: SelectSubset<T, TeamBattleResultCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many TeamBattleResults and returns the data saved in the database.
     * @param {TeamBattleResultCreateManyAndReturnArgs} args - Arguments to create many TeamBattleResults.
     * @example
     * // Create many TeamBattleResults
     * const teamBattleResult = await prisma.teamBattleResult.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many TeamBattleResults and only return the `id`
     * const teamBattleResultWithIdOnly = await prisma.teamBattleResult.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends TeamBattleResultCreateManyAndReturnArgs>(
      args?: SelectSubset<T, TeamBattleResultCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$TeamBattleResultPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a TeamBattleResult.
     * @param {TeamBattleResultDeleteArgs} args - Arguments to delete one TeamBattleResult.
     * @example
     * // Delete one TeamBattleResult
     * const TeamBattleResult = await prisma.teamBattleResult.delete({
     *   where: {
     *     // ... filter to delete one TeamBattleResult
     *   }
     * })
     *
     */
    delete<T extends TeamBattleResultDeleteArgs>(
      args: SelectSubset<T, TeamBattleResultDeleteArgs<ExtArgs>>,
    ): Prisma__TeamBattleResultClient<
      $Result.GetResult<
        Prisma.$TeamBattleResultPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one TeamBattleResult.
     * @param {TeamBattleResultUpdateArgs} args - Arguments to update one TeamBattleResult.
     * @example
     * // Update one TeamBattleResult
     * const teamBattleResult = await prisma.teamBattleResult.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends TeamBattleResultUpdateArgs>(
      args: SelectSubset<T, TeamBattleResultUpdateArgs<ExtArgs>>,
    ): Prisma__TeamBattleResultClient<
      $Result.GetResult<
        Prisma.$TeamBattleResultPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more TeamBattleResults.
     * @param {TeamBattleResultDeleteManyArgs} args - Arguments to filter TeamBattleResults to delete.
     * @example
     * // Delete a few TeamBattleResults
     * const { count } = await prisma.teamBattleResult.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends TeamBattleResultDeleteManyArgs>(
      args?: SelectSubset<T, TeamBattleResultDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more TeamBattleResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamBattleResultUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TeamBattleResults
     * const teamBattleResult = await prisma.teamBattleResult.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends TeamBattleResultUpdateManyArgs>(
      args: SelectSubset<T, TeamBattleResultUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more TeamBattleResults and returns the data updated in the database.
     * @param {TeamBattleResultUpdateManyAndReturnArgs} args - Arguments to update many TeamBattleResults.
     * @example
     * // Update many TeamBattleResults
     * const teamBattleResult = await prisma.teamBattleResult.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more TeamBattleResults and only return the `id`
     * const teamBattleResultWithIdOnly = await prisma.teamBattleResult.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends TeamBattleResultUpdateManyAndReturnArgs>(
      args: SelectSubset<T, TeamBattleResultUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$TeamBattleResultPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one TeamBattleResult.
     * @param {TeamBattleResultUpsertArgs} args - Arguments to update or create a TeamBattleResult.
     * @example
     * // Update or create a TeamBattleResult
     * const teamBattleResult = await prisma.teamBattleResult.upsert({
     *   create: {
     *     // ... data to create a TeamBattleResult
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TeamBattleResult we want to update
     *   }
     * })
     */
    upsert<T extends TeamBattleResultUpsertArgs>(
      args: SelectSubset<T, TeamBattleResultUpsertArgs<ExtArgs>>,
    ): Prisma__TeamBattleResultClient<
      $Result.GetResult<
        Prisma.$TeamBattleResultPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of TeamBattleResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamBattleResultCountArgs} args - Arguments to filter TeamBattleResults to count.
     * @example
     * // Count the number of TeamBattleResults
     * const count = await prisma.teamBattleResult.count({
     *   where: {
     *     // ... the filter for the TeamBattleResults we want to count
     *   }
     * })
     **/
    count<T extends TeamBattleResultCountArgs>(
      args?: Subset<T, TeamBattleResultCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeamBattleResultCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a TeamBattleResult.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamBattleResultAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends TeamBattleResultAggregateArgs>(
      args: Subset<T, TeamBattleResultAggregateArgs>,
    ): Prisma.PrismaPromise<GetTeamBattleResultAggregateType<T>>;

    /**
     * Group by TeamBattleResult.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamBattleResultGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends TeamBattleResultGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeamBattleResultGroupByArgs['orderBy'] }
        : { orderBy?: TeamBattleResultGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, TeamBattleResultGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetTeamBattleResultGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the TeamBattleResult model
     */
    readonly fields: TeamBattleResultFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TeamBattleResult.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeamBattleResultClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    team<T extends TeamDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, TeamDefaultArgs<ExtArgs>>,
    ): Prisma__TeamClient<
      | $Result.GetResult<
          Prisma.$TeamPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the TeamBattleResult model
   */
  interface TeamBattleResultFieldRefs {
    readonly id: FieldRef<'TeamBattleResult', 'String'>;
    readonly teamId: FieldRef<'TeamBattleResult', 'String'>;
    readonly score: FieldRef<'TeamBattleResult', 'Int'>;
    readonly date: FieldRef<'TeamBattleResult', 'DateTime'>;
    readonly position: FieldRef<'TeamBattleResult', 'Int'>;
  }

  // Custom InputTypes
  /**
   * TeamBattleResult findUnique
   */
  export type TeamBattleResultFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TeamBattleResult
     */
    select?: TeamBattleResultSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TeamBattleResult
     */
    omit?: TeamBattleResultOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamBattleResultInclude<ExtArgs> | null;
    /**
     * Filter, which TeamBattleResult to fetch.
     */
    where: TeamBattleResultWhereUniqueInput;
  };

  /**
   * TeamBattleResult findUniqueOrThrow
   */
  export type TeamBattleResultFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TeamBattleResult
     */
    select?: TeamBattleResultSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TeamBattleResult
     */
    omit?: TeamBattleResultOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamBattleResultInclude<ExtArgs> | null;
    /**
     * Filter, which TeamBattleResult to fetch.
     */
    where: TeamBattleResultWhereUniqueInput;
  };

  /**
   * TeamBattleResult findFirst
   */
  export type TeamBattleResultFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TeamBattleResult
     */
    select?: TeamBattleResultSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TeamBattleResult
     */
    omit?: TeamBattleResultOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamBattleResultInclude<ExtArgs> | null;
    /**
     * Filter, which TeamBattleResult to fetch.
     */
    where?: TeamBattleResultWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TeamBattleResults to fetch.
     */
    orderBy?:
      | TeamBattleResultOrderByWithRelationInput
      | TeamBattleResultOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for TeamBattleResults.
     */
    cursor?: TeamBattleResultWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TeamBattleResults from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TeamBattleResults.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of TeamBattleResults.
     */
    distinct?:
      | TeamBattleResultScalarFieldEnum
      | TeamBattleResultScalarFieldEnum[];
  };

  /**
   * TeamBattleResult findFirstOrThrow
   */
  export type TeamBattleResultFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TeamBattleResult
     */
    select?: TeamBattleResultSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TeamBattleResult
     */
    omit?: TeamBattleResultOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamBattleResultInclude<ExtArgs> | null;
    /**
     * Filter, which TeamBattleResult to fetch.
     */
    where?: TeamBattleResultWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TeamBattleResults to fetch.
     */
    orderBy?:
      | TeamBattleResultOrderByWithRelationInput
      | TeamBattleResultOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for TeamBattleResults.
     */
    cursor?: TeamBattleResultWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TeamBattleResults from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TeamBattleResults.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of TeamBattleResults.
     */
    distinct?:
      | TeamBattleResultScalarFieldEnum
      | TeamBattleResultScalarFieldEnum[];
  };

  /**
   * TeamBattleResult findMany
   */
  export type TeamBattleResultFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TeamBattleResult
     */
    select?: TeamBattleResultSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TeamBattleResult
     */
    omit?: TeamBattleResultOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamBattleResultInclude<ExtArgs> | null;
    /**
     * Filter, which TeamBattleResults to fetch.
     */
    where?: TeamBattleResultWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TeamBattleResults to fetch.
     */
    orderBy?:
      | TeamBattleResultOrderByWithRelationInput
      | TeamBattleResultOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing TeamBattleResults.
     */
    cursor?: TeamBattleResultWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TeamBattleResults from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TeamBattleResults.
     */
    skip?: number;
    distinct?:
      | TeamBattleResultScalarFieldEnum
      | TeamBattleResultScalarFieldEnum[];
  };

  /**
   * TeamBattleResult create
   */
  export type TeamBattleResultCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TeamBattleResult
     */
    select?: TeamBattleResultSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TeamBattleResult
     */
    omit?: TeamBattleResultOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamBattleResultInclude<ExtArgs> | null;
    /**
     * The data needed to create a TeamBattleResult.
     */
    data: XOR<
      TeamBattleResultCreateInput,
      TeamBattleResultUncheckedCreateInput
    >;
  };

  /**
   * TeamBattleResult createMany
   */
  export type TeamBattleResultCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many TeamBattleResults.
     */
    data: TeamBattleResultCreateManyInput | TeamBattleResultCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * TeamBattleResult createManyAndReturn
   */
  export type TeamBattleResultCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TeamBattleResult
     */
    select?: TeamBattleResultSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the TeamBattleResult
     */
    omit?: TeamBattleResultOmit<ExtArgs> | null;
    /**
     * The data used to create many TeamBattleResults.
     */
    data: TeamBattleResultCreateManyInput | TeamBattleResultCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamBattleResultIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * TeamBattleResult update
   */
  export type TeamBattleResultUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TeamBattleResult
     */
    select?: TeamBattleResultSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TeamBattleResult
     */
    omit?: TeamBattleResultOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamBattleResultInclude<ExtArgs> | null;
    /**
     * The data needed to update a TeamBattleResult.
     */
    data: XOR<
      TeamBattleResultUpdateInput,
      TeamBattleResultUncheckedUpdateInput
    >;
    /**
     * Choose, which TeamBattleResult to update.
     */
    where: TeamBattleResultWhereUniqueInput;
  };

  /**
   * TeamBattleResult updateMany
   */
  export type TeamBattleResultUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update TeamBattleResults.
     */
    data: XOR<
      TeamBattleResultUpdateManyMutationInput,
      TeamBattleResultUncheckedUpdateManyInput
    >;
    /**
     * Filter which TeamBattleResults to update
     */
    where?: TeamBattleResultWhereInput;
    /**
     * Limit how many TeamBattleResults to update.
     */
    limit?: number;
  };

  /**
   * TeamBattleResult updateManyAndReturn
   */
  export type TeamBattleResultUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TeamBattleResult
     */
    select?: TeamBattleResultSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the TeamBattleResult
     */
    omit?: TeamBattleResultOmit<ExtArgs> | null;
    /**
     * The data used to update TeamBattleResults.
     */
    data: XOR<
      TeamBattleResultUpdateManyMutationInput,
      TeamBattleResultUncheckedUpdateManyInput
    >;
    /**
     * Filter which TeamBattleResults to update
     */
    where?: TeamBattleResultWhereInput;
    /**
     * Limit how many TeamBattleResults to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamBattleResultIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * TeamBattleResult upsert
   */
  export type TeamBattleResultUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TeamBattleResult
     */
    select?: TeamBattleResultSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TeamBattleResult
     */
    omit?: TeamBattleResultOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamBattleResultInclude<ExtArgs> | null;
    /**
     * The filter to search for the TeamBattleResult to update in case it exists.
     */
    where: TeamBattleResultWhereUniqueInput;
    /**
     * In case the TeamBattleResult found by the `where` argument doesn't exist, create a new TeamBattleResult with this data.
     */
    create: XOR<
      TeamBattleResultCreateInput,
      TeamBattleResultUncheckedCreateInput
    >;
    /**
     * In case the TeamBattleResult was found with the provided `where` argument, update it with this data.
     */
    update: XOR<
      TeamBattleResultUpdateInput,
      TeamBattleResultUncheckedUpdateInput
    >;
  };

  /**
   * TeamBattleResult delete
   */
  export type TeamBattleResultDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TeamBattleResult
     */
    select?: TeamBattleResultSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TeamBattleResult
     */
    omit?: TeamBattleResultOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamBattleResultInclude<ExtArgs> | null;
    /**
     * Filter which TeamBattleResult to delete.
     */
    where: TeamBattleResultWhereUniqueInput;
  };

  /**
   * TeamBattleResult deleteMany
   */
  export type TeamBattleResultDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which TeamBattleResults to delete
     */
    where?: TeamBattleResultWhereInput;
    /**
     * Limit how many TeamBattleResults to delete.
     */
    limit?: number;
  };

  /**
   * TeamBattleResult without action
   */
  export type TeamBattleResultDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TeamBattleResult
     */
    select?: TeamBattleResultSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TeamBattleResult
     */
    omit?: TeamBattleResultOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamBattleResultInclude<ExtArgs> | null;
  };

  /**
   * Model Lesson
   */

  export type AggregateLesson = {
    _count: LessonCountAggregateOutputType | null;
    _avg: LessonAvgAggregateOutputType | null;
    _sum: LessonSumAggregateOutputType | null;
    _min: LessonMinAggregateOutputType | null;
    _max: LessonMaxAggregateOutputType | null;
  };

  export type LessonAvgAggregateOutputType = {
    durationMin: number | null;
  };

  export type LessonSumAggregateOutputType = {
    durationMin: number | null;
  };

  export type LessonMinAggregateOutputType = {
    id: string | null;
    title: string | null;
    topic: string | null;
    content: string | null;
    durationMin: number | null;
    createdAt: Date | null;
  };

  export type LessonMaxAggregateOutputType = {
    id: string | null;
    title: string | null;
    topic: string | null;
    content: string | null;
    durationMin: number | null;
    createdAt: Date | null;
  };

  export type LessonCountAggregateOutputType = {
    id: number;
    title: number;
    topic: number;
    content: number;
    durationMin: number;
    createdAt: number;
    _all: number;
  };

  export type LessonAvgAggregateInputType = {
    durationMin?: true;
  };

  export type LessonSumAggregateInputType = {
    durationMin?: true;
  };

  export type LessonMinAggregateInputType = {
    id?: true;
    title?: true;
    topic?: true;
    content?: true;
    durationMin?: true;
    createdAt?: true;
  };

  export type LessonMaxAggregateInputType = {
    id?: true;
    title?: true;
    topic?: true;
    content?: true;
    durationMin?: true;
    createdAt?: true;
  };

  export type LessonCountAggregateInputType = {
    id?: true;
    title?: true;
    topic?: true;
    content?: true;
    durationMin?: true;
    createdAt?: true;
    _all?: true;
  };

  export type LessonAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Lesson to aggregate.
     */
    where?: LessonWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Lessons to fetch.
     */
    orderBy?: LessonOrderByWithRelationInput | LessonOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: LessonWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Lessons from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Lessons.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Lessons
     **/
    _count?: true | LessonCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: LessonAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: LessonSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: LessonMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: LessonMaxAggregateInputType;
  };

  export type GetLessonAggregateType<T extends LessonAggregateArgs> = {
    [P in keyof T & keyof AggregateLesson]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLesson[P]>
      : GetScalarType<T[P], AggregateLesson[P]>;
  };

  export type LessonGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: LessonWhereInput;
    orderBy?:
      | LessonOrderByWithAggregationInput
      | LessonOrderByWithAggregationInput[];
    by: LessonScalarFieldEnum[] | LessonScalarFieldEnum;
    having?: LessonScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: LessonCountAggregateInputType | true;
    _avg?: LessonAvgAggregateInputType;
    _sum?: LessonSumAggregateInputType;
    _min?: LessonMinAggregateInputType;
    _max?: LessonMaxAggregateInputType;
  };

  export type LessonGroupByOutputType = {
    id: string;
    title: string;
    topic: string;
    content: string;
    durationMin: number;
    createdAt: Date;
    _count: LessonCountAggregateOutputType | null;
    _avg: LessonAvgAggregateOutputType | null;
    _sum: LessonSumAggregateOutputType | null;
    _min: LessonMinAggregateOutputType | null;
    _max: LessonMaxAggregateOutputType | null;
  };

  type GetLessonGroupByPayload<T extends LessonGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<LessonGroupByOutputType, T['by']> & {
          [P in keyof T & keyof LessonGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LessonGroupByOutputType[P]>
            : GetScalarType<T[P], LessonGroupByOutputType[P]>;
        }
      >
    >;

  export type LessonSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      title?: boolean;
      topic?: boolean;
      content?: boolean;
      durationMin?: boolean;
      createdAt?: boolean;
      progress?: boolean | Lesson$progressArgs<ExtArgs>;
      _count?: boolean | LessonCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['lesson']
  >;

  export type LessonSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      title?: boolean;
      topic?: boolean;
      content?: boolean;
      durationMin?: boolean;
      createdAt?: boolean;
    },
    ExtArgs['result']['lesson']
  >;

  export type LessonSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      title?: boolean;
      topic?: boolean;
      content?: boolean;
      durationMin?: boolean;
      createdAt?: boolean;
    },
    ExtArgs['result']['lesson']
  >;

  export type LessonSelectScalar = {
    id?: boolean;
    title?: boolean;
    topic?: boolean;
    content?: boolean;
    durationMin?: boolean;
    createdAt?: boolean;
  };

  export type LessonOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'id' | 'title' | 'topic' | 'content' | 'durationMin' | 'createdAt',
    ExtArgs['result']['lesson']
  >;
  export type LessonInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    progress?: boolean | Lesson$progressArgs<ExtArgs>;
    _count?: boolean | LessonCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type LessonIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};
  export type LessonIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};

  export type $LessonPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Lesson';
    objects: {
      progress: Prisma.$UserLessonProgressPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        title: string;
        topic: string;
        content: string;
        durationMin: number;
        createdAt: Date;
      },
      ExtArgs['result']['lesson']
    >;
    composites: {};
  };

  type LessonGetPayload<
    S extends boolean | null | undefined | LessonDefaultArgs,
  > = $Result.GetResult<Prisma.$LessonPayload, S>;

  type LessonCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<LessonFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: LessonCountAggregateInputType | true;
  };

  export interface LessonDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Lesson'];
      meta: { name: 'Lesson' };
    };
    /**
     * Find zero or one Lesson that matches the filter.
     * @param {LessonFindUniqueArgs} args - Arguments to find a Lesson
     * @example
     * // Get one Lesson
     * const lesson = await prisma.lesson.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LessonFindUniqueArgs>(
      args: SelectSubset<T, LessonFindUniqueArgs<ExtArgs>>,
    ): Prisma__LessonClient<
      $Result.GetResult<
        Prisma.$LessonPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Lesson that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LessonFindUniqueOrThrowArgs} args - Arguments to find a Lesson
     * @example
     * // Get one Lesson
     * const lesson = await prisma.lesson.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LessonFindUniqueOrThrowArgs>(
      args: SelectSubset<T, LessonFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__LessonClient<
      $Result.GetResult<
        Prisma.$LessonPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Lesson that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonFindFirstArgs} args - Arguments to find a Lesson
     * @example
     * // Get one Lesson
     * const lesson = await prisma.lesson.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LessonFindFirstArgs>(
      args?: SelectSubset<T, LessonFindFirstArgs<ExtArgs>>,
    ): Prisma__LessonClient<
      $Result.GetResult<
        Prisma.$LessonPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Lesson that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonFindFirstOrThrowArgs} args - Arguments to find a Lesson
     * @example
     * // Get one Lesson
     * const lesson = await prisma.lesson.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LessonFindFirstOrThrowArgs>(
      args?: SelectSubset<T, LessonFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__LessonClient<
      $Result.GetResult<
        Prisma.$LessonPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Lessons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lessons
     * const lessons = await prisma.lesson.findMany()
     *
     * // Get first 10 Lessons
     * const lessons = await prisma.lesson.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const lessonWithIdOnly = await prisma.lesson.findMany({ select: { id: true } })
     *
     */
    findMany<T extends LessonFindManyArgs>(
      args?: SelectSubset<T, LessonFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$LessonPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Lesson.
     * @param {LessonCreateArgs} args - Arguments to create a Lesson.
     * @example
     * // Create one Lesson
     * const Lesson = await prisma.lesson.create({
     *   data: {
     *     // ... data to create a Lesson
     *   }
     * })
     *
     */
    create<T extends LessonCreateArgs>(
      args: SelectSubset<T, LessonCreateArgs<ExtArgs>>,
    ): Prisma__LessonClient<
      $Result.GetResult<
        Prisma.$LessonPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Lessons.
     * @param {LessonCreateManyArgs} args - Arguments to create many Lessons.
     * @example
     * // Create many Lessons
     * const lesson = await prisma.lesson.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends LessonCreateManyArgs>(
      args?: SelectSubset<T, LessonCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Lessons and returns the data saved in the database.
     * @param {LessonCreateManyAndReturnArgs} args - Arguments to create many Lessons.
     * @example
     * // Create many Lessons
     * const lesson = await prisma.lesson.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Lessons and only return the `id`
     * const lessonWithIdOnly = await prisma.lesson.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends LessonCreateManyAndReturnArgs>(
      args?: SelectSubset<T, LessonCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$LessonPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Lesson.
     * @param {LessonDeleteArgs} args - Arguments to delete one Lesson.
     * @example
     * // Delete one Lesson
     * const Lesson = await prisma.lesson.delete({
     *   where: {
     *     // ... filter to delete one Lesson
     *   }
     * })
     *
     */
    delete<T extends LessonDeleteArgs>(
      args: SelectSubset<T, LessonDeleteArgs<ExtArgs>>,
    ): Prisma__LessonClient<
      $Result.GetResult<
        Prisma.$LessonPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Lesson.
     * @param {LessonUpdateArgs} args - Arguments to update one Lesson.
     * @example
     * // Update one Lesson
     * const lesson = await prisma.lesson.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends LessonUpdateArgs>(
      args: SelectSubset<T, LessonUpdateArgs<ExtArgs>>,
    ): Prisma__LessonClient<
      $Result.GetResult<
        Prisma.$LessonPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Lessons.
     * @param {LessonDeleteManyArgs} args - Arguments to filter Lessons to delete.
     * @example
     * // Delete a few Lessons
     * const { count } = await prisma.lesson.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends LessonDeleteManyArgs>(
      args?: SelectSubset<T, LessonDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Lessons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lessons
     * const lesson = await prisma.lesson.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends LessonUpdateManyArgs>(
      args: SelectSubset<T, LessonUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Lessons and returns the data updated in the database.
     * @param {LessonUpdateManyAndReturnArgs} args - Arguments to update many Lessons.
     * @example
     * // Update many Lessons
     * const lesson = await prisma.lesson.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Lessons and only return the `id`
     * const lessonWithIdOnly = await prisma.lesson.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends LessonUpdateManyAndReturnArgs>(
      args: SelectSubset<T, LessonUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$LessonPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Lesson.
     * @param {LessonUpsertArgs} args - Arguments to update or create a Lesson.
     * @example
     * // Update or create a Lesson
     * const lesson = await prisma.lesson.upsert({
     *   create: {
     *     // ... data to create a Lesson
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lesson we want to update
     *   }
     * })
     */
    upsert<T extends LessonUpsertArgs>(
      args: SelectSubset<T, LessonUpsertArgs<ExtArgs>>,
    ): Prisma__LessonClient<
      $Result.GetResult<
        Prisma.$LessonPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Lessons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonCountArgs} args - Arguments to filter Lessons to count.
     * @example
     * // Count the number of Lessons
     * const count = await prisma.lesson.count({
     *   where: {
     *     // ... the filter for the Lessons we want to count
     *   }
     * })
     **/
    count<T extends LessonCountArgs>(
      args?: Subset<T, LessonCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LessonCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Lesson.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends LessonAggregateArgs>(
      args: Subset<T, LessonAggregateArgs>,
    ): Prisma.PrismaPromise<GetLessonAggregateType<T>>;

    /**
     * Group by Lesson.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends LessonGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LessonGroupByArgs['orderBy'] }
        : { orderBy?: LessonGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, LessonGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetLessonGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Lesson model
     */
    readonly fields: LessonFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Lesson.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LessonClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    progress<T extends Lesson$progressArgs<ExtArgs> = {}>(
      args?: Subset<T, Lesson$progressArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$UserLessonProgressPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Lesson model
   */
  interface LessonFieldRefs {
    readonly id: FieldRef<'Lesson', 'String'>;
    readonly title: FieldRef<'Lesson', 'String'>;
    readonly topic: FieldRef<'Lesson', 'String'>;
    readonly content: FieldRef<'Lesson', 'String'>;
    readonly durationMin: FieldRef<'Lesson', 'Int'>;
    readonly createdAt: FieldRef<'Lesson', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * Lesson findUnique
   */
  export type LessonFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null;
    /**
     * Filter, which Lesson to fetch.
     */
    where: LessonWhereUniqueInput;
  };

  /**
   * Lesson findUniqueOrThrow
   */
  export type LessonFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null;
    /**
     * Filter, which Lesson to fetch.
     */
    where: LessonWhereUniqueInput;
  };

  /**
   * Lesson findFirst
   */
  export type LessonFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null;
    /**
     * Filter, which Lesson to fetch.
     */
    where?: LessonWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Lessons to fetch.
     */
    orderBy?: LessonOrderByWithRelationInput | LessonOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Lessons.
     */
    cursor?: LessonWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Lessons from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Lessons.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Lessons.
     */
    distinct?: LessonScalarFieldEnum | LessonScalarFieldEnum[];
  };

  /**
   * Lesson findFirstOrThrow
   */
  export type LessonFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null;
    /**
     * Filter, which Lesson to fetch.
     */
    where?: LessonWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Lessons to fetch.
     */
    orderBy?: LessonOrderByWithRelationInput | LessonOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Lessons.
     */
    cursor?: LessonWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Lessons from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Lessons.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Lessons.
     */
    distinct?: LessonScalarFieldEnum | LessonScalarFieldEnum[];
  };

  /**
   * Lesson findMany
   */
  export type LessonFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null;
    /**
     * Filter, which Lessons to fetch.
     */
    where?: LessonWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Lessons to fetch.
     */
    orderBy?: LessonOrderByWithRelationInput | LessonOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Lessons.
     */
    cursor?: LessonWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Lessons from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Lessons.
     */
    skip?: number;
    distinct?: LessonScalarFieldEnum | LessonScalarFieldEnum[];
  };

  /**
   * Lesson create
   */
  export type LessonCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null;
    /**
     * The data needed to create a Lesson.
     */
    data: XOR<LessonCreateInput, LessonUncheckedCreateInput>;
  };

  /**
   * Lesson createMany
   */
  export type LessonCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Lessons.
     */
    data: LessonCreateManyInput | LessonCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Lesson createManyAndReturn
   */
  export type LessonCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null;
    /**
     * The data used to create many Lessons.
     */
    data: LessonCreateManyInput | LessonCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Lesson update
   */
  export type LessonUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null;
    /**
     * The data needed to update a Lesson.
     */
    data: XOR<LessonUpdateInput, LessonUncheckedUpdateInput>;
    /**
     * Choose, which Lesson to update.
     */
    where: LessonWhereUniqueInput;
  };

  /**
   * Lesson updateMany
   */
  export type LessonUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Lessons.
     */
    data: XOR<LessonUpdateManyMutationInput, LessonUncheckedUpdateManyInput>;
    /**
     * Filter which Lessons to update
     */
    where?: LessonWhereInput;
    /**
     * Limit how many Lessons to update.
     */
    limit?: number;
  };

  /**
   * Lesson updateManyAndReturn
   */
  export type LessonUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null;
    /**
     * The data used to update Lessons.
     */
    data: XOR<LessonUpdateManyMutationInput, LessonUncheckedUpdateManyInput>;
    /**
     * Filter which Lessons to update
     */
    where?: LessonWhereInput;
    /**
     * Limit how many Lessons to update.
     */
    limit?: number;
  };

  /**
   * Lesson upsert
   */
  export type LessonUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null;
    /**
     * The filter to search for the Lesson to update in case it exists.
     */
    where: LessonWhereUniqueInput;
    /**
     * In case the Lesson found by the `where` argument doesn't exist, create a new Lesson with this data.
     */
    create: XOR<LessonCreateInput, LessonUncheckedCreateInput>;
    /**
     * In case the Lesson was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LessonUpdateInput, LessonUncheckedUpdateInput>;
  };

  /**
   * Lesson delete
   */
  export type LessonDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null;
    /**
     * Filter which Lesson to delete.
     */
    where: LessonWhereUniqueInput;
  };

  /**
   * Lesson deleteMany
   */
  export type LessonDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Lessons to delete
     */
    where?: LessonWhereInput;
    /**
     * Limit how many Lessons to delete.
     */
    limit?: number;
  };

  /**
   * Lesson.progress
   */
  export type Lesson$progressArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserLessonProgress
     */
    select?: UserLessonProgressSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserLessonProgress
     */
    omit?: UserLessonProgressOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLessonProgressInclude<ExtArgs> | null;
    where?: UserLessonProgressWhereInput;
    orderBy?:
      | UserLessonProgressOrderByWithRelationInput
      | UserLessonProgressOrderByWithRelationInput[];
    cursor?: UserLessonProgressWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?:
      | UserLessonProgressScalarFieldEnum
      | UserLessonProgressScalarFieldEnum[];
  };

  /**
   * Lesson without action
   */
  export type LessonDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null;
  };

  /**
   * Model UserLessonProgress
   */

  export type AggregateUserLessonProgress = {
    _count: UserLessonProgressCountAggregateOutputType | null;
    _min: UserLessonProgressMinAggregateOutputType | null;
    _max: UserLessonProgressMaxAggregateOutputType | null;
  };

  export type UserLessonProgressMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    lessonId: string | null;
    status: string | null;
    completedAt: Date | null;
  };

  export type UserLessonProgressMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    lessonId: string | null;
    status: string | null;
    completedAt: Date | null;
  };

  export type UserLessonProgressCountAggregateOutputType = {
    id: number;
    userId: number;
    lessonId: number;
    status: number;
    completedAt: number;
    _all: number;
  };

  export type UserLessonProgressMinAggregateInputType = {
    id?: true;
    userId?: true;
    lessonId?: true;
    status?: true;
    completedAt?: true;
  };

  export type UserLessonProgressMaxAggregateInputType = {
    id?: true;
    userId?: true;
    lessonId?: true;
    status?: true;
    completedAt?: true;
  };

  export type UserLessonProgressCountAggregateInputType = {
    id?: true;
    userId?: true;
    lessonId?: true;
    status?: true;
    completedAt?: true;
    _all?: true;
  };

  export type UserLessonProgressAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which UserLessonProgress to aggregate.
     */
    where?: UserLessonProgressWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of UserLessonProgresses to fetch.
     */
    orderBy?:
      | UserLessonProgressOrderByWithRelationInput
      | UserLessonProgressOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: UserLessonProgressWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` UserLessonProgresses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` UserLessonProgresses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned UserLessonProgresses
     **/
    _count?: true | UserLessonProgressCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserLessonProgressMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserLessonProgressMaxAggregateInputType;
  };

  export type GetUserLessonProgressAggregateType<
    T extends UserLessonProgressAggregateArgs,
  > = {
    [P in keyof T & keyof AggregateUserLessonProgress]: P extends
      | '_count'
      | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserLessonProgress[P]>
      : GetScalarType<T[P], AggregateUserLessonProgress[P]>;
  };

  export type UserLessonProgressGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: UserLessonProgressWhereInput;
    orderBy?:
      | UserLessonProgressOrderByWithAggregationInput
      | UserLessonProgressOrderByWithAggregationInput[];
    by: UserLessonProgressScalarFieldEnum[] | UserLessonProgressScalarFieldEnum;
    having?: UserLessonProgressScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserLessonProgressCountAggregateInputType | true;
    _min?: UserLessonProgressMinAggregateInputType;
    _max?: UserLessonProgressMaxAggregateInputType;
  };

  export type UserLessonProgressGroupByOutputType = {
    id: string;
    userId: string;
    lessonId: string;
    status: string;
    completedAt: Date | null;
    _count: UserLessonProgressCountAggregateOutputType | null;
    _min: UserLessonProgressMinAggregateOutputType | null;
    _max: UserLessonProgressMaxAggregateOutputType | null;
  };

  type GetUserLessonProgressGroupByPayload<
    T extends UserLessonProgressGroupByArgs,
  > = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserLessonProgressGroupByOutputType, T['by']> & {
        [P in keyof T &
          keyof UserLessonProgressGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserLessonProgressGroupByOutputType[P]>
          : GetScalarType<T[P], UserLessonProgressGroupByOutputType[P]>;
      }
    >
  >;

  export type UserLessonProgressSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      lessonId?: boolean;
      status?: boolean;
      completedAt?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
      lesson?: boolean | LessonDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['userLessonProgress']
  >;

  export type UserLessonProgressSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      lessonId?: boolean;
      status?: boolean;
      completedAt?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
      lesson?: boolean | LessonDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['userLessonProgress']
  >;

  export type UserLessonProgressSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      lessonId?: boolean;
      status?: boolean;
      completedAt?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
      lesson?: boolean | LessonDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['userLessonProgress']
  >;

  export type UserLessonProgressSelectScalar = {
    id?: boolean;
    userId?: boolean;
    lessonId?: boolean;
    status?: boolean;
    completedAt?: boolean;
  };

  export type UserLessonProgressOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'id' | 'userId' | 'lessonId' | 'status' | 'completedAt',
    ExtArgs['result']['userLessonProgress']
  >;
  export type UserLessonProgressInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
    lesson?: boolean | LessonDefaultArgs<ExtArgs>;
  };
  export type UserLessonProgressIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
    lesson?: boolean | LessonDefaultArgs<ExtArgs>;
  };
  export type UserLessonProgressIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
    lesson?: boolean | LessonDefaultArgs<ExtArgs>;
  };

  export type $UserLessonProgressPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'UserLessonProgress';
    objects: {
      user: Prisma.$UserPayload<ExtArgs>;
      lesson: Prisma.$LessonPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        userId: string;
        lessonId: string;
        status: string;
        completedAt: Date | null;
      },
      ExtArgs['result']['userLessonProgress']
    >;
    composites: {};
  };

  type UserLessonProgressGetPayload<
    S extends boolean | null | undefined | UserLessonProgressDefaultArgs,
  > = $Result.GetResult<Prisma.$UserLessonProgressPayload, S>;

  type UserLessonProgressCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    UserLessonProgressFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: UserLessonProgressCountAggregateInputType | true;
  };

  export interface UserLessonProgressDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['UserLessonProgress'];
      meta: { name: 'UserLessonProgress' };
    };
    /**
     * Find zero or one UserLessonProgress that matches the filter.
     * @param {UserLessonProgressFindUniqueArgs} args - Arguments to find a UserLessonProgress
     * @example
     * // Get one UserLessonProgress
     * const userLessonProgress = await prisma.userLessonProgress.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserLessonProgressFindUniqueArgs>(
      args: SelectSubset<T, UserLessonProgressFindUniqueArgs<ExtArgs>>,
    ): Prisma__UserLessonProgressClient<
      $Result.GetResult<
        Prisma.$UserLessonProgressPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one UserLessonProgress that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserLessonProgressFindUniqueOrThrowArgs} args - Arguments to find a UserLessonProgress
     * @example
     * // Get one UserLessonProgress
     * const userLessonProgress = await prisma.userLessonProgress.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserLessonProgressFindUniqueOrThrowArgs>(
      args: SelectSubset<T, UserLessonProgressFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__UserLessonProgressClient<
      $Result.GetResult<
        Prisma.$UserLessonProgressPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first UserLessonProgress that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLessonProgressFindFirstArgs} args - Arguments to find a UserLessonProgress
     * @example
     * // Get one UserLessonProgress
     * const userLessonProgress = await prisma.userLessonProgress.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserLessonProgressFindFirstArgs>(
      args?: SelectSubset<T, UserLessonProgressFindFirstArgs<ExtArgs>>,
    ): Prisma__UserLessonProgressClient<
      $Result.GetResult<
        Prisma.$UserLessonProgressPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first UserLessonProgress that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLessonProgressFindFirstOrThrowArgs} args - Arguments to find a UserLessonProgress
     * @example
     * // Get one UserLessonProgress
     * const userLessonProgress = await prisma.userLessonProgress.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserLessonProgressFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserLessonProgressFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__UserLessonProgressClient<
      $Result.GetResult<
        Prisma.$UserLessonProgressPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more UserLessonProgresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLessonProgressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserLessonProgresses
     * const userLessonProgresses = await prisma.userLessonProgress.findMany()
     *
     * // Get first 10 UserLessonProgresses
     * const userLessonProgresses = await prisma.userLessonProgress.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userLessonProgressWithIdOnly = await prisma.userLessonProgress.findMany({ select: { id: true } })
     *
     */
    findMany<T extends UserLessonProgressFindManyArgs>(
      args?: SelectSubset<T, UserLessonProgressFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserLessonProgressPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a UserLessonProgress.
     * @param {UserLessonProgressCreateArgs} args - Arguments to create a UserLessonProgress.
     * @example
     * // Create one UserLessonProgress
     * const UserLessonProgress = await prisma.userLessonProgress.create({
     *   data: {
     *     // ... data to create a UserLessonProgress
     *   }
     * })
     *
     */
    create<T extends UserLessonProgressCreateArgs>(
      args: SelectSubset<T, UserLessonProgressCreateArgs<ExtArgs>>,
    ): Prisma__UserLessonProgressClient<
      $Result.GetResult<
        Prisma.$UserLessonProgressPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many UserLessonProgresses.
     * @param {UserLessonProgressCreateManyArgs} args - Arguments to create many UserLessonProgresses.
     * @example
     * // Create many UserLessonProgresses
     * const userLessonProgress = await prisma.userLessonProgress.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends UserLessonProgressCreateManyArgs>(
      args?: SelectSubset<T, UserLessonProgressCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many UserLessonProgresses and returns the data saved in the database.
     * @param {UserLessonProgressCreateManyAndReturnArgs} args - Arguments to create many UserLessonProgresses.
     * @example
     * // Create many UserLessonProgresses
     * const userLessonProgress = await prisma.userLessonProgress.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many UserLessonProgresses and only return the `id`
     * const userLessonProgressWithIdOnly = await prisma.userLessonProgress.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends UserLessonProgressCreateManyAndReturnArgs>(
      args?: SelectSubset<
        T,
        UserLessonProgressCreateManyAndReturnArgs<ExtArgs>
      >,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserLessonProgressPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a UserLessonProgress.
     * @param {UserLessonProgressDeleteArgs} args - Arguments to delete one UserLessonProgress.
     * @example
     * // Delete one UserLessonProgress
     * const UserLessonProgress = await prisma.userLessonProgress.delete({
     *   where: {
     *     // ... filter to delete one UserLessonProgress
     *   }
     * })
     *
     */
    delete<T extends UserLessonProgressDeleteArgs>(
      args: SelectSubset<T, UserLessonProgressDeleteArgs<ExtArgs>>,
    ): Prisma__UserLessonProgressClient<
      $Result.GetResult<
        Prisma.$UserLessonProgressPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one UserLessonProgress.
     * @param {UserLessonProgressUpdateArgs} args - Arguments to update one UserLessonProgress.
     * @example
     * // Update one UserLessonProgress
     * const userLessonProgress = await prisma.userLessonProgress.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends UserLessonProgressUpdateArgs>(
      args: SelectSubset<T, UserLessonProgressUpdateArgs<ExtArgs>>,
    ): Prisma__UserLessonProgressClient<
      $Result.GetResult<
        Prisma.$UserLessonProgressPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more UserLessonProgresses.
     * @param {UserLessonProgressDeleteManyArgs} args - Arguments to filter UserLessonProgresses to delete.
     * @example
     * // Delete a few UserLessonProgresses
     * const { count } = await prisma.userLessonProgress.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends UserLessonProgressDeleteManyArgs>(
      args?: SelectSubset<T, UserLessonProgressDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more UserLessonProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLessonProgressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserLessonProgresses
     * const userLessonProgress = await prisma.userLessonProgress.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends UserLessonProgressUpdateManyArgs>(
      args: SelectSubset<T, UserLessonProgressUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more UserLessonProgresses and returns the data updated in the database.
     * @param {UserLessonProgressUpdateManyAndReturnArgs} args - Arguments to update many UserLessonProgresses.
     * @example
     * // Update many UserLessonProgresses
     * const userLessonProgress = await prisma.userLessonProgress.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more UserLessonProgresses and only return the `id`
     * const userLessonProgressWithIdOnly = await prisma.userLessonProgress.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends UserLessonProgressUpdateManyAndReturnArgs>(
      args: SelectSubset<T, UserLessonProgressUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserLessonProgressPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one UserLessonProgress.
     * @param {UserLessonProgressUpsertArgs} args - Arguments to update or create a UserLessonProgress.
     * @example
     * // Update or create a UserLessonProgress
     * const userLessonProgress = await prisma.userLessonProgress.upsert({
     *   create: {
     *     // ... data to create a UserLessonProgress
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserLessonProgress we want to update
     *   }
     * })
     */
    upsert<T extends UserLessonProgressUpsertArgs>(
      args: SelectSubset<T, UserLessonProgressUpsertArgs<ExtArgs>>,
    ): Prisma__UserLessonProgressClient<
      $Result.GetResult<
        Prisma.$UserLessonProgressPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of UserLessonProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLessonProgressCountArgs} args - Arguments to filter UserLessonProgresses to count.
     * @example
     * // Count the number of UserLessonProgresses
     * const count = await prisma.userLessonProgress.count({
     *   where: {
     *     // ... the filter for the UserLessonProgresses we want to count
     *   }
     * })
     **/
    count<T extends UserLessonProgressCountArgs>(
      args?: Subset<T, UserLessonProgressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<
              T['select'],
              UserLessonProgressCountAggregateOutputType
            >
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a UserLessonProgress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLessonProgressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends UserLessonProgressAggregateArgs>(
      args: Subset<T, UserLessonProgressAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserLessonProgressAggregateType<T>>;

    /**
     * Group by UserLessonProgress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLessonProgressGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends UserLessonProgressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserLessonProgressGroupByArgs['orderBy'] }
        : { orderBy?: UserLessonProgressGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, UserLessonProgressGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetUserLessonProgressGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the UserLessonProgress model
     */
    readonly fields: UserLessonProgressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserLessonProgress.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserLessonProgressClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    user<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>,
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    lesson<T extends LessonDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, LessonDefaultArgs<ExtArgs>>,
    ): Prisma__LessonClient<
      | $Result.GetResult<
          Prisma.$LessonPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the UserLessonProgress model
   */
  interface UserLessonProgressFieldRefs {
    readonly id: FieldRef<'UserLessonProgress', 'String'>;
    readonly userId: FieldRef<'UserLessonProgress', 'String'>;
    readonly lessonId: FieldRef<'UserLessonProgress', 'String'>;
    readonly status: FieldRef<'UserLessonProgress', 'String'>;
    readonly completedAt: FieldRef<'UserLessonProgress', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * UserLessonProgress findUnique
   */
  export type UserLessonProgressFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserLessonProgress
     */
    select?: UserLessonProgressSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserLessonProgress
     */
    omit?: UserLessonProgressOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLessonProgressInclude<ExtArgs> | null;
    /**
     * Filter, which UserLessonProgress to fetch.
     */
    where: UserLessonProgressWhereUniqueInput;
  };

  /**
   * UserLessonProgress findUniqueOrThrow
   */
  export type UserLessonProgressFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserLessonProgress
     */
    select?: UserLessonProgressSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserLessonProgress
     */
    omit?: UserLessonProgressOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLessonProgressInclude<ExtArgs> | null;
    /**
     * Filter, which UserLessonProgress to fetch.
     */
    where: UserLessonProgressWhereUniqueInput;
  };

  /**
   * UserLessonProgress findFirst
   */
  export type UserLessonProgressFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserLessonProgress
     */
    select?: UserLessonProgressSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserLessonProgress
     */
    omit?: UserLessonProgressOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLessonProgressInclude<ExtArgs> | null;
    /**
     * Filter, which UserLessonProgress to fetch.
     */
    where?: UserLessonProgressWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of UserLessonProgresses to fetch.
     */
    orderBy?:
      | UserLessonProgressOrderByWithRelationInput
      | UserLessonProgressOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for UserLessonProgresses.
     */
    cursor?: UserLessonProgressWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` UserLessonProgresses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` UserLessonProgresses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of UserLessonProgresses.
     */
    distinct?:
      | UserLessonProgressScalarFieldEnum
      | UserLessonProgressScalarFieldEnum[];
  };

  /**
   * UserLessonProgress findFirstOrThrow
   */
  export type UserLessonProgressFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserLessonProgress
     */
    select?: UserLessonProgressSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserLessonProgress
     */
    omit?: UserLessonProgressOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLessonProgressInclude<ExtArgs> | null;
    /**
     * Filter, which UserLessonProgress to fetch.
     */
    where?: UserLessonProgressWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of UserLessonProgresses to fetch.
     */
    orderBy?:
      | UserLessonProgressOrderByWithRelationInput
      | UserLessonProgressOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for UserLessonProgresses.
     */
    cursor?: UserLessonProgressWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` UserLessonProgresses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` UserLessonProgresses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of UserLessonProgresses.
     */
    distinct?:
      | UserLessonProgressScalarFieldEnum
      | UserLessonProgressScalarFieldEnum[];
  };

  /**
   * UserLessonProgress findMany
   */
  export type UserLessonProgressFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserLessonProgress
     */
    select?: UserLessonProgressSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserLessonProgress
     */
    omit?: UserLessonProgressOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLessonProgressInclude<ExtArgs> | null;
    /**
     * Filter, which UserLessonProgresses to fetch.
     */
    where?: UserLessonProgressWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of UserLessonProgresses to fetch.
     */
    orderBy?:
      | UserLessonProgressOrderByWithRelationInput
      | UserLessonProgressOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing UserLessonProgresses.
     */
    cursor?: UserLessonProgressWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` UserLessonProgresses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` UserLessonProgresses.
     */
    skip?: number;
    distinct?:
      | UserLessonProgressScalarFieldEnum
      | UserLessonProgressScalarFieldEnum[];
  };

  /**
   * UserLessonProgress create
   */
  export type UserLessonProgressCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserLessonProgress
     */
    select?: UserLessonProgressSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserLessonProgress
     */
    omit?: UserLessonProgressOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLessonProgressInclude<ExtArgs> | null;
    /**
     * The data needed to create a UserLessonProgress.
     */
    data: XOR<
      UserLessonProgressCreateInput,
      UserLessonProgressUncheckedCreateInput
    >;
  };

  /**
   * UserLessonProgress createMany
   */
  export type UserLessonProgressCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many UserLessonProgresses.
     */
    data:
      | UserLessonProgressCreateManyInput
      | UserLessonProgressCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * UserLessonProgress createManyAndReturn
   */
  export type UserLessonProgressCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserLessonProgress
     */
    select?: UserLessonProgressSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the UserLessonProgress
     */
    omit?: UserLessonProgressOmit<ExtArgs> | null;
    /**
     * The data used to create many UserLessonProgresses.
     */
    data:
      | UserLessonProgressCreateManyInput
      | UserLessonProgressCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLessonProgressIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * UserLessonProgress update
   */
  export type UserLessonProgressUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserLessonProgress
     */
    select?: UserLessonProgressSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserLessonProgress
     */
    omit?: UserLessonProgressOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLessonProgressInclude<ExtArgs> | null;
    /**
     * The data needed to update a UserLessonProgress.
     */
    data: XOR<
      UserLessonProgressUpdateInput,
      UserLessonProgressUncheckedUpdateInput
    >;
    /**
     * Choose, which UserLessonProgress to update.
     */
    where: UserLessonProgressWhereUniqueInput;
  };

  /**
   * UserLessonProgress updateMany
   */
  export type UserLessonProgressUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update UserLessonProgresses.
     */
    data: XOR<
      UserLessonProgressUpdateManyMutationInput,
      UserLessonProgressUncheckedUpdateManyInput
    >;
    /**
     * Filter which UserLessonProgresses to update
     */
    where?: UserLessonProgressWhereInput;
    /**
     * Limit how many UserLessonProgresses to update.
     */
    limit?: number;
  };

  /**
   * UserLessonProgress updateManyAndReturn
   */
  export type UserLessonProgressUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserLessonProgress
     */
    select?: UserLessonProgressSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the UserLessonProgress
     */
    omit?: UserLessonProgressOmit<ExtArgs> | null;
    /**
     * The data used to update UserLessonProgresses.
     */
    data: XOR<
      UserLessonProgressUpdateManyMutationInput,
      UserLessonProgressUncheckedUpdateManyInput
    >;
    /**
     * Filter which UserLessonProgresses to update
     */
    where?: UserLessonProgressWhereInput;
    /**
     * Limit how many UserLessonProgresses to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLessonProgressIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * UserLessonProgress upsert
   */
  export type UserLessonProgressUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserLessonProgress
     */
    select?: UserLessonProgressSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserLessonProgress
     */
    omit?: UserLessonProgressOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLessonProgressInclude<ExtArgs> | null;
    /**
     * The filter to search for the UserLessonProgress to update in case it exists.
     */
    where: UserLessonProgressWhereUniqueInput;
    /**
     * In case the UserLessonProgress found by the `where` argument doesn't exist, create a new UserLessonProgress with this data.
     */
    create: XOR<
      UserLessonProgressCreateInput,
      UserLessonProgressUncheckedCreateInput
    >;
    /**
     * In case the UserLessonProgress was found with the provided `where` argument, update it with this data.
     */
    update: XOR<
      UserLessonProgressUpdateInput,
      UserLessonProgressUncheckedUpdateInput
    >;
  };

  /**
   * UserLessonProgress delete
   */
  export type UserLessonProgressDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserLessonProgress
     */
    select?: UserLessonProgressSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserLessonProgress
     */
    omit?: UserLessonProgressOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLessonProgressInclude<ExtArgs> | null;
    /**
     * Filter which UserLessonProgress to delete.
     */
    where: UserLessonProgressWhereUniqueInput;
  };

  /**
   * UserLessonProgress deleteMany
   */
  export type UserLessonProgressDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which UserLessonProgresses to delete
     */
    where?: UserLessonProgressWhereInput;
    /**
     * Limit how many UserLessonProgresses to delete.
     */
    limit?: number;
  };

  /**
   * UserLessonProgress without action
   */
  export type UserLessonProgressDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserLessonProgress
     */
    select?: UserLessonProgressSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserLessonProgress
     */
    omit?: UserLessonProgressOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLessonProgressInclude<ExtArgs> | null;
  };

  /**
   * Model DailyActivityLog
   */

  export type AggregateDailyActivityLog = {
    _count: DailyActivityLogCountAggregateOutputType | null;
    _min: DailyActivityLogMinAggregateOutputType | null;
    _max: DailyActivityLogMaxAggregateOutputType | null;
  };

  export type DailyActivityLogMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    date: Date | null;
    activity: string | null;
  };

  export type DailyActivityLogMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    date: Date | null;
    activity: string | null;
  };

  export type DailyActivityLogCountAggregateOutputType = {
    id: number;
    userId: number;
    date: number;
    activity: number;
    _all: number;
  };

  export type DailyActivityLogMinAggregateInputType = {
    id?: true;
    userId?: true;
    date?: true;
    activity?: true;
  };

  export type DailyActivityLogMaxAggregateInputType = {
    id?: true;
    userId?: true;
    date?: true;
    activity?: true;
  };

  export type DailyActivityLogCountAggregateInputType = {
    id?: true;
    userId?: true;
    date?: true;
    activity?: true;
    _all?: true;
  };

  export type DailyActivityLogAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which DailyActivityLog to aggregate.
     */
    where?: DailyActivityLogWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of DailyActivityLogs to fetch.
     */
    orderBy?:
      | DailyActivityLogOrderByWithRelationInput
      | DailyActivityLogOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: DailyActivityLogWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` DailyActivityLogs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` DailyActivityLogs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned DailyActivityLogs
     **/
    _count?: true | DailyActivityLogCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: DailyActivityLogMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: DailyActivityLogMaxAggregateInputType;
  };

  export type GetDailyActivityLogAggregateType<
    T extends DailyActivityLogAggregateArgs,
  > = {
    [P in keyof T & keyof AggregateDailyActivityLog]: P extends
      | '_count'
      | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDailyActivityLog[P]>
      : GetScalarType<T[P], AggregateDailyActivityLog[P]>;
  };

  export type DailyActivityLogGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: DailyActivityLogWhereInput;
    orderBy?:
      | DailyActivityLogOrderByWithAggregationInput
      | DailyActivityLogOrderByWithAggregationInput[];
    by: DailyActivityLogScalarFieldEnum[] | DailyActivityLogScalarFieldEnum;
    having?: DailyActivityLogScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: DailyActivityLogCountAggregateInputType | true;
    _min?: DailyActivityLogMinAggregateInputType;
    _max?: DailyActivityLogMaxAggregateInputType;
  };

  export type DailyActivityLogGroupByOutputType = {
    id: string;
    userId: string;
    date: Date;
    activity: string;
    _count: DailyActivityLogCountAggregateOutputType | null;
    _min: DailyActivityLogMinAggregateOutputType | null;
    _max: DailyActivityLogMaxAggregateOutputType | null;
  };

  type GetDailyActivityLogGroupByPayload<
    T extends DailyActivityLogGroupByArgs,
  > = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DailyActivityLogGroupByOutputType, T['by']> & {
        [P in keyof T &
          keyof DailyActivityLogGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], DailyActivityLogGroupByOutputType[P]>
          : GetScalarType<T[P], DailyActivityLogGroupByOutputType[P]>;
      }
    >
  >;

  export type DailyActivityLogSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      date?: boolean;
      activity?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['dailyActivityLog']
  >;

  export type DailyActivityLogSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      date?: boolean;
      activity?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['dailyActivityLog']
  >;

  export type DailyActivityLogSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      date?: boolean;
      activity?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['dailyActivityLog']
  >;

  export type DailyActivityLogSelectScalar = {
    id?: boolean;
    userId?: boolean;
    date?: boolean;
    activity?: boolean;
  };

  export type DailyActivityLogOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'id' | 'userId' | 'date' | 'activity',
    ExtArgs['result']['dailyActivityLog']
  >;
  export type DailyActivityLogInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type DailyActivityLogIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type DailyActivityLogIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };

  export type $DailyActivityLogPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'DailyActivityLog';
    objects: {
      user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        userId: string;
        date: Date;
        activity: string;
      },
      ExtArgs['result']['dailyActivityLog']
    >;
    composites: {};
  };

  type DailyActivityLogGetPayload<
    S extends boolean | null | undefined | DailyActivityLogDefaultArgs,
  > = $Result.GetResult<Prisma.$DailyActivityLogPayload, S>;

  type DailyActivityLogCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    DailyActivityLogFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: DailyActivityLogCountAggregateInputType | true;
  };

  export interface DailyActivityLogDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['DailyActivityLog'];
      meta: { name: 'DailyActivityLog' };
    };
    /**
     * Find zero or one DailyActivityLog that matches the filter.
     * @param {DailyActivityLogFindUniqueArgs} args - Arguments to find a DailyActivityLog
     * @example
     * // Get one DailyActivityLog
     * const dailyActivityLog = await prisma.dailyActivityLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DailyActivityLogFindUniqueArgs>(
      args: SelectSubset<T, DailyActivityLogFindUniqueArgs<ExtArgs>>,
    ): Prisma__DailyActivityLogClient<
      $Result.GetResult<
        Prisma.$DailyActivityLogPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one DailyActivityLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DailyActivityLogFindUniqueOrThrowArgs} args - Arguments to find a DailyActivityLog
     * @example
     * // Get one DailyActivityLog
     * const dailyActivityLog = await prisma.dailyActivityLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DailyActivityLogFindUniqueOrThrowArgs>(
      args: SelectSubset<T, DailyActivityLogFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__DailyActivityLogClient<
      $Result.GetResult<
        Prisma.$DailyActivityLogPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first DailyActivityLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyActivityLogFindFirstArgs} args - Arguments to find a DailyActivityLog
     * @example
     * // Get one DailyActivityLog
     * const dailyActivityLog = await prisma.dailyActivityLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DailyActivityLogFindFirstArgs>(
      args?: SelectSubset<T, DailyActivityLogFindFirstArgs<ExtArgs>>,
    ): Prisma__DailyActivityLogClient<
      $Result.GetResult<
        Prisma.$DailyActivityLogPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first DailyActivityLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyActivityLogFindFirstOrThrowArgs} args - Arguments to find a DailyActivityLog
     * @example
     * // Get one DailyActivityLog
     * const dailyActivityLog = await prisma.dailyActivityLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DailyActivityLogFindFirstOrThrowArgs>(
      args?: SelectSubset<T, DailyActivityLogFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__DailyActivityLogClient<
      $Result.GetResult<
        Prisma.$DailyActivityLogPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more DailyActivityLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyActivityLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DailyActivityLogs
     * const dailyActivityLogs = await prisma.dailyActivityLog.findMany()
     *
     * // Get first 10 DailyActivityLogs
     * const dailyActivityLogs = await prisma.dailyActivityLog.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const dailyActivityLogWithIdOnly = await prisma.dailyActivityLog.findMany({ select: { id: true } })
     *
     */
    findMany<T extends DailyActivityLogFindManyArgs>(
      args?: SelectSubset<T, DailyActivityLogFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$DailyActivityLogPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a DailyActivityLog.
     * @param {DailyActivityLogCreateArgs} args - Arguments to create a DailyActivityLog.
     * @example
     * // Create one DailyActivityLog
     * const DailyActivityLog = await prisma.dailyActivityLog.create({
     *   data: {
     *     // ... data to create a DailyActivityLog
     *   }
     * })
     *
     */
    create<T extends DailyActivityLogCreateArgs>(
      args: SelectSubset<T, DailyActivityLogCreateArgs<ExtArgs>>,
    ): Prisma__DailyActivityLogClient<
      $Result.GetResult<
        Prisma.$DailyActivityLogPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many DailyActivityLogs.
     * @param {DailyActivityLogCreateManyArgs} args - Arguments to create many DailyActivityLogs.
     * @example
     * // Create many DailyActivityLogs
     * const dailyActivityLog = await prisma.dailyActivityLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends DailyActivityLogCreateManyArgs>(
      args?: SelectSubset<T, DailyActivityLogCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many DailyActivityLogs and returns the data saved in the database.
     * @param {DailyActivityLogCreateManyAndReturnArgs} args - Arguments to create many DailyActivityLogs.
     * @example
     * // Create many DailyActivityLogs
     * const dailyActivityLog = await prisma.dailyActivityLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many DailyActivityLogs and only return the `id`
     * const dailyActivityLogWithIdOnly = await prisma.dailyActivityLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends DailyActivityLogCreateManyAndReturnArgs>(
      args?: SelectSubset<T, DailyActivityLogCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$DailyActivityLogPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a DailyActivityLog.
     * @param {DailyActivityLogDeleteArgs} args - Arguments to delete one DailyActivityLog.
     * @example
     * // Delete one DailyActivityLog
     * const DailyActivityLog = await prisma.dailyActivityLog.delete({
     *   where: {
     *     // ... filter to delete one DailyActivityLog
     *   }
     * })
     *
     */
    delete<T extends DailyActivityLogDeleteArgs>(
      args: SelectSubset<T, DailyActivityLogDeleteArgs<ExtArgs>>,
    ): Prisma__DailyActivityLogClient<
      $Result.GetResult<
        Prisma.$DailyActivityLogPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one DailyActivityLog.
     * @param {DailyActivityLogUpdateArgs} args - Arguments to update one DailyActivityLog.
     * @example
     * // Update one DailyActivityLog
     * const dailyActivityLog = await prisma.dailyActivityLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends DailyActivityLogUpdateArgs>(
      args: SelectSubset<T, DailyActivityLogUpdateArgs<ExtArgs>>,
    ): Prisma__DailyActivityLogClient<
      $Result.GetResult<
        Prisma.$DailyActivityLogPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more DailyActivityLogs.
     * @param {DailyActivityLogDeleteManyArgs} args - Arguments to filter DailyActivityLogs to delete.
     * @example
     * // Delete a few DailyActivityLogs
     * const { count } = await prisma.dailyActivityLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends DailyActivityLogDeleteManyArgs>(
      args?: SelectSubset<T, DailyActivityLogDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more DailyActivityLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyActivityLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DailyActivityLogs
     * const dailyActivityLog = await prisma.dailyActivityLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends DailyActivityLogUpdateManyArgs>(
      args: SelectSubset<T, DailyActivityLogUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more DailyActivityLogs and returns the data updated in the database.
     * @param {DailyActivityLogUpdateManyAndReturnArgs} args - Arguments to update many DailyActivityLogs.
     * @example
     * // Update many DailyActivityLogs
     * const dailyActivityLog = await prisma.dailyActivityLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more DailyActivityLogs and only return the `id`
     * const dailyActivityLogWithIdOnly = await prisma.dailyActivityLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends DailyActivityLogUpdateManyAndReturnArgs>(
      args: SelectSubset<T, DailyActivityLogUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$DailyActivityLogPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one DailyActivityLog.
     * @param {DailyActivityLogUpsertArgs} args - Arguments to update or create a DailyActivityLog.
     * @example
     * // Update or create a DailyActivityLog
     * const dailyActivityLog = await prisma.dailyActivityLog.upsert({
     *   create: {
     *     // ... data to create a DailyActivityLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DailyActivityLog we want to update
     *   }
     * })
     */
    upsert<T extends DailyActivityLogUpsertArgs>(
      args: SelectSubset<T, DailyActivityLogUpsertArgs<ExtArgs>>,
    ): Prisma__DailyActivityLogClient<
      $Result.GetResult<
        Prisma.$DailyActivityLogPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of DailyActivityLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyActivityLogCountArgs} args - Arguments to filter DailyActivityLogs to count.
     * @example
     * // Count the number of DailyActivityLogs
     * const count = await prisma.dailyActivityLog.count({
     *   where: {
     *     // ... the filter for the DailyActivityLogs we want to count
     *   }
     * })
     **/
    count<T extends DailyActivityLogCountArgs>(
      args?: Subset<T, DailyActivityLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DailyActivityLogCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a DailyActivityLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyActivityLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends DailyActivityLogAggregateArgs>(
      args: Subset<T, DailyActivityLogAggregateArgs>,
    ): Prisma.PrismaPromise<GetDailyActivityLogAggregateType<T>>;

    /**
     * Group by DailyActivityLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyActivityLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends DailyActivityLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DailyActivityLogGroupByArgs['orderBy'] }
        : { orderBy?: DailyActivityLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, DailyActivityLogGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetDailyActivityLogGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the DailyActivityLog model
     */
    readonly fields: DailyActivityLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DailyActivityLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DailyActivityLogClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    user<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>,
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the DailyActivityLog model
   */
  interface DailyActivityLogFieldRefs {
    readonly id: FieldRef<'DailyActivityLog', 'String'>;
    readonly userId: FieldRef<'DailyActivityLog', 'String'>;
    readonly date: FieldRef<'DailyActivityLog', 'DateTime'>;
    readonly activity: FieldRef<'DailyActivityLog', 'String'>;
  }

  // Custom InputTypes
  /**
   * DailyActivityLog findUnique
   */
  export type DailyActivityLogFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the DailyActivityLog
     */
    select?: DailyActivityLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DailyActivityLog
     */
    omit?: DailyActivityLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyActivityLogInclude<ExtArgs> | null;
    /**
     * Filter, which DailyActivityLog to fetch.
     */
    where: DailyActivityLogWhereUniqueInput;
  };

  /**
   * DailyActivityLog findUniqueOrThrow
   */
  export type DailyActivityLogFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the DailyActivityLog
     */
    select?: DailyActivityLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DailyActivityLog
     */
    omit?: DailyActivityLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyActivityLogInclude<ExtArgs> | null;
    /**
     * Filter, which DailyActivityLog to fetch.
     */
    where: DailyActivityLogWhereUniqueInput;
  };

  /**
   * DailyActivityLog findFirst
   */
  export type DailyActivityLogFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the DailyActivityLog
     */
    select?: DailyActivityLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DailyActivityLog
     */
    omit?: DailyActivityLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyActivityLogInclude<ExtArgs> | null;
    /**
     * Filter, which DailyActivityLog to fetch.
     */
    where?: DailyActivityLogWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of DailyActivityLogs to fetch.
     */
    orderBy?:
      | DailyActivityLogOrderByWithRelationInput
      | DailyActivityLogOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for DailyActivityLogs.
     */
    cursor?: DailyActivityLogWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` DailyActivityLogs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` DailyActivityLogs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of DailyActivityLogs.
     */
    distinct?:
      | DailyActivityLogScalarFieldEnum
      | DailyActivityLogScalarFieldEnum[];
  };

  /**
   * DailyActivityLog findFirstOrThrow
   */
  export type DailyActivityLogFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the DailyActivityLog
     */
    select?: DailyActivityLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DailyActivityLog
     */
    omit?: DailyActivityLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyActivityLogInclude<ExtArgs> | null;
    /**
     * Filter, which DailyActivityLog to fetch.
     */
    where?: DailyActivityLogWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of DailyActivityLogs to fetch.
     */
    orderBy?:
      | DailyActivityLogOrderByWithRelationInput
      | DailyActivityLogOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for DailyActivityLogs.
     */
    cursor?: DailyActivityLogWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` DailyActivityLogs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` DailyActivityLogs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of DailyActivityLogs.
     */
    distinct?:
      | DailyActivityLogScalarFieldEnum
      | DailyActivityLogScalarFieldEnum[];
  };

  /**
   * DailyActivityLog findMany
   */
  export type DailyActivityLogFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the DailyActivityLog
     */
    select?: DailyActivityLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DailyActivityLog
     */
    omit?: DailyActivityLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyActivityLogInclude<ExtArgs> | null;
    /**
     * Filter, which DailyActivityLogs to fetch.
     */
    where?: DailyActivityLogWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of DailyActivityLogs to fetch.
     */
    orderBy?:
      | DailyActivityLogOrderByWithRelationInput
      | DailyActivityLogOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing DailyActivityLogs.
     */
    cursor?: DailyActivityLogWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` DailyActivityLogs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` DailyActivityLogs.
     */
    skip?: number;
    distinct?:
      | DailyActivityLogScalarFieldEnum
      | DailyActivityLogScalarFieldEnum[];
  };

  /**
   * DailyActivityLog create
   */
  export type DailyActivityLogCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the DailyActivityLog
     */
    select?: DailyActivityLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DailyActivityLog
     */
    omit?: DailyActivityLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyActivityLogInclude<ExtArgs> | null;
    /**
     * The data needed to create a DailyActivityLog.
     */
    data: XOR<
      DailyActivityLogCreateInput,
      DailyActivityLogUncheckedCreateInput
    >;
  };

  /**
   * DailyActivityLog createMany
   */
  export type DailyActivityLogCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many DailyActivityLogs.
     */
    data: DailyActivityLogCreateManyInput | DailyActivityLogCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * DailyActivityLog createManyAndReturn
   */
  export type DailyActivityLogCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the DailyActivityLog
     */
    select?: DailyActivityLogSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the DailyActivityLog
     */
    omit?: DailyActivityLogOmit<ExtArgs> | null;
    /**
     * The data used to create many DailyActivityLogs.
     */
    data: DailyActivityLogCreateManyInput | DailyActivityLogCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyActivityLogIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * DailyActivityLog update
   */
  export type DailyActivityLogUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the DailyActivityLog
     */
    select?: DailyActivityLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DailyActivityLog
     */
    omit?: DailyActivityLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyActivityLogInclude<ExtArgs> | null;
    /**
     * The data needed to update a DailyActivityLog.
     */
    data: XOR<
      DailyActivityLogUpdateInput,
      DailyActivityLogUncheckedUpdateInput
    >;
    /**
     * Choose, which DailyActivityLog to update.
     */
    where: DailyActivityLogWhereUniqueInput;
  };

  /**
   * DailyActivityLog updateMany
   */
  export type DailyActivityLogUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update DailyActivityLogs.
     */
    data: XOR<
      DailyActivityLogUpdateManyMutationInput,
      DailyActivityLogUncheckedUpdateManyInput
    >;
    /**
     * Filter which DailyActivityLogs to update
     */
    where?: DailyActivityLogWhereInput;
    /**
     * Limit how many DailyActivityLogs to update.
     */
    limit?: number;
  };

  /**
   * DailyActivityLog updateManyAndReturn
   */
  export type DailyActivityLogUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the DailyActivityLog
     */
    select?: DailyActivityLogSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the DailyActivityLog
     */
    omit?: DailyActivityLogOmit<ExtArgs> | null;
    /**
     * The data used to update DailyActivityLogs.
     */
    data: XOR<
      DailyActivityLogUpdateManyMutationInput,
      DailyActivityLogUncheckedUpdateManyInput
    >;
    /**
     * Filter which DailyActivityLogs to update
     */
    where?: DailyActivityLogWhereInput;
    /**
     * Limit how many DailyActivityLogs to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyActivityLogIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * DailyActivityLog upsert
   */
  export type DailyActivityLogUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the DailyActivityLog
     */
    select?: DailyActivityLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DailyActivityLog
     */
    omit?: DailyActivityLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyActivityLogInclude<ExtArgs> | null;
    /**
     * The filter to search for the DailyActivityLog to update in case it exists.
     */
    where: DailyActivityLogWhereUniqueInput;
    /**
     * In case the DailyActivityLog found by the `where` argument doesn't exist, create a new DailyActivityLog with this data.
     */
    create: XOR<
      DailyActivityLogCreateInput,
      DailyActivityLogUncheckedCreateInput
    >;
    /**
     * In case the DailyActivityLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<
      DailyActivityLogUpdateInput,
      DailyActivityLogUncheckedUpdateInput
    >;
  };

  /**
   * DailyActivityLog delete
   */
  export type DailyActivityLogDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the DailyActivityLog
     */
    select?: DailyActivityLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DailyActivityLog
     */
    omit?: DailyActivityLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyActivityLogInclude<ExtArgs> | null;
    /**
     * Filter which DailyActivityLog to delete.
     */
    where: DailyActivityLogWhereUniqueInput;
  };

  /**
   * DailyActivityLog deleteMany
   */
  export type DailyActivityLogDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which DailyActivityLogs to delete
     */
    where?: DailyActivityLogWhereInput;
    /**
     * Limit how many DailyActivityLogs to delete.
     */
    limit?: number;
  };

  /**
   * DailyActivityLog without action
   */
  export type DailyActivityLogDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the DailyActivityLog
     */
    select?: DailyActivityLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DailyActivityLog
     */
    omit?: DailyActivityLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyActivityLogInclude<ExtArgs> | null;
  };

  /**
   * Model QuizResult
   */

  export type AggregateQuizResult = {
    _count: QuizResultCountAggregateOutputType | null;
    _avg: QuizResultAvgAggregateOutputType | null;
    _sum: QuizResultSumAggregateOutputType | null;
    _min: QuizResultMinAggregateOutputType | null;
    _max: QuizResultMaxAggregateOutputType | null;
  };

  export type QuizResultAvgAggregateOutputType = {
    score: number | null;
    total: number | null;
  };

  export type QuizResultSumAggregateOutputType = {
    score: number | null;
    total: number | null;
  };

  export type QuizResultMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    score: number | null;
    total: number | null;
    passedAt: Date | null;
  };

  export type QuizResultMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    score: number | null;
    total: number | null;
    passedAt: Date | null;
  };

  export type QuizResultCountAggregateOutputType = {
    id: number;
    userId: number;
    score: number;
    total: number;
    passedAt: number;
    _all: number;
  };

  export type QuizResultAvgAggregateInputType = {
    score?: true;
    total?: true;
  };

  export type QuizResultSumAggregateInputType = {
    score?: true;
    total?: true;
  };

  export type QuizResultMinAggregateInputType = {
    id?: true;
    userId?: true;
    score?: true;
    total?: true;
    passedAt?: true;
  };

  export type QuizResultMaxAggregateInputType = {
    id?: true;
    userId?: true;
    score?: true;
    total?: true;
    passedAt?: true;
  };

  export type QuizResultCountAggregateInputType = {
    id?: true;
    userId?: true;
    score?: true;
    total?: true;
    passedAt?: true;
    _all?: true;
  };

  export type QuizResultAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which QuizResult to aggregate.
     */
    where?: QuizResultWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of QuizResults to fetch.
     */
    orderBy?:
      | QuizResultOrderByWithRelationInput
      | QuizResultOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: QuizResultWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` QuizResults from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` QuizResults.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned QuizResults
     **/
    _count?: true | QuizResultCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: QuizResultAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: QuizResultSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: QuizResultMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: QuizResultMaxAggregateInputType;
  };

  export type GetQuizResultAggregateType<T extends QuizResultAggregateArgs> = {
    [P in keyof T & keyof AggregateQuizResult]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuizResult[P]>
      : GetScalarType<T[P], AggregateQuizResult[P]>;
  };

  export type QuizResultGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: QuizResultWhereInput;
    orderBy?:
      | QuizResultOrderByWithAggregationInput
      | QuizResultOrderByWithAggregationInput[];
    by: QuizResultScalarFieldEnum[] | QuizResultScalarFieldEnum;
    having?: QuizResultScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: QuizResultCountAggregateInputType | true;
    _avg?: QuizResultAvgAggregateInputType;
    _sum?: QuizResultSumAggregateInputType;
    _min?: QuizResultMinAggregateInputType;
    _max?: QuizResultMaxAggregateInputType;
  };

  export type QuizResultGroupByOutputType = {
    id: string;
    userId: string;
    score: number;
    total: number;
    passedAt: Date;
    _count: QuizResultCountAggregateOutputType | null;
    _avg: QuizResultAvgAggregateOutputType | null;
    _sum: QuizResultSumAggregateOutputType | null;
    _min: QuizResultMinAggregateOutputType | null;
    _max: QuizResultMaxAggregateOutputType | null;
  };

  type GetQuizResultGroupByPayload<T extends QuizResultGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<QuizResultGroupByOutputType, T['by']> & {
          [P in keyof T & keyof QuizResultGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuizResultGroupByOutputType[P]>
            : GetScalarType<T[P], QuizResultGroupByOutputType[P]>;
        }
      >
    >;

  export type QuizResultSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      score?: boolean;
      total?: boolean;
      passedAt?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['quizResult']
  >;

  export type QuizResultSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      score?: boolean;
      total?: boolean;
      passedAt?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['quizResult']
  >;

  export type QuizResultSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      score?: boolean;
      total?: boolean;
      passedAt?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['quizResult']
  >;

  export type QuizResultSelectScalar = {
    id?: boolean;
    userId?: boolean;
    score?: boolean;
    total?: boolean;
    passedAt?: boolean;
  };

  export type QuizResultOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'id' | 'userId' | 'score' | 'total' | 'passedAt',
    ExtArgs['result']['quizResult']
  >;
  export type QuizResultInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type QuizResultIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type QuizResultIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };

  export type $QuizResultPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'QuizResult';
    objects: {
      user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        userId: string;
        score: number;
        total: number;
        passedAt: Date;
      },
      ExtArgs['result']['quizResult']
    >;
    composites: {};
  };

  type QuizResultGetPayload<
    S extends boolean | null | undefined | QuizResultDefaultArgs,
  > = $Result.GetResult<Prisma.$QuizResultPayload, S>;

  type QuizResultCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    QuizResultFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: QuizResultCountAggregateInputType | true;
  };

  export interface QuizResultDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['QuizResult'];
      meta: { name: 'QuizResult' };
    };
    /**
     * Find zero or one QuizResult that matches the filter.
     * @param {QuizResultFindUniqueArgs} args - Arguments to find a QuizResult
     * @example
     * // Get one QuizResult
     * const quizResult = await prisma.quizResult.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuizResultFindUniqueArgs>(
      args: SelectSubset<T, QuizResultFindUniqueArgs<ExtArgs>>,
    ): Prisma__QuizResultClient<
      $Result.GetResult<
        Prisma.$QuizResultPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one QuizResult that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuizResultFindUniqueOrThrowArgs} args - Arguments to find a QuizResult
     * @example
     * // Get one QuizResult
     * const quizResult = await prisma.quizResult.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuizResultFindUniqueOrThrowArgs>(
      args: SelectSubset<T, QuizResultFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__QuizResultClient<
      $Result.GetResult<
        Prisma.$QuizResultPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first QuizResult that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizResultFindFirstArgs} args - Arguments to find a QuizResult
     * @example
     * // Get one QuizResult
     * const quizResult = await prisma.quizResult.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuizResultFindFirstArgs>(
      args?: SelectSubset<T, QuizResultFindFirstArgs<ExtArgs>>,
    ): Prisma__QuizResultClient<
      $Result.GetResult<
        Prisma.$QuizResultPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first QuizResult that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizResultFindFirstOrThrowArgs} args - Arguments to find a QuizResult
     * @example
     * // Get one QuizResult
     * const quizResult = await prisma.quizResult.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuizResultFindFirstOrThrowArgs>(
      args?: SelectSubset<T, QuizResultFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__QuizResultClient<
      $Result.GetResult<
        Prisma.$QuizResultPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more QuizResults that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizResultFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QuizResults
     * const quizResults = await prisma.quizResult.findMany()
     *
     * // Get first 10 QuizResults
     * const quizResults = await prisma.quizResult.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const quizResultWithIdOnly = await prisma.quizResult.findMany({ select: { id: true } })
     *
     */
    findMany<T extends QuizResultFindManyArgs>(
      args?: SelectSubset<T, QuizResultFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$QuizResultPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a QuizResult.
     * @param {QuizResultCreateArgs} args - Arguments to create a QuizResult.
     * @example
     * // Create one QuizResult
     * const QuizResult = await prisma.quizResult.create({
     *   data: {
     *     // ... data to create a QuizResult
     *   }
     * })
     *
     */
    create<T extends QuizResultCreateArgs>(
      args: SelectSubset<T, QuizResultCreateArgs<ExtArgs>>,
    ): Prisma__QuizResultClient<
      $Result.GetResult<
        Prisma.$QuizResultPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many QuizResults.
     * @param {QuizResultCreateManyArgs} args - Arguments to create many QuizResults.
     * @example
     * // Create many QuizResults
     * const quizResult = await prisma.quizResult.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends QuizResultCreateManyArgs>(
      args?: SelectSubset<T, QuizResultCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many QuizResults and returns the data saved in the database.
     * @param {QuizResultCreateManyAndReturnArgs} args - Arguments to create many QuizResults.
     * @example
     * // Create many QuizResults
     * const quizResult = await prisma.quizResult.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many QuizResults and only return the `id`
     * const quizResultWithIdOnly = await prisma.quizResult.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends QuizResultCreateManyAndReturnArgs>(
      args?: SelectSubset<T, QuizResultCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$QuizResultPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a QuizResult.
     * @param {QuizResultDeleteArgs} args - Arguments to delete one QuizResult.
     * @example
     * // Delete one QuizResult
     * const QuizResult = await prisma.quizResult.delete({
     *   where: {
     *     // ... filter to delete one QuizResult
     *   }
     * })
     *
     */
    delete<T extends QuizResultDeleteArgs>(
      args: SelectSubset<T, QuizResultDeleteArgs<ExtArgs>>,
    ): Prisma__QuizResultClient<
      $Result.GetResult<
        Prisma.$QuizResultPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one QuizResult.
     * @param {QuizResultUpdateArgs} args - Arguments to update one QuizResult.
     * @example
     * // Update one QuizResult
     * const quizResult = await prisma.quizResult.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends QuizResultUpdateArgs>(
      args: SelectSubset<T, QuizResultUpdateArgs<ExtArgs>>,
    ): Prisma__QuizResultClient<
      $Result.GetResult<
        Prisma.$QuizResultPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more QuizResults.
     * @param {QuizResultDeleteManyArgs} args - Arguments to filter QuizResults to delete.
     * @example
     * // Delete a few QuizResults
     * const { count } = await prisma.quizResult.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends QuizResultDeleteManyArgs>(
      args?: SelectSubset<T, QuizResultDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more QuizResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizResultUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QuizResults
     * const quizResult = await prisma.quizResult.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends QuizResultUpdateManyArgs>(
      args: SelectSubset<T, QuizResultUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more QuizResults and returns the data updated in the database.
     * @param {QuizResultUpdateManyAndReturnArgs} args - Arguments to update many QuizResults.
     * @example
     * // Update many QuizResults
     * const quizResult = await prisma.quizResult.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more QuizResults and only return the `id`
     * const quizResultWithIdOnly = await prisma.quizResult.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends QuizResultUpdateManyAndReturnArgs>(
      args: SelectSubset<T, QuizResultUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$QuizResultPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one QuizResult.
     * @param {QuizResultUpsertArgs} args - Arguments to update or create a QuizResult.
     * @example
     * // Update or create a QuizResult
     * const quizResult = await prisma.quizResult.upsert({
     *   create: {
     *     // ... data to create a QuizResult
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QuizResult we want to update
     *   }
     * })
     */
    upsert<T extends QuizResultUpsertArgs>(
      args: SelectSubset<T, QuizResultUpsertArgs<ExtArgs>>,
    ): Prisma__QuizResultClient<
      $Result.GetResult<
        Prisma.$QuizResultPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of QuizResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizResultCountArgs} args - Arguments to filter QuizResults to count.
     * @example
     * // Count the number of QuizResults
     * const count = await prisma.quizResult.count({
     *   where: {
     *     // ... the filter for the QuizResults we want to count
     *   }
     * })
     **/
    count<T extends QuizResultCountArgs>(
      args?: Subset<T, QuizResultCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuizResultCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a QuizResult.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizResultAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends QuizResultAggregateArgs>(
      args: Subset<T, QuizResultAggregateArgs>,
    ): Prisma.PrismaPromise<GetQuizResultAggregateType<T>>;

    /**
     * Group by QuizResult.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizResultGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends QuizResultGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuizResultGroupByArgs['orderBy'] }
        : { orderBy?: QuizResultGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, QuizResultGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetQuizResultGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the QuizResult model
     */
    readonly fields: QuizResultFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for QuizResult.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuizResultClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    user<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>,
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the QuizResult model
   */
  interface QuizResultFieldRefs {
    readonly id: FieldRef<'QuizResult', 'String'>;
    readonly userId: FieldRef<'QuizResult', 'String'>;
    readonly score: FieldRef<'QuizResult', 'Int'>;
    readonly total: FieldRef<'QuizResult', 'Int'>;
    readonly passedAt: FieldRef<'QuizResult', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * QuizResult findUnique
   */
  export type QuizResultFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the QuizResult
     */
    select?: QuizResultSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the QuizResult
     */
    omit?: QuizResultOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizResultInclude<ExtArgs> | null;
    /**
     * Filter, which QuizResult to fetch.
     */
    where: QuizResultWhereUniqueInput;
  };

  /**
   * QuizResult findUniqueOrThrow
   */
  export type QuizResultFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the QuizResult
     */
    select?: QuizResultSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the QuizResult
     */
    omit?: QuizResultOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizResultInclude<ExtArgs> | null;
    /**
     * Filter, which QuizResult to fetch.
     */
    where: QuizResultWhereUniqueInput;
  };

  /**
   * QuizResult findFirst
   */
  export type QuizResultFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the QuizResult
     */
    select?: QuizResultSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the QuizResult
     */
    omit?: QuizResultOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizResultInclude<ExtArgs> | null;
    /**
     * Filter, which QuizResult to fetch.
     */
    where?: QuizResultWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of QuizResults to fetch.
     */
    orderBy?:
      | QuizResultOrderByWithRelationInput
      | QuizResultOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for QuizResults.
     */
    cursor?: QuizResultWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` QuizResults from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` QuizResults.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of QuizResults.
     */
    distinct?: QuizResultScalarFieldEnum | QuizResultScalarFieldEnum[];
  };

  /**
   * QuizResult findFirstOrThrow
   */
  export type QuizResultFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the QuizResult
     */
    select?: QuizResultSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the QuizResult
     */
    omit?: QuizResultOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizResultInclude<ExtArgs> | null;
    /**
     * Filter, which QuizResult to fetch.
     */
    where?: QuizResultWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of QuizResults to fetch.
     */
    orderBy?:
      | QuizResultOrderByWithRelationInput
      | QuizResultOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for QuizResults.
     */
    cursor?: QuizResultWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` QuizResults from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` QuizResults.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of QuizResults.
     */
    distinct?: QuizResultScalarFieldEnum | QuizResultScalarFieldEnum[];
  };

  /**
   * QuizResult findMany
   */
  export type QuizResultFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the QuizResult
     */
    select?: QuizResultSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the QuizResult
     */
    omit?: QuizResultOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizResultInclude<ExtArgs> | null;
    /**
     * Filter, which QuizResults to fetch.
     */
    where?: QuizResultWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of QuizResults to fetch.
     */
    orderBy?:
      | QuizResultOrderByWithRelationInput
      | QuizResultOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing QuizResults.
     */
    cursor?: QuizResultWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` QuizResults from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` QuizResults.
     */
    skip?: number;
    distinct?: QuizResultScalarFieldEnum | QuizResultScalarFieldEnum[];
  };

  /**
   * QuizResult create
   */
  export type QuizResultCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the QuizResult
     */
    select?: QuizResultSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the QuizResult
     */
    omit?: QuizResultOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizResultInclude<ExtArgs> | null;
    /**
     * The data needed to create a QuizResult.
     */
    data: XOR<QuizResultCreateInput, QuizResultUncheckedCreateInput>;
  };

  /**
   * QuizResult createMany
   */
  export type QuizResultCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many QuizResults.
     */
    data: QuizResultCreateManyInput | QuizResultCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * QuizResult createManyAndReturn
   */
  export type QuizResultCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the QuizResult
     */
    select?: QuizResultSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the QuizResult
     */
    omit?: QuizResultOmit<ExtArgs> | null;
    /**
     * The data used to create many QuizResults.
     */
    data: QuizResultCreateManyInput | QuizResultCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizResultIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * QuizResult update
   */
  export type QuizResultUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the QuizResult
     */
    select?: QuizResultSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the QuizResult
     */
    omit?: QuizResultOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizResultInclude<ExtArgs> | null;
    /**
     * The data needed to update a QuizResult.
     */
    data: XOR<QuizResultUpdateInput, QuizResultUncheckedUpdateInput>;
    /**
     * Choose, which QuizResult to update.
     */
    where: QuizResultWhereUniqueInput;
  };

  /**
   * QuizResult updateMany
   */
  export type QuizResultUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update QuizResults.
     */
    data: XOR<
      QuizResultUpdateManyMutationInput,
      QuizResultUncheckedUpdateManyInput
    >;
    /**
     * Filter which QuizResults to update
     */
    where?: QuizResultWhereInput;
    /**
     * Limit how many QuizResults to update.
     */
    limit?: number;
  };

  /**
   * QuizResult updateManyAndReturn
   */
  export type QuizResultUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the QuizResult
     */
    select?: QuizResultSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the QuizResult
     */
    omit?: QuizResultOmit<ExtArgs> | null;
    /**
     * The data used to update QuizResults.
     */
    data: XOR<
      QuizResultUpdateManyMutationInput,
      QuizResultUncheckedUpdateManyInput
    >;
    /**
     * Filter which QuizResults to update
     */
    where?: QuizResultWhereInput;
    /**
     * Limit how many QuizResults to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizResultIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * QuizResult upsert
   */
  export type QuizResultUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the QuizResult
     */
    select?: QuizResultSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the QuizResult
     */
    omit?: QuizResultOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizResultInclude<ExtArgs> | null;
    /**
     * The filter to search for the QuizResult to update in case it exists.
     */
    where: QuizResultWhereUniqueInput;
    /**
     * In case the QuizResult found by the `where` argument doesn't exist, create a new QuizResult with this data.
     */
    create: XOR<QuizResultCreateInput, QuizResultUncheckedCreateInput>;
    /**
     * In case the QuizResult was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuizResultUpdateInput, QuizResultUncheckedUpdateInput>;
  };

  /**
   * QuizResult delete
   */
  export type QuizResultDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the QuizResult
     */
    select?: QuizResultSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the QuizResult
     */
    omit?: QuizResultOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizResultInclude<ExtArgs> | null;
    /**
     * Filter which QuizResult to delete.
     */
    where: QuizResultWhereUniqueInput;
  };

  /**
   * QuizResult deleteMany
   */
  export type QuizResultDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which QuizResults to delete
     */
    where?: QuizResultWhereInput;
    /**
     * Limit how many QuizResults to delete.
     */
    limit?: number;
  };

  /**
   * QuizResult without action
   */
  export type QuizResultDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the QuizResult
     */
    select?: QuizResultSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the QuizResult
     */
    omit?: QuizResultOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizResultInclude<ExtArgs> | null;
  };

  /**
   * Model LeaderboardEntry
   */

  export type AggregateLeaderboardEntry = {
    _count: LeaderboardEntryCountAggregateOutputType | null;
    _avg: LeaderboardEntryAvgAggregateOutputType | null;
    _sum: LeaderboardEntrySumAggregateOutputType | null;
    _min: LeaderboardEntryMinAggregateOutputType | null;
    _max: LeaderboardEntryMaxAggregateOutputType | null;
  };

  export type LeaderboardEntryAvgAggregateOutputType = {
    xp: number | null;
    rank: number | null;
  };

  export type LeaderboardEntrySumAggregateOutputType = {
    xp: number | null;
    rank: number | null;
  };

  export type LeaderboardEntryMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    xp: number | null;
    rank: number | null;
    snapshotDate: Date | null;
  };

  export type LeaderboardEntryMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    xp: number | null;
    rank: number | null;
    snapshotDate: Date | null;
  };

  export type LeaderboardEntryCountAggregateOutputType = {
    id: number;
    userId: number;
    xp: number;
    rank: number;
    snapshotDate: number;
    _all: number;
  };

  export type LeaderboardEntryAvgAggregateInputType = {
    xp?: true;
    rank?: true;
  };

  export type LeaderboardEntrySumAggregateInputType = {
    xp?: true;
    rank?: true;
  };

  export type LeaderboardEntryMinAggregateInputType = {
    id?: true;
    userId?: true;
    xp?: true;
    rank?: true;
    snapshotDate?: true;
  };

  export type LeaderboardEntryMaxAggregateInputType = {
    id?: true;
    userId?: true;
    xp?: true;
    rank?: true;
    snapshotDate?: true;
  };

  export type LeaderboardEntryCountAggregateInputType = {
    id?: true;
    userId?: true;
    xp?: true;
    rank?: true;
    snapshotDate?: true;
    _all?: true;
  };

  export type LeaderboardEntryAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which LeaderboardEntry to aggregate.
     */
    where?: LeaderboardEntryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of LeaderboardEntries to fetch.
     */
    orderBy?:
      | LeaderboardEntryOrderByWithRelationInput
      | LeaderboardEntryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: LeaderboardEntryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` LeaderboardEntries from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` LeaderboardEntries.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned LeaderboardEntries
     **/
    _count?: true | LeaderboardEntryCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: LeaderboardEntryAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: LeaderboardEntrySumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: LeaderboardEntryMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: LeaderboardEntryMaxAggregateInputType;
  };

  export type GetLeaderboardEntryAggregateType<
    T extends LeaderboardEntryAggregateArgs,
  > = {
    [P in keyof T & keyof AggregateLeaderboardEntry]: P extends
      | '_count'
      | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLeaderboardEntry[P]>
      : GetScalarType<T[P], AggregateLeaderboardEntry[P]>;
  };

  export type LeaderboardEntryGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: LeaderboardEntryWhereInput;
    orderBy?:
      | LeaderboardEntryOrderByWithAggregationInput
      | LeaderboardEntryOrderByWithAggregationInput[];
    by: LeaderboardEntryScalarFieldEnum[] | LeaderboardEntryScalarFieldEnum;
    having?: LeaderboardEntryScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: LeaderboardEntryCountAggregateInputType | true;
    _avg?: LeaderboardEntryAvgAggregateInputType;
    _sum?: LeaderboardEntrySumAggregateInputType;
    _min?: LeaderboardEntryMinAggregateInputType;
    _max?: LeaderboardEntryMaxAggregateInputType;
  };

  export type LeaderboardEntryGroupByOutputType = {
    id: string;
    userId: string;
    xp: number;
    rank: number;
    snapshotDate: Date;
    _count: LeaderboardEntryCountAggregateOutputType | null;
    _avg: LeaderboardEntryAvgAggregateOutputType | null;
    _sum: LeaderboardEntrySumAggregateOutputType | null;
    _min: LeaderboardEntryMinAggregateOutputType | null;
    _max: LeaderboardEntryMaxAggregateOutputType | null;
  };

  type GetLeaderboardEntryGroupByPayload<
    T extends LeaderboardEntryGroupByArgs,
  > = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LeaderboardEntryGroupByOutputType, T['by']> & {
        [P in keyof T &
          keyof LeaderboardEntryGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], LeaderboardEntryGroupByOutputType[P]>
          : GetScalarType<T[P], LeaderboardEntryGroupByOutputType[P]>;
      }
    >
  >;

  export type LeaderboardEntrySelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      xp?: boolean;
      rank?: boolean;
      snapshotDate?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['leaderboardEntry']
  >;

  export type LeaderboardEntrySelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      xp?: boolean;
      rank?: boolean;
      snapshotDate?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['leaderboardEntry']
  >;

  export type LeaderboardEntrySelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      xp?: boolean;
      rank?: boolean;
      snapshotDate?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['leaderboardEntry']
  >;

  export type LeaderboardEntrySelectScalar = {
    id?: boolean;
    userId?: boolean;
    xp?: boolean;
    rank?: boolean;
    snapshotDate?: boolean;
  };

  export type LeaderboardEntryOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'id' | 'userId' | 'xp' | 'rank' | 'snapshotDate',
    ExtArgs['result']['leaderboardEntry']
  >;
  export type LeaderboardEntryInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type LeaderboardEntryIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type LeaderboardEntryIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };

  export type $LeaderboardEntryPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'LeaderboardEntry';
    objects: {
      user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        userId: string;
        xp: number;
        rank: number;
        snapshotDate: Date;
      },
      ExtArgs['result']['leaderboardEntry']
    >;
    composites: {};
  };

  type LeaderboardEntryGetPayload<
    S extends boolean | null | undefined | LeaderboardEntryDefaultArgs,
  > = $Result.GetResult<Prisma.$LeaderboardEntryPayload, S>;

  type LeaderboardEntryCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    LeaderboardEntryFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: LeaderboardEntryCountAggregateInputType | true;
  };

  export interface LeaderboardEntryDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['LeaderboardEntry'];
      meta: { name: 'LeaderboardEntry' };
    };
    /**
     * Find zero or one LeaderboardEntry that matches the filter.
     * @param {LeaderboardEntryFindUniqueArgs} args - Arguments to find a LeaderboardEntry
     * @example
     * // Get one LeaderboardEntry
     * const leaderboardEntry = await prisma.leaderboardEntry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LeaderboardEntryFindUniqueArgs>(
      args: SelectSubset<T, LeaderboardEntryFindUniqueArgs<ExtArgs>>,
    ): Prisma__LeaderboardEntryClient<
      $Result.GetResult<
        Prisma.$LeaderboardEntryPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one LeaderboardEntry that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LeaderboardEntryFindUniqueOrThrowArgs} args - Arguments to find a LeaderboardEntry
     * @example
     * // Get one LeaderboardEntry
     * const leaderboardEntry = await prisma.leaderboardEntry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LeaderboardEntryFindUniqueOrThrowArgs>(
      args: SelectSubset<T, LeaderboardEntryFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__LeaderboardEntryClient<
      $Result.GetResult<
        Prisma.$LeaderboardEntryPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first LeaderboardEntry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaderboardEntryFindFirstArgs} args - Arguments to find a LeaderboardEntry
     * @example
     * // Get one LeaderboardEntry
     * const leaderboardEntry = await prisma.leaderboardEntry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LeaderboardEntryFindFirstArgs>(
      args?: SelectSubset<T, LeaderboardEntryFindFirstArgs<ExtArgs>>,
    ): Prisma__LeaderboardEntryClient<
      $Result.GetResult<
        Prisma.$LeaderboardEntryPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first LeaderboardEntry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaderboardEntryFindFirstOrThrowArgs} args - Arguments to find a LeaderboardEntry
     * @example
     * // Get one LeaderboardEntry
     * const leaderboardEntry = await prisma.leaderboardEntry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LeaderboardEntryFindFirstOrThrowArgs>(
      args?: SelectSubset<T, LeaderboardEntryFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__LeaderboardEntryClient<
      $Result.GetResult<
        Prisma.$LeaderboardEntryPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more LeaderboardEntries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaderboardEntryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LeaderboardEntries
     * const leaderboardEntries = await prisma.leaderboardEntry.findMany()
     *
     * // Get first 10 LeaderboardEntries
     * const leaderboardEntries = await prisma.leaderboardEntry.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const leaderboardEntryWithIdOnly = await prisma.leaderboardEntry.findMany({ select: { id: true } })
     *
     */
    findMany<T extends LeaderboardEntryFindManyArgs>(
      args?: SelectSubset<T, LeaderboardEntryFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$LeaderboardEntryPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a LeaderboardEntry.
     * @param {LeaderboardEntryCreateArgs} args - Arguments to create a LeaderboardEntry.
     * @example
     * // Create one LeaderboardEntry
     * const LeaderboardEntry = await prisma.leaderboardEntry.create({
     *   data: {
     *     // ... data to create a LeaderboardEntry
     *   }
     * })
     *
     */
    create<T extends LeaderboardEntryCreateArgs>(
      args: SelectSubset<T, LeaderboardEntryCreateArgs<ExtArgs>>,
    ): Prisma__LeaderboardEntryClient<
      $Result.GetResult<
        Prisma.$LeaderboardEntryPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many LeaderboardEntries.
     * @param {LeaderboardEntryCreateManyArgs} args - Arguments to create many LeaderboardEntries.
     * @example
     * // Create many LeaderboardEntries
     * const leaderboardEntry = await prisma.leaderboardEntry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends LeaderboardEntryCreateManyArgs>(
      args?: SelectSubset<T, LeaderboardEntryCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many LeaderboardEntries and returns the data saved in the database.
     * @param {LeaderboardEntryCreateManyAndReturnArgs} args - Arguments to create many LeaderboardEntries.
     * @example
     * // Create many LeaderboardEntries
     * const leaderboardEntry = await prisma.leaderboardEntry.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many LeaderboardEntries and only return the `id`
     * const leaderboardEntryWithIdOnly = await prisma.leaderboardEntry.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends LeaderboardEntryCreateManyAndReturnArgs>(
      args?: SelectSubset<T, LeaderboardEntryCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$LeaderboardEntryPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a LeaderboardEntry.
     * @param {LeaderboardEntryDeleteArgs} args - Arguments to delete one LeaderboardEntry.
     * @example
     * // Delete one LeaderboardEntry
     * const LeaderboardEntry = await prisma.leaderboardEntry.delete({
     *   where: {
     *     // ... filter to delete one LeaderboardEntry
     *   }
     * })
     *
     */
    delete<T extends LeaderboardEntryDeleteArgs>(
      args: SelectSubset<T, LeaderboardEntryDeleteArgs<ExtArgs>>,
    ): Prisma__LeaderboardEntryClient<
      $Result.GetResult<
        Prisma.$LeaderboardEntryPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one LeaderboardEntry.
     * @param {LeaderboardEntryUpdateArgs} args - Arguments to update one LeaderboardEntry.
     * @example
     * // Update one LeaderboardEntry
     * const leaderboardEntry = await prisma.leaderboardEntry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends LeaderboardEntryUpdateArgs>(
      args: SelectSubset<T, LeaderboardEntryUpdateArgs<ExtArgs>>,
    ): Prisma__LeaderboardEntryClient<
      $Result.GetResult<
        Prisma.$LeaderboardEntryPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more LeaderboardEntries.
     * @param {LeaderboardEntryDeleteManyArgs} args - Arguments to filter LeaderboardEntries to delete.
     * @example
     * // Delete a few LeaderboardEntries
     * const { count } = await prisma.leaderboardEntry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends LeaderboardEntryDeleteManyArgs>(
      args?: SelectSubset<T, LeaderboardEntryDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more LeaderboardEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaderboardEntryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LeaderboardEntries
     * const leaderboardEntry = await prisma.leaderboardEntry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends LeaderboardEntryUpdateManyArgs>(
      args: SelectSubset<T, LeaderboardEntryUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more LeaderboardEntries and returns the data updated in the database.
     * @param {LeaderboardEntryUpdateManyAndReturnArgs} args - Arguments to update many LeaderboardEntries.
     * @example
     * // Update many LeaderboardEntries
     * const leaderboardEntry = await prisma.leaderboardEntry.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more LeaderboardEntries and only return the `id`
     * const leaderboardEntryWithIdOnly = await prisma.leaderboardEntry.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends LeaderboardEntryUpdateManyAndReturnArgs>(
      args: SelectSubset<T, LeaderboardEntryUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$LeaderboardEntryPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one LeaderboardEntry.
     * @param {LeaderboardEntryUpsertArgs} args - Arguments to update or create a LeaderboardEntry.
     * @example
     * // Update or create a LeaderboardEntry
     * const leaderboardEntry = await prisma.leaderboardEntry.upsert({
     *   create: {
     *     // ... data to create a LeaderboardEntry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LeaderboardEntry we want to update
     *   }
     * })
     */
    upsert<T extends LeaderboardEntryUpsertArgs>(
      args: SelectSubset<T, LeaderboardEntryUpsertArgs<ExtArgs>>,
    ): Prisma__LeaderboardEntryClient<
      $Result.GetResult<
        Prisma.$LeaderboardEntryPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of LeaderboardEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaderboardEntryCountArgs} args - Arguments to filter LeaderboardEntries to count.
     * @example
     * // Count the number of LeaderboardEntries
     * const count = await prisma.leaderboardEntry.count({
     *   where: {
     *     // ... the filter for the LeaderboardEntries we want to count
     *   }
     * })
     **/
    count<T extends LeaderboardEntryCountArgs>(
      args?: Subset<T, LeaderboardEntryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LeaderboardEntryCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a LeaderboardEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaderboardEntryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends LeaderboardEntryAggregateArgs>(
      args: Subset<T, LeaderboardEntryAggregateArgs>,
    ): Prisma.PrismaPromise<GetLeaderboardEntryAggregateType<T>>;

    /**
     * Group by LeaderboardEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaderboardEntryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends LeaderboardEntryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LeaderboardEntryGroupByArgs['orderBy'] }
        : { orderBy?: LeaderboardEntryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, LeaderboardEntryGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetLeaderboardEntryGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the LeaderboardEntry model
     */
    readonly fields: LeaderboardEntryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LeaderboardEntry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LeaderboardEntryClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    user<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>,
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the LeaderboardEntry model
   */
  interface LeaderboardEntryFieldRefs {
    readonly id: FieldRef<'LeaderboardEntry', 'String'>;
    readonly userId: FieldRef<'LeaderboardEntry', 'String'>;
    readonly xp: FieldRef<'LeaderboardEntry', 'Int'>;
    readonly rank: FieldRef<'LeaderboardEntry', 'Int'>;
    readonly snapshotDate: FieldRef<'LeaderboardEntry', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * LeaderboardEntry findUnique
   */
  export type LeaderboardEntryFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the LeaderboardEntry
     */
    select?: LeaderboardEntrySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LeaderboardEntry
     */
    omit?: LeaderboardEntryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaderboardEntryInclude<ExtArgs> | null;
    /**
     * Filter, which LeaderboardEntry to fetch.
     */
    where: LeaderboardEntryWhereUniqueInput;
  };

  /**
   * LeaderboardEntry findUniqueOrThrow
   */
  export type LeaderboardEntryFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the LeaderboardEntry
     */
    select?: LeaderboardEntrySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LeaderboardEntry
     */
    omit?: LeaderboardEntryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaderboardEntryInclude<ExtArgs> | null;
    /**
     * Filter, which LeaderboardEntry to fetch.
     */
    where: LeaderboardEntryWhereUniqueInput;
  };

  /**
   * LeaderboardEntry findFirst
   */
  export type LeaderboardEntryFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the LeaderboardEntry
     */
    select?: LeaderboardEntrySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LeaderboardEntry
     */
    omit?: LeaderboardEntryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaderboardEntryInclude<ExtArgs> | null;
    /**
     * Filter, which LeaderboardEntry to fetch.
     */
    where?: LeaderboardEntryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of LeaderboardEntries to fetch.
     */
    orderBy?:
      | LeaderboardEntryOrderByWithRelationInput
      | LeaderboardEntryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for LeaderboardEntries.
     */
    cursor?: LeaderboardEntryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` LeaderboardEntries from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` LeaderboardEntries.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of LeaderboardEntries.
     */
    distinct?:
      | LeaderboardEntryScalarFieldEnum
      | LeaderboardEntryScalarFieldEnum[];
  };

  /**
   * LeaderboardEntry findFirstOrThrow
   */
  export type LeaderboardEntryFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the LeaderboardEntry
     */
    select?: LeaderboardEntrySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LeaderboardEntry
     */
    omit?: LeaderboardEntryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaderboardEntryInclude<ExtArgs> | null;
    /**
     * Filter, which LeaderboardEntry to fetch.
     */
    where?: LeaderboardEntryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of LeaderboardEntries to fetch.
     */
    orderBy?:
      | LeaderboardEntryOrderByWithRelationInput
      | LeaderboardEntryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for LeaderboardEntries.
     */
    cursor?: LeaderboardEntryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` LeaderboardEntries from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` LeaderboardEntries.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of LeaderboardEntries.
     */
    distinct?:
      | LeaderboardEntryScalarFieldEnum
      | LeaderboardEntryScalarFieldEnum[];
  };

  /**
   * LeaderboardEntry findMany
   */
  export type LeaderboardEntryFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the LeaderboardEntry
     */
    select?: LeaderboardEntrySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LeaderboardEntry
     */
    omit?: LeaderboardEntryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaderboardEntryInclude<ExtArgs> | null;
    /**
     * Filter, which LeaderboardEntries to fetch.
     */
    where?: LeaderboardEntryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of LeaderboardEntries to fetch.
     */
    orderBy?:
      | LeaderboardEntryOrderByWithRelationInput
      | LeaderboardEntryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing LeaderboardEntries.
     */
    cursor?: LeaderboardEntryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` LeaderboardEntries from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` LeaderboardEntries.
     */
    skip?: number;
    distinct?:
      | LeaderboardEntryScalarFieldEnum
      | LeaderboardEntryScalarFieldEnum[];
  };

  /**
   * LeaderboardEntry create
   */
  export type LeaderboardEntryCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the LeaderboardEntry
     */
    select?: LeaderboardEntrySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LeaderboardEntry
     */
    omit?: LeaderboardEntryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaderboardEntryInclude<ExtArgs> | null;
    /**
     * The data needed to create a LeaderboardEntry.
     */
    data: XOR<
      LeaderboardEntryCreateInput,
      LeaderboardEntryUncheckedCreateInput
    >;
  };

  /**
   * LeaderboardEntry createMany
   */
  export type LeaderboardEntryCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many LeaderboardEntries.
     */
    data: LeaderboardEntryCreateManyInput | LeaderboardEntryCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * LeaderboardEntry createManyAndReturn
   */
  export type LeaderboardEntryCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the LeaderboardEntry
     */
    select?: LeaderboardEntrySelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the LeaderboardEntry
     */
    omit?: LeaderboardEntryOmit<ExtArgs> | null;
    /**
     * The data used to create many LeaderboardEntries.
     */
    data: LeaderboardEntryCreateManyInput | LeaderboardEntryCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaderboardEntryIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * LeaderboardEntry update
   */
  export type LeaderboardEntryUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the LeaderboardEntry
     */
    select?: LeaderboardEntrySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LeaderboardEntry
     */
    omit?: LeaderboardEntryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaderboardEntryInclude<ExtArgs> | null;
    /**
     * The data needed to update a LeaderboardEntry.
     */
    data: XOR<
      LeaderboardEntryUpdateInput,
      LeaderboardEntryUncheckedUpdateInput
    >;
    /**
     * Choose, which LeaderboardEntry to update.
     */
    where: LeaderboardEntryWhereUniqueInput;
  };

  /**
   * LeaderboardEntry updateMany
   */
  export type LeaderboardEntryUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update LeaderboardEntries.
     */
    data: XOR<
      LeaderboardEntryUpdateManyMutationInput,
      LeaderboardEntryUncheckedUpdateManyInput
    >;
    /**
     * Filter which LeaderboardEntries to update
     */
    where?: LeaderboardEntryWhereInput;
    /**
     * Limit how many LeaderboardEntries to update.
     */
    limit?: number;
  };

  /**
   * LeaderboardEntry updateManyAndReturn
   */
  export type LeaderboardEntryUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the LeaderboardEntry
     */
    select?: LeaderboardEntrySelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the LeaderboardEntry
     */
    omit?: LeaderboardEntryOmit<ExtArgs> | null;
    /**
     * The data used to update LeaderboardEntries.
     */
    data: XOR<
      LeaderboardEntryUpdateManyMutationInput,
      LeaderboardEntryUncheckedUpdateManyInput
    >;
    /**
     * Filter which LeaderboardEntries to update
     */
    where?: LeaderboardEntryWhereInput;
    /**
     * Limit how many LeaderboardEntries to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaderboardEntryIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * LeaderboardEntry upsert
   */
  export type LeaderboardEntryUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the LeaderboardEntry
     */
    select?: LeaderboardEntrySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LeaderboardEntry
     */
    omit?: LeaderboardEntryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaderboardEntryInclude<ExtArgs> | null;
    /**
     * The filter to search for the LeaderboardEntry to update in case it exists.
     */
    where: LeaderboardEntryWhereUniqueInput;
    /**
     * In case the LeaderboardEntry found by the `where` argument doesn't exist, create a new LeaderboardEntry with this data.
     */
    create: XOR<
      LeaderboardEntryCreateInput,
      LeaderboardEntryUncheckedCreateInput
    >;
    /**
     * In case the LeaderboardEntry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<
      LeaderboardEntryUpdateInput,
      LeaderboardEntryUncheckedUpdateInput
    >;
  };

  /**
   * LeaderboardEntry delete
   */
  export type LeaderboardEntryDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the LeaderboardEntry
     */
    select?: LeaderboardEntrySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LeaderboardEntry
     */
    omit?: LeaderboardEntryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaderboardEntryInclude<ExtArgs> | null;
    /**
     * Filter which LeaderboardEntry to delete.
     */
    where: LeaderboardEntryWhereUniqueInput;
  };

  /**
   * LeaderboardEntry deleteMany
   */
  export type LeaderboardEntryDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which LeaderboardEntries to delete
     */
    where?: LeaderboardEntryWhereInput;
    /**
     * Limit how many LeaderboardEntries to delete.
     */
    limit?: number;
  };

  /**
   * LeaderboardEntry without action
   */
  export type LeaderboardEntryDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the LeaderboardEntry
     */
    select?: LeaderboardEntrySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LeaderboardEntry
     */
    omit?: LeaderboardEntryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaderboardEntryInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel =
    (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const UserScalarFieldEnum: {
    id: 'id';
    firstName: 'firstName';
    lastName: 'lastName';
    role: 'role';
    status: 'status';
    email: 'email';
    passwordHash: 'passwordHash';
    isApprovedByAdmin: 'isApprovedByAdmin';
    createdAt: 'createdAt';
    updatedAt: 'updatedAt';
    teamId: 'teamId';
  };

  export type UserScalarFieldEnum =
    (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const UserProgressScalarFieldEnum: {
    id: 'id';
    userId: 'userId';
    xp: 'xp';
    level: 'level';
    streak: 'streak';
    accuracy: 'accuracy';
    createdAt: 'createdAt';
    updatedAt: 'updatedAt';
  };

  export type UserProgressScalarFieldEnum =
    (typeof UserProgressScalarFieldEnum)[keyof typeof UserProgressScalarFieldEnum];

  export const AchievementScalarFieldEnum: {
    id: 'id';
    code: 'code';
    name: 'name';
    description: 'description';
    icon: 'icon';
  };

  export type AchievementScalarFieldEnum =
    (typeof AchievementScalarFieldEnum)[keyof typeof AchievementScalarFieldEnum];

  export const UserAchievementScalarFieldEnum: {
    id: 'id';
    userId: 'userId';
    achievementId: 'achievementId';
    achievedAt: 'achievedAt';
  };

  export type UserAchievementScalarFieldEnum =
    (typeof UserAchievementScalarFieldEnum)[keyof typeof UserAchievementScalarFieldEnum];

  export const TeamScalarFieldEnum: {
    id: 'id';
    name: 'name';
    createdAt: 'createdAt';
  };

  export type TeamScalarFieldEnum =
    (typeof TeamScalarFieldEnum)[keyof typeof TeamScalarFieldEnum];

  export const TeamBattleResultScalarFieldEnum: {
    id: 'id';
    teamId: 'teamId';
    score: 'score';
    date: 'date';
    position: 'position';
  };

  export type TeamBattleResultScalarFieldEnum =
    (typeof TeamBattleResultScalarFieldEnum)[keyof typeof TeamBattleResultScalarFieldEnum];

  export const LessonScalarFieldEnum: {
    id: 'id';
    title: 'title';
    topic: 'topic';
    content: 'content';
    durationMin: 'durationMin';
    createdAt: 'createdAt';
  };

  export type LessonScalarFieldEnum =
    (typeof LessonScalarFieldEnum)[keyof typeof LessonScalarFieldEnum];

  export const UserLessonProgressScalarFieldEnum: {
    id: 'id';
    userId: 'userId';
    lessonId: 'lessonId';
    status: 'status';
    completedAt: 'completedAt';
  };

  export type UserLessonProgressScalarFieldEnum =
    (typeof UserLessonProgressScalarFieldEnum)[keyof typeof UserLessonProgressScalarFieldEnum];

  export const DailyActivityLogScalarFieldEnum: {
    id: 'id';
    userId: 'userId';
    date: 'date';
    activity: 'activity';
  };

  export type DailyActivityLogScalarFieldEnum =
    (typeof DailyActivityLogScalarFieldEnum)[keyof typeof DailyActivityLogScalarFieldEnum];

  export const QuizResultScalarFieldEnum: {
    id: 'id';
    userId: 'userId';
    score: 'score';
    total: 'total';
    passedAt: 'passedAt';
  };

  export type QuizResultScalarFieldEnum =
    (typeof QuizResultScalarFieldEnum)[keyof typeof QuizResultScalarFieldEnum];

  export const LeaderboardEntryScalarFieldEnum: {
    id: 'id';
    userId: 'userId';
    xp: 'xp';
    rank: 'rank';
    snapshotDate: 'snapshotDate';
  };

  export type LeaderboardEntryScalarFieldEnum =
    (typeof LeaderboardEntryScalarFieldEnum)[keyof typeof LeaderboardEntryScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: 'first';
    last: 'last';
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'String'
  >;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'String[]'
  >;

  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Boolean'
  >;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'DateTime'
  >;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'DateTime[]'
  >;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Int'
  >;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Int[]'
  >;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Float'
  >;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Float[]'
  >;

  /**
   * Deep Input Types
   */

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[];
    OR?: UserWhereInput[];
    NOT?: UserWhereInput | UserWhereInput[];
    id?: StringFilter<'User'> | string;
    firstName?: StringFilter<'User'> | string;
    lastName?: StringFilter<'User'> | string;
    role?: StringFilter<'User'> | string;
    status?: StringFilter<'User'> | string;
    email?: StringFilter<'User'> | string;
    passwordHash?: StringFilter<'User'> | string;
    isApprovedByAdmin?: BoolFilter<'User'> | boolean;
    createdAt?: DateTimeFilter<'User'> | Date | string;
    updatedAt?: DateTimeFilter<'User'> | Date | string;
    teamId?: StringNullableFilter<'User'> | string | null;
    progress?: XOR<
      UserProgressNullableScalarRelationFilter,
      UserProgressWhereInput
    > | null;
    achievements?: UserAchievementListRelationFilter;
    lessonProgress?: UserLessonProgressListRelationFilter;
    activityLogs?: DailyActivityLogListRelationFilter;
    quizResults?: QuizResultListRelationFilter;
    leaderboardEntries?: LeaderboardEntryListRelationFilter;
    team?: XOR<TeamNullableScalarRelationFilter, TeamWhereInput> | null;
  };

  export type UserOrderByWithRelationInput = {
    id?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    role?: SortOrder;
    status?: SortOrder;
    email?: SortOrder;
    passwordHash?: SortOrder;
    isApprovedByAdmin?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    teamId?: SortOrderInput | SortOrder;
    progress?: UserProgressOrderByWithRelationInput;
    achievements?: UserAchievementOrderByRelationAggregateInput;
    lessonProgress?: UserLessonProgressOrderByRelationAggregateInput;
    activityLogs?: DailyActivityLogOrderByRelationAggregateInput;
    quizResults?: QuizResultOrderByRelationAggregateInput;
    leaderboardEntries?: LeaderboardEntryOrderByRelationAggregateInput;
    team?: TeamOrderByWithRelationInput;
  };

  export type UserWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      email?: string;
      AND?: UserWhereInput | UserWhereInput[];
      OR?: UserWhereInput[];
      NOT?: UserWhereInput | UserWhereInput[];
      firstName?: StringFilter<'User'> | string;
      lastName?: StringFilter<'User'> | string;
      role?: StringFilter<'User'> | string;
      status?: StringFilter<'User'> | string;
      passwordHash?: StringFilter<'User'> | string;
      isApprovedByAdmin?: BoolFilter<'User'> | boolean;
      createdAt?: DateTimeFilter<'User'> | Date | string;
      updatedAt?: DateTimeFilter<'User'> | Date | string;
      teamId?: StringNullableFilter<'User'> | string | null;
      progress?: XOR<
        UserProgressNullableScalarRelationFilter,
        UserProgressWhereInput
      > | null;
      achievements?: UserAchievementListRelationFilter;
      lessonProgress?: UserLessonProgressListRelationFilter;
      activityLogs?: DailyActivityLogListRelationFilter;
      quizResults?: QuizResultListRelationFilter;
      leaderboardEntries?: LeaderboardEntryListRelationFilter;
      team?: XOR<TeamNullableScalarRelationFilter, TeamWhereInput> | null;
    },
    'id' | 'email'
  >;

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    role?: SortOrder;
    status?: SortOrder;
    email?: SortOrder;
    passwordHash?: SortOrder;
    isApprovedByAdmin?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    teamId?: SortOrderInput | SortOrder;
    _count?: UserCountOrderByAggregateInput;
    _max?: UserMaxOrderByAggregateInput;
    _min?: UserMinOrderByAggregateInput;
  };

  export type UserScalarWhereWithAggregatesInput = {
    AND?:
      | UserScalarWhereWithAggregatesInput
      | UserScalarWhereWithAggregatesInput[];
    OR?: UserScalarWhereWithAggregatesInput[];
    NOT?:
      | UserScalarWhereWithAggregatesInput
      | UserScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'User'> | string;
    firstName?: StringWithAggregatesFilter<'User'> | string;
    lastName?: StringWithAggregatesFilter<'User'> | string;
    role?: StringWithAggregatesFilter<'User'> | string;
    status?: StringWithAggregatesFilter<'User'> | string;
    email?: StringWithAggregatesFilter<'User'> | string;
    passwordHash?: StringWithAggregatesFilter<'User'> | string;
    isApprovedByAdmin?: BoolWithAggregatesFilter<'User'> | boolean;
    createdAt?: DateTimeWithAggregatesFilter<'User'> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<'User'> | Date | string;
    teamId?: StringNullableWithAggregatesFilter<'User'> | string | null;
  };

  export type UserProgressWhereInput = {
    AND?: UserProgressWhereInput | UserProgressWhereInput[];
    OR?: UserProgressWhereInput[];
    NOT?: UserProgressWhereInput | UserProgressWhereInput[];
    id?: StringFilter<'UserProgress'> | string;
    userId?: StringFilter<'UserProgress'> | string;
    xp?: IntFilter<'UserProgress'> | number;
    level?: IntFilter<'UserProgress'> | number;
    streak?: IntFilter<'UserProgress'> | number;
    accuracy?: FloatNullableFilter<'UserProgress'> | number | null;
    createdAt?: DateTimeFilter<'UserProgress'> | Date | string;
    updatedAt?: DateTimeFilter<'UserProgress'> | Date | string;
    user?: XOR<UserScalarRelationFilter, UserWhereInput>;
  };

  export type UserProgressOrderByWithRelationInput = {
    id?: SortOrder;
    userId?: SortOrder;
    xp?: SortOrder;
    level?: SortOrder;
    streak?: SortOrder;
    accuracy?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    user?: UserOrderByWithRelationInput;
  };

  export type UserProgressWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      userId?: string;
      AND?: UserProgressWhereInput | UserProgressWhereInput[];
      OR?: UserProgressWhereInput[];
      NOT?: UserProgressWhereInput | UserProgressWhereInput[];
      xp?: IntFilter<'UserProgress'> | number;
      level?: IntFilter<'UserProgress'> | number;
      streak?: IntFilter<'UserProgress'> | number;
      accuracy?: FloatNullableFilter<'UserProgress'> | number | null;
      createdAt?: DateTimeFilter<'UserProgress'> | Date | string;
      updatedAt?: DateTimeFilter<'UserProgress'> | Date | string;
      user?: XOR<UserScalarRelationFilter, UserWhereInput>;
    },
    'id' | 'userId'
  >;

  export type UserProgressOrderByWithAggregationInput = {
    id?: SortOrder;
    userId?: SortOrder;
    xp?: SortOrder;
    level?: SortOrder;
    streak?: SortOrder;
    accuracy?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: UserProgressCountOrderByAggregateInput;
    _avg?: UserProgressAvgOrderByAggregateInput;
    _max?: UserProgressMaxOrderByAggregateInput;
    _min?: UserProgressMinOrderByAggregateInput;
    _sum?: UserProgressSumOrderByAggregateInput;
  };

  export type UserProgressScalarWhereWithAggregatesInput = {
    AND?:
      | UserProgressScalarWhereWithAggregatesInput
      | UserProgressScalarWhereWithAggregatesInput[];
    OR?: UserProgressScalarWhereWithAggregatesInput[];
    NOT?:
      | UserProgressScalarWhereWithAggregatesInput
      | UserProgressScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'UserProgress'> | string;
    userId?: StringWithAggregatesFilter<'UserProgress'> | string;
    xp?: IntWithAggregatesFilter<'UserProgress'> | number;
    level?: IntWithAggregatesFilter<'UserProgress'> | number;
    streak?: IntWithAggregatesFilter<'UserProgress'> | number;
    accuracy?:
      | FloatNullableWithAggregatesFilter<'UserProgress'>
      | number
      | null;
    createdAt?: DateTimeWithAggregatesFilter<'UserProgress'> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<'UserProgress'> | Date | string;
  };

  export type AchievementWhereInput = {
    AND?: AchievementWhereInput | AchievementWhereInput[];
    OR?: AchievementWhereInput[];
    NOT?: AchievementWhereInput | AchievementWhereInput[];
    id?: StringFilter<'Achievement'> | string;
    code?: StringFilter<'Achievement'> | string;
    name?: StringFilter<'Achievement'> | string;
    description?: StringFilter<'Achievement'> | string;
    icon?: StringFilter<'Achievement'> | string;
    users?: UserAchievementListRelationFilter;
  };

  export type AchievementOrderByWithRelationInput = {
    id?: SortOrder;
    code?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    icon?: SortOrder;
    users?: UserAchievementOrderByRelationAggregateInput;
  };

  export type AchievementWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      code?: string;
      AND?: AchievementWhereInput | AchievementWhereInput[];
      OR?: AchievementWhereInput[];
      NOT?: AchievementWhereInput | AchievementWhereInput[];
      name?: StringFilter<'Achievement'> | string;
      description?: StringFilter<'Achievement'> | string;
      icon?: StringFilter<'Achievement'> | string;
      users?: UserAchievementListRelationFilter;
    },
    'id' | 'code'
  >;

  export type AchievementOrderByWithAggregationInput = {
    id?: SortOrder;
    code?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    icon?: SortOrder;
    _count?: AchievementCountOrderByAggregateInput;
    _max?: AchievementMaxOrderByAggregateInput;
    _min?: AchievementMinOrderByAggregateInput;
  };

  export type AchievementScalarWhereWithAggregatesInput = {
    AND?:
      | AchievementScalarWhereWithAggregatesInput
      | AchievementScalarWhereWithAggregatesInput[];
    OR?: AchievementScalarWhereWithAggregatesInput[];
    NOT?:
      | AchievementScalarWhereWithAggregatesInput
      | AchievementScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'Achievement'> | string;
    code?: StringWithAggregatesFilter<'Achievement'> | string;
    name?: StringWithAggregatesFilter<'Achievement'> | string;
    description?: StringWithAggregatesFilter<'Achievement'> | string;
    icon?: StringWithAggregatesFilter<'Achievement'> | string;
  };

  export type UserAchievementWhereInput = {
    AND?: UserAchievementWhereInput | UserAchievementWhereInput[];
    OR?: UserAchievementWhereInput[];
    NOT?: UserAchievementWhereInput | UserAchievementWhereInput[];
    id?: StringFilter<'UserAchievement'> | string;
    userId?: StringFilter<'UserAchievement'> | string;
    achievementId?: StringFilter<'UserAchievement'> | string;
    achievedAt?: DateTimeFilter<'UserAchievement'> | Date | string;
    user?: XOR<UserScalarRelationFilter, UserWhereInput>;
    achievement?: XOR<AchievementScalarRelationFilter, AchievementWhereInput>;
  };

  export type UserAchievementOrderByWithRelationInput = {
    id?: SortOrder;
    userId?: SortOrder;
    achievementId?: SortOrder;
    achievedAt?: SortOrder;
    user?: UserOrderByWithRelationInput;
    achievement?: AchievementOrderByWithRelationInput;
  };

  export type UserAchievementWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: UserAchievementWhereInput | UserAchievementWhereInput[];
      OR?: UserAchievementWhereInput[];
      NOT?: UserAchievementWhereInput | UserAchievementWhereInput[];
      userId?: StringFilter<'UserAchievement'> | string;
      achievementId?: StringFilter<'UserAchievement'> | string;
      achievedAt?: DateTimeFilter<'UserAchievement'> | Date | string;
      user?: XOR<UserScalarRelationFilter, UserWhereInput>;
      achievement?: XOR<AchievementScalarRelationFilter, AchievementWhereInput>;
    },
    'id'
  >;

  export type UserAchievementOrderByWithAggregationInput = {
    id?: SortOrder;
    userId?: SortOrder;
    achievementId?: SortOrder;
    achievedAt?: SortOrder;
    _count?: UserAchievementCountOrderByAggregateInput;
    _max?: UserAchievementMaxOrderByAggregateInput;
    _min?: UserAchievementMinOrderByAggregateInput;
  };

  export type UserAchievementScalarWhereWithAggregatesInput = {
    AND?:
      | UserAchievementScalarWhereWithAggregatesInput
      | UserAchievementScalarWhereWithAggregatesInput[];
    OR?: UserAchievementScalarWhereWithAggregatesInput[];
    NOT?:
      | UserAchievementScalarWhereWithAggregatesInput
      | UserAchievementScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'UserAchievement'> | string;
    userId?: StringWithAggregatesFilter<'UserAchievement'> | string;
    achievementId?: StringWithAggregatesFilter<'UserAchievement'> | string;
    achievedAt?:
      | DateTimeWithAggregatesFilter<'UserAchievement'>
      | Date
      | string;
  };

  export type TeamWhereInput = {
    AND?: TeamWhereInput | TeamWhereInput[];
    OR?: TeamWhereInput[];
    NOT?: TeamWhereInput | TeamWhereInput[];
    id?: StringFilter<'Team'> | string;
    name?: StringFilter<'Team'> | string;
    createdAt?: DateTimeFilter<'Team'> | Date | string;
    members?: UserListRelationFilter;
    results?: TeamBattleResultListRelationFilter;
  };

  export type TeamOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    createdAt?: SortOrder;
    members?: UserOrderByRelationAggregateInput;
    results?: TeamBattleResultOrderByRelationAggregateInput;
  };

  export type TeamWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: TeamWhereInput | TeamWhereInput[];
      OR?: TeamWhereInput[];
      NOT?: TeamWhereInput | TeamWhereInput[];
      name?: StringFilter<'Team'> | string;
      createdAt?: DateTimeFilter<'Team'> | Date | string;
      members?: UserListRelationFilter;
      results?: TeamBattleResultListRelationFilter;
    },
    'id'
  >;

  export type TeamOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    createdAt?: SortOrder;
    _count?: TeamCountOrderByAggregateInput;
    _max?: TeamMaxOrderByAggregateInput;
    _min?: TeamMinOrderByAggregateInput;
  };

  export type TeamScalarWhereWithAggregatesInput = {
    AND?:
      | TeamScalarWhereWithAggregatesInput
      | TeamScalarWhereWithAggregatesInput[];
    OR?: TeamScalarWhereWithAggregatesInput[];
    NOT?:
      | TeamScalarWhereWithAggregatesInput
      | TeamScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'Team'> | string;
    name?: StringWithAggregatesFilter<'Team'> | string;
    createdAt?: DateTimeWithAggregatesFilter<'Team'> | Date | string;
  };

  export type TeamBattleResultWhereInput = {
    AND?: TeamBattleResultWhereInput | TeamBattleResultWhereInput[];
    OR?: TeamBattleResultWhereInput[];
    NOT?: TeamBattleResultWhereInput | TeamBattleResultWhereInput[];
    id?: StringFilter<'TeamBattleResult'> | string;
    teamId?: StringFilter<'TeamBattleResult'> | string;
    score?: IntFilter<'TeamBattleResult'> | number;
    date?: DateTimeFilter<'TeamBattleResult'> | Date | string;
    position?: IntFilter<'TeamBattleResult'> | number;
    team?: XOR<TeamScalarRelationFilter, TeamWhereInput>;
  };

  export type TeamBattleResultOrderByWithRelationInput = {
    id?: SortOrder;
    teamId?: SortOrder;
    score?: SortOrder;
    date?: SortOrder;
    position?: SortOrder;
    team?: TeamOrderByWithRelationInput;
  };

  export type TeamBattleResultWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: TeamBattleResultWhereInput | TeamBattleResultWhereInput[];
      OR?: TeamBattleResultWhereInput[];
      NOT?: TeamBattleResultWhereInput | TeamBattleResultWhereInput[];
      teamId?: StringFilter<'TeamBattleResult'> | string;
      score?: IntFilter<'TeamBattleResult'> | number;
      date?: DateTimeFilter<'TeamBattleResult'> | Date | string;
      position?: IntFilter<'TeamBattleResult'> | number;
      team?: XOR<TeamScalarRelationFilter, TeamWhereInput>;
    },
    'id'
  >;

  export type TeamBattleResultOrderByWithAggregationInput = {
    id?: SortOrder;
    teamId?: SortOrder;
    score?: SortOrder;
    date?: SortOrder;
    position?: SortOrder;
    _count?: TeamBattleResultCountOrderByAggregateInput;
    _avg?: TeamBattleResultAvgOrderByAggregateInput;
    _max?: TeamBattleResultMaxOrderByAggregateInput;
    _min?: TeamBattleResultMinOrderByAggregateInput;
    _sum?: TeamBattleResultSumOrderByAggregateInput;
  };

  export type TeamBattleResultScalarWhereWithAggregatesInput = {
    AND?:
      | TeamBattleResultScalarWhereWithAggregatesInput
      | TeamBattleResultScalarWhereWithAggregatesInput[];
    OR?: TeamBattleResultScalarWhereWithAggregatesInput[];
    NOT?:
      | TeamBattleResultScalarWhereWithAggregatesInput
      | TeamBattleResultScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'TeamBattleResult'> | string;
    teamId?: StringWithAggregatesFilter<'TeamBattleResult'> | string;
    score?: IntWithAggregatesFilter<'TeamBattleResult'> | number;
    date?: DateTimeWithAggregatesFilter<'TeamBattleResult'> | Date | string;
    position?: IntWithAggregatesFilter<'TeamBattleResult'> | number;
  };

  export type LessonWhereInput = {
    AND?: LessonWhereInput | LessonWhereInput[];
    OR?: LessonWhereInput[];
    NOT?: LessonWhereInput | LessonWhereInput[];
    id?: StringFilter<'Lesson'> | string;
    title?: StringFilter<'Lesson'> | string;
    topic?: StringFilter<'Lesson'> | string;
    content?: StringFilter<'Lesson'> | string;
    durationMin?: IntFilter<'Lesson'> | number;
    createdAt?: DateTimeFilter<'Lesson'> | Date | string;
    progress?: UserLessonProgressListRelationFilter;
  };

  export type LessonOrderByWithRelationInput = {
    id?: SortOrder;
    title?: SortOrder;
    topic?: SortOrder;
    content?: SortOrder;
    durationMin?: SortOrder;
    createdAt?: SortOrder;
    progress?: UserLessonProgressOrderByRelationAggregateInput;
  };

  export type LessonWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: LessonWhereInput | LessonWhereInput[];
      OR?: LessonWhereInput[];
      NOT?: LessonWhereInput | LessonWhereInput[];
      title?: StringFilter<'Lesson'> | string;
      topic?: StringFilter<'Lesson'> | string;
      content?: StringFilter<'Lesson'> | string;
      durationMin?: IntFilter<'Lesson'> | number;
      createdAt?: DateTimeFilter<'Lesson'> | Date | string;
      progress?: UserLessonProgressListRelationFilter;
    },
    'id'
  >;

  export type LessonOrderByWithAggregationInput = {
    id?: SortOrder;
    title?: SortOrder;
    topic?: SortOrder;
    content?: SortOrder;
    durationMin?: SortOrder;
    createdAt?: SortOrder;
    _count?: LessonCountOrderByAggregateInput;
    _avg?: LessonAvgOrderByAggregateInput;
    _max?: LessonMaxOrderByAggregateInput;
    _min?: LessonMinOrderByAggregateInput;
    _sum?: LessonSumOrderByAggregateInput;
  };

  export type LessonScalarWhereWithAggregatesInput = {
    AND?:
      | LessonScalarWhereWithAggregatesInput
      | LessonScalarWhereWithAggregatesInput[];
    OR?: LessonScalarWhereWithAggregatesInput[];
    NOT?:
      | LessonScalarWhereWithAggregatesInput
      | LessonScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'Lesson'> | string;
    title?: StringWithAggregatesFilter<'Lesson'> | string;
    topic?: StringWithAggregatesFilter<'Lesson'> | string;
    content?: StringWithAggregatesFilter<'Lesson'> | string;
    durationMin?: IntWithAggregatesFilter<'Lesson'> | number;
    createdAt?: DateTimeWithAggregatesFilter<'Lesson'> | Date | string;
  };

  export type UserLessonProgressWhereInput = {
    AND?: UserLessonProgressWhereInput | UserLessonProgressWhereInput[];
    OR?: UserLessonProgressWhereInput[];
    NOT?: UserLessonProgressWhereInput | UserLessonProgressWhereInput[];
    id?: StringFilter<'UserLessonProgress'> | string;
    userId?: StringFilter<'UserLessonProgress'> | string;
    lessonId?: StringFilter<'UserLessonProgress'> | string;
    status?: StringFilter<'UserLessonProgress'> | string;
    completedAt?:
      | DateTimeNullableFilter<'UserLessonProgress'>
      | Date
      | string
      | null;
    user?: XOR<UserScalarRelationFilter, UserWhereInput>;
    lesson?: XOR<LessonScalarRelationFilter, LessonWhereInput>;
  };

  export type UserLessonProgressOrderByWithRelationInput = {
    id?: SortOrder;
    userId?: SortOrder;
    lessonId?: SortOrder;
    status?: SortOrder;
    completedAt?: SortOrderInput | SortOrder;
    user?: UserOrderByWithRelationInput;
    lesson?: LessonOrderByWithRelationInput;
  };

  export type UserLessonProgressWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: UserLessonProgressWhereInput | UserLessonProgressWhereInput[];
      OR?: UserLessonProgressWhereInput[];
      NOT?: UserLessonProgressWhereInput | UserLessonProgressWhereInput[];
      userId?: StringFilter<'UserLessonProgress'> | string;
      lessonId?: StringFilter<'UserLessonProgress'> | string;
      status?: StringFilter<'UserLessonProgress'> | string;
      completedAt?:
        | DateTimeNullableFilter<'UserLessonProgress'>
        | Date
        | string
        | null;
      user?: XOR<UserScalarRelationFilter, UserWhereInput>;
      lesson?: XOR<LessonScalarRelationFilter, LessonWhereInput>;
    },
    'id'
  >;

  export type UserLessonProgressOrderByWithAggregationInput = {
    id?: SortOrder;
    userId?: SortOrder;
    lessonId?: SortOrder;
    status?: SortOrder;
    completedAt?: SortOrderInput | SortOrder;
    _count?: UserLessonProgressCountOrderByAggregateInput;
    _max?: UserLessonProgressMaxOrderByAggregateInput;
    _min?: UserLessonProgressMinOrderByAggregateInput;
  };

  export type UserLessonProgressScalarWhereWithAggregatesInput = {
    AND?:
      | UserLessonProgressScalarWhereWithAggregatesInput
      | UserLessonProgressScalarWhereWithAggregatesInput[];
    OR?: UserLessonProgressScalarWhereWithAggregatesInput[];
    NOT?:
      | UserLessonProgressScalarWhereWithAggregatesInput
      | UserLessonProgressScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'UserLessonProgress'> | string;
    userId?: StringWithAggregatesFilter<'UserLessonProgress'> | string;
    lessonId?: StringWithAggregatesFilter<'UserLessonProgress'> | string;
    status?: StringWithAggregatesFilter<'UserLessonProgress'> | string;
    completedAt?:
      | DateTimeNullableWithAggregatesFilter<'UserLessonProgress'>
      | Date
      | string
      | null;
  };

  export type DailyActivityLogWhereInput = {
    AND?: DailyActivityLogWhereInput | DailyActivityLogWhereInput[];
    OR?: DailyActivityLogWhereInput[];
    NOT?: DailyActivityLogWhereInput | DailyActivityLogWhereInput[];
    id?: StringFilter<'DailyActivityLog'> | string;
    userId?: StringFilter<'DailyActivityLog'> | string;
    date?: DateTimeFilter<'DailyActivityLog'> | Date | string;
    activity?: StringFilter<'DailyActivityLog'> | string;
    user?: XOR<UserScalarRelationFilter, UserWhereInput>;
  };

  export type DailyActivityLogOrderByWithRelationInput = {
    id?: SortOrder;
    userId?: SortOrder;
    date?: SortOrder;
    activity?: SortOrder;
    user?: UserOrderByWithRelationInput;
  };

  export type DailyActivityLogWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      userId_date?: DailyActivityLogUserIdDateCompoundUniqueInput;
      AND?: DailyActivityLogWhereInput | DailyActivityLogWhereInput[];
      OR?: DailyActivityLogWhereInput[];
      NOT?: DailyActivityLogWhereInput | DailyActivityLogWhereInput[];
      userId?: StringFilter<'DailyActivityLog'> | string;
      date?: DateTimeFilter<'DailyActivityLog'> | Date | string;
      activity?: StringFilter<'DailyActivityLog'> | string;
      user?: XOR<UserScalarRelationFilter, UserWhereInput>;
    },
    'id' | 'userId_date'
  >;

  export type DailyActivityLogOrderByWithAggregationInput = {
    id?: SortOrder;
    userId?: SortOrder;
    date?: SortOrder;
    activity?: SortOrder;
    _count?: DailyActivityLogCountOrderByAggregateInput;
    _max?: DailyActivityLogMaxOrderByAggregateInput;
    _min?: DailyActivityLogMinOrderByAggregateInput;
  };

  export type DailyActivityLogScalarWhereWithAggregatesInput = {
    AND?:
      | DailyActivityLogScalarWhereWithAggregatesInput
      | DailyActivityLogScalarWhereWithAggregatesInput[];
    OR?: DailyActivityLogScalarWhereWithAggregatesInput[];
    NOT?:
      | DailyActivityLogScalarWhereWithAggregatesInput
      | DailyActivityLogScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'DailyActivityLog'> | string;
    userId?: StringWithAggregatesFilter<'DailyActivityLog'> | string;
    date?: DateTimeWithAggregatesFilter<'DailyActivityLog'> | Date | string;
    activity?: StringWithAggregatesFilter<'DailyActivityLog'> | string;
  };

  export type QuizResultWhereInput = {
    AND?: QuizResultWhereInput | QuizResultWhereInput[];
    OR?: QuizResultWhereInput[];
    NOT?: QuizResultWhereInput | QuizResultWhereInput[];
    id?: StringFilter<'QuizResult'> | string;
    userId?: StringFilter<'QuizResult'> | string;
    score?: IntFilter<'QuizResult'> | number;
    total?: IntFilter<'QuizResult'> | number;
    passedAt?: DateTimeFilter<'QuizResult'> | Date | string;
    user?: XOR<UserScalarRelationFilter, UserWhereInput>;
  };

  export type QuizResultOrderByWithRelationInput = {
    id?: SortOrder;
    userId?: SortOrder;
    score?: SortOrder;
    total?: SortOrder;
    passedAt?: SortOrder;
    user?: UserOrderByWithRelationInput;
  };

  export type QuizResultWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: QuizResultWhereInput | QuizResultWhereInput[];
      OR?: QuizResultWhereInput[];
      NOT?: QuizResultWhereInput | QuizResultWhereInput[];
      userId?: StringFilter<'QuizResult'> | string;
      score?: IntFilter<'QuizResult'> | number;
      total?: IntFilter<'QuizResult'> | number;
      passedAt?: DateTimeFilter<'QuizResult'> | Date | string;
      user?: XOR<UserScalarRelationFilter, UserWhereInput>;
    },
    'id'
  >;

  export type QuizResultOrderByWithAggregationInput = {
    id?: SortOrder;
    userId?: SortOrder;
    score?: SortOrder;
    total?: SortOrder;
    passedAt?: SortOrder;
    _count?: QuizResultCountOrderByAggregateInput;
    _avg?: QuizResultAvgOrderByAggregateInput;
    _max?: QuizResultMaxOrderByAggregateInput;
    _min?: QuizResultMinOrderByAggregateInput;
    _sum?: QuizResultSumOrderByAggregateInput;
  };

  export type QuizResultScalarWhereWithAggregatesInput = {
    AND?:
      | QuizResultScalarWhereWithAggregatesInput
      | QuizResultScalarWhereWithAggregatesInput[];
    OR?: QuizResultScalarWhereWithAggregatesInput[];
    NOT?:
      | QuizResultScalarWhereWithAggregatesInput
      | QuizResultScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'QuizResult'> | string;
    userId?: StringWithAggregatesFilter<'QuizResult'> | string;
    score?: IntWithAggregatesFilter<'QuizResult'> | number;
    total?: IntWithAggregatesFilter<'QuizResult'> | number;
    passedAt?: DateTimeWithAggregatesFilter<'QuizResult'> | Date | string;
  };

  export type LeaderboardEntryWhereInput = {
    AND?: LeaderboardEntryWhereInput | LeaderboardEntryWhereInput[];
    OR?: LeaderboardEntryWhereInput[];
    NOT?: LeaderboardEntryWhereInput | LeaderboardEntryWhereInput[];
    id?: StringFilter<'LeaderboardEntry'> | string;
    userId?: StringFilter<'LeaderboardEntry'> | string;
    xp?: IntFilter<'LeaderboardEntry'> | number;
    rank?: IntFilter<'LeaderboardEntry'> | number;
    snapshotDate?: DateTimeFilter<'LeaderboardEntry'> | Date | string;
    user?: XOR<UserScalarRelationFilter, UserWhereInput>;
  };

  export type LeaderboardEntryOrderByWithRelationInput = {
    id?: SortOrder;
    userId?: SortOrder;
    xp?: SortOrder;
    rank?: SortOrder;
    snapshotDate?: SortOrder;
    user?: UserOrderByWithRelationInput;
  };

  export type LeaderboardEntryWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: LeaderboardEntryWhereInput | LeaderboardEntryWhereInput[];
      OR?: LeaderboardEntryWhereInput[];
      NOT?: LeaderboardEntryWhereInput | LeaderboardEntryWhereInput[];
      userId?: StringFilter<'LeaderboardEntry'> | string;
      xp?: IntFilter<'LeaderboardEntry'> | number;
      rank?: IntFilter<'LeaderboardEntry'> | number;
      snapshotDate?: DateTimeFilter<'LeaderboardEntry'> | Date | string;
      user?: XOR<UserScalarRelationFilter, UserWhereInput>;
    },
    'id'
  >;

  export type LeaderboardEntryOrderByWithAggregationInput = {
    id?: SortOrder;
    userId?: SortOrder;
    xp?: SortOrder;
    rank?: SortOrder;
    snapshotDate?: SortOrder;
    _count?: LeaderboardEntryCountOrderByAggregateInput;
    _avg?: LeaderboardEntryAvgOrderByAggregateInput;
    _max?: LeaderboardEntryMaxOrderByAggregateInput;
    _min?: LeaderboardEntryMinOrderByAggregateInput;
    _sum?: LeaderboardEntrySumOrderByAggregateInput;
  };

  export type LeaderboardEntryScalarWhereWithAggregatesInput = {
    AND?:
      | LeaderboardEntryScalarWhereWithAggregatesInput
      | LeaderboardEntryScalarWhereWithAggregatesInput[];
    OR?: LeaderboardEntryScalarWhereWithAggregatesInput[];
    NOT?:
      | LeaderboardEntryScalarWhereWithAggregatesInput
      | LeaderboardEntryScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'LeaderboardEntry'> | string;
    userId?: StringWithAggregatesFilter<'LeaderboardEntry'> | string;
    xp?: IntWithAggregatesFilter<'LeaderboardEntry'> | number;
    rank?: IntWithAggregatesFilter<'LeaderboardEntry'> | number;
    snapshotDate?:
      | DateTimeWithAggregatesFilter<'LeaderboardEntry'>
      | Date
      | string;
  };

  export type UserCreateInput = {
    id?: string;
    firstName: string;
    lastName: string;
    role?: string;
    status?: string;
    email: string;
    passwordHash: string;
    isApprovedByAdmin?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    progress?: UserProgressCreateNestedOneWithoutUserInput;
    achievements?: UserAchievementCreateNestedManyWithoutUserInput;
    lessonProgress?: UserLessonProgressCreateNestedManyWithoutUserInput;
    activityLogs?: DailyActivityLogCreateNestedManyWithoutUserInput;
    quizResults?: QuizResultCreateNestedManyWithoutUserInput;
    leaderboardEntries?: LeaderboardEntryCreateNestedManyWithoutUserInput;
    team?: TeamCreateNestedOneWithoutMembersInput;
  };

  export type UserUncheckedCreateInput = {
    id?: string;
    firstName: string;
    lastName: string;
    role?: string;
    status?: string;
    email: string;
    passwordHash: string;
    isApprovedByAdmin?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    teamId?: string | null;
    progress?: UserProgressUncheckedCreateNestedOneWithoutUserInput;
    achievements?: UserAchievementUncheckedCreateNestedManyWithoutUserInput;
    lessonProgress?: UserLessonProgressUncheckedCreateNestedManyWithoutUserInput;
    activityLogs?: DailyActivityLogUncheckedCreateNestedManyWithoutUserInput;
    quizResults?: QuizResultUncheckedCreateNestedManyWithoutUserInput;
    leaderboardEntries?: LeaderboardEntryUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    firstName?: StringFieldUpdateOperationsInput | string;
    lastName?: StringFieldUpdateOperationsInput | string;
    role?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    passwordHash?: StringFieldUpdateOperationsInput | string;
    isApprovedByAdmin?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    progress?: UserProgressUpdateOneWithoutUserNestedInput;
    achievements?: UserAchievementUpdateManyWithoutUserNestedInput;
    lessonProgress?: UserLessonProgressUpdateManyWithoutUserNestedInput;
    activityLogs?: DailyActivityLogUpdateManyWithoutUserNestedInput;
    quizResults?: QuizResultUpdateManyWithoutUserNestedInput;
    leaderboardEntries?: LeaderboardEntryUpdateManyWithoutUserNestedInput;
    team?: TeamUpdateOneWithoutMembersNestedInput;
  };

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    firstName?: StringFieldUpdateOperationsInput | string;
    lastName?: StringFieldUpdateOperationsInput | string;
    role?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    passwordHash?: StringFieldUpdateOperationsInput | string;
    isApprovedByAdmin?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    teamId?: NullableStringFieldUpdateOperationsInput | string | null;
    progress?: UserProgressUncheckedUpdateOneWithoutUserNestedInput;
    achievements?: UserAchievementUncheckedUpdateManyWithoutUserNestedInput;
    lessonProgress?: UserLessonProgressUncheckedUpdateManyWithoutUserNestedInput;
    activityLogs?: DailyActivityLogUncheckedUpdateManyWithoutUserNestedInput;
    quizResults?: QuizResultUncheckedUpdateManyWithoutUserNestedInput;
    leaderboardEntries?: LeaderboardEntryUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type UserCreateManyInput = {
    id?: string;
    firstName: string;
    lastName: string;
    role?: string;
    status?: string;
    email: string;
    passwordHash: string;
    isApprovedByAdmin?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    teamId?: string | null;
  };

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    firstName?: StringFieldUpdateOperationsInput | string;
    lastName?: StringFieldUpdateOperationsInput | string;
    role?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    passwordHash?: StringFieldUpdateOperationsInput | string;
    isApprovedByAdmin?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    firstName?: StringFieldUpdateOperationsInput | string;
    lastName?: StringFieldUpdateOperationsInput | string;
    role?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    passwordHash?: StringFieldUpdateOperationsInput | string;
    isApprovedByAdmin?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    teamId?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type UserProgressCreateInput = {
    id?: string;
    xp?: number;
    level?: number;
    streak?: number;
    accuracy?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: UserCreateNestedOneWithoutProgressInput;
  };

  export type UserProgressUncheckedCreateInput = {
    id?: string;
    userId: string;
    xp?: number;
    level?: number;
    streak?: number;
    accuracy?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type UserProgressUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    xp?: IntFieldUpdateOperationsInput | number;
    level?: IntFieldUpdateOperationsInput | number;
    streak?: IntFieldUpdateOperationsInput | number;
    accuracy?: NullableFloatFieldUpdateOperationsInput | number | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutProgressNestedInput;
  };

  export type UserProgressUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    xp?: IntFieldUpdateOperationsInput | number;
    level?: IntFieldUpdateOperationsInput | number;
    streak?: IntFieldUpdateOperationsInput | number;
    accuracy?: NullableFloatFieldUpdateOperationsInput | number | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UserProgressCreateManyInput = {
    id?: string;
    userId: string;
    xp?: number;
    level?: number;
    streak?: number;
    accuracy?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type UserProgressUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    xp?: IntFieldUpdateOperationsInput | number;
    level?: IntFieldUpdateOperationsInput | number;
    streak?: IntFieldUpdateOperationsInput | number;
    accuracy?: NullableFloatFieldUpdateOperationsInput | number | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UserProgressUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    xp?: IntFieldUpdateOperationsInput | number;
    level?: IntFieldUpdateOperationsInput | number;
    streak?: IntFieldUpdateOperationsInput | number;
    accuracy?: NullableFloatFieldUpdateOperationsInput | number | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type AchievementCreateInput = {
    id?: string;
    code: string;
    name: string;
    description: string;
    icon: string;
    users?: UserAchievementCreateNestedManyWithoutAchievementInput;
  };

  export type AchievementUncheckedCreateInput = {
    id?: string;
    code: string;
    name: string;
    description: string;
    icon: string;
    users?: UserAchievementUncheckedCreateNestedManyWithoutAchievementInput;
  };

  export type AchievementUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    code?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    icon?: StringFieldUpdateOperationsInput | string;
    users?: UserAchievementUpdateManyWithoutAchievementNestedInput;
  };

  export type AchievementUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    code?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    icon?: StringFieldUpdateOperationsInput | string;
    users?: UserAchievementUncheckedUpdateManyWithoutAchievementNestedInput;
  };

  export type AchievementCreateManyInput = {
    id?: string;
    code: string;
    name: string;
    description: string;
    icon: string;
  };

  export type AchievementUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    code?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    icon?: StringFieldUpdateOperationsInput | string;
  };

  export type AchievementUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    code?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    icon?: StringFieldUpdateOperationsInput | string;
  };

  export type UserAchievementCreateInput = {
    id?: string;
    achievedAt?: Date | string;
    user: UserCreateNestedOneWithoutAchievementsInput;
    achievement: AchievementCreateNestedOneWithoutUsersInput;
  };

  export type UserAchievementUncheckedCreateInput = {
    id?: string;
    userId: string;
    achievementId: string;
    achievedAt?: Date | string;
  };

  export type UserAchievementUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    achievedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutAchievementsNestedInput;
    achievement?: AchievementUpdateOneRequiredWithoutUsersNestedInput;
  };

  export type UserAchievementUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    achievementId?: StringFieldUpdateOperationsInput | string;
    achievedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UserAchievementCreateManyInput = {
    id?: string;
    userId: string;
    achievementId: string;
    achievedAt?: Date | string;
  };

  export type UserAchievementUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    achievedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UserAchievementUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    achievementId?: StringFieldUpdateOperationsInput | string;
    achievedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type TeamCreateInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    members?: UserCreateNestedManyWithoutTeamInput;
    results?: TeamBattleResultCreateNestedManyWithoutTeamInput;
  };

  export type TeamUncheckedCreateInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    members?: UserUncheckedCreateNestedManyWithoutTeamInput;
    results?: TeamBattleResultUncheckedCreateNestedManyWithoutTeamInput;
  };

  export type TeamUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    members?: UserUpdateManyWithoutTeamNestedInput;
    results?: TeamBattleResultUpdateManyWithoutTeamNestedInput;
  };

  export type TeamUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    members?: UserUncheckedUpdateManyWithoutTeamNestedInput;
    results?: TeamBattleResultUncheckedUpdateManyWithoutTeamNestedInput;
  };

  export type TeamCreateManyInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
  };

  export type TeamUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type TeamUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type TeamBattleResultCreateInput = {
    id?: string;
    score: number;
    date: Date | string;
    position: number;
    team: TeamCreateNestedOneWithoutResultsInput;
  };

  export type TeamBattleResultUncheckedCreateInput = {
    id?: string;
    teamId: string;
    score: number;
    date: Date | string;
    position: number;
  };

  export type TeamBattleResultUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    score?: IntFieldUpdateOperationsInput | number;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    position?: IntFieldUpdateOperationsInput | number;
    team?: TeamUpdateOneRequiredWithoutResultsNestedInput;
  };

  export type TeamBattleResultUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    teamId?: StringFieldUpdateOperationsInput | string;
    score?: IntFieldUpdateOperationsInput | number;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    position?: IntFieldUpdateOperationsInput | number;
  };

  export type TeamBattleResultCreateManyInput = {
    id?: string;
    teamId: string;
    score: number;
    date: Date | string;
    position: number;
  };

  export type TeamBattleResultUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    score?: IntFieldUpdateOperationsInput | number;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    position?: IntFieldUpdateOperationsInput | number;
  };

  export type TeamBattleResultUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    teamId?: StringFieldUpdateOperationsInput | string;
    score?: IntFieldUpdateOperationsInput | number;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    position?: IntFieldUpdateOperationsInput | number;
  };

  export type LessonCreateInput = {
    id?: string;
    title: string;
    topic: string;
    content: string;
    durationMin: number;
    createdAt?: Date | string;
    progress?: UserLessonProgressCreateNestedManyWithoutLessonInput;
  };

  export type LessonUncheckedCreateInput = {
    id?: string;
    title: string;
    topic: string;
    content: string;
    durationMin: number;
    createdAt?: Date | string;
    progress?: UserLessonProgressUncheckedCreateNestedManyWithoutLessonInput;
  };

  export type LessonUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    topic?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    durationMin?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    progress?: UserLessonProgressUpdateManyWithoutLessonNestedInput;
  };

  export type LessonUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    topic?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    durationMin?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    progress?: UserLessonProgressUncheckedUpdateManyWithoutLessonNestedInput;
  };

  export type LessonCreateManyInput = {
    id?: string;
    title: string;
    topic: string;
    content: string;
    durationMin: number;
    createdAt?: Date | string;
  };

  export type LessonUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    topic?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    durationMin?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type LessonUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    topic?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    durationMin?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UserLessonProgressCreateInput = {
    id?: string;
    status?: string;
    completedAt?: Date | string | null;
    user: UserCreateNestedOneWithoutLessonProgressInput;
    lesson: LessonCreateNestedOneWithoutProgressInput;
  };

  export type UserLessonProgressUncheckedCreateInput = {
    id?: string;
    userId: string;
    lessonId: string;
    status?: string;
    completedAt?: Date | string | null;
  };

  export type UserLessonProgressUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    completedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    user?: UserUpdateOneRequiredWithoutLessonProgressNestedInput;
    lesson?: LessonUpdateOneRequiredWithoutProgressNestedInput;
  };

  export type UserLessonProgressUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    lessonId?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    completedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type UserLessonProgressCreateManyInput = {
    id?: string;
    userId: string;
    lessonId: string;
    status?: string;
    completedAt?: Date | string | null;
  };

  export type UserLessonProgressUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    completedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type UserLessonProgressUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    lessonId?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    completedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type DailyActivityLogCreateInput = {
    id?: string;
    date: Date | string;
    activity: string;
    user: UserCreateNestedOneWithoutActivityLogsInput;
  };

  export type DailyActivityLogUncheckedCreateInput = {
    id?: string;
    userId: string;
    date: Date | string;
    activity: string;
  };

  export type DailyActivityLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    activity?: StringFieldUpdateOperationsInput | string;
    user?: UserUpdateOneRequiredWithoutActivityLogsNestedInput;
  };

  export type DailyActivityLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    activity?: StringFieldUpdateOperationsInput | string;
  };

  export type DailyActivityLogCreateManyInput = {
    id?: string;
    userId: string;
    date: Date | string;
    activity: string;
  };

  export type DailyActivityLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    activity?: StringFieldUpdateOperationsInput | string;
  };

  export type DailyActivityLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    activity?: StringFieldUpdateOperationsInput | string;
  };

  export type QuizResultCreateInput = {
    id?: string;
    score: number;
    total: number;
    passedAt?: Date | string;
    user: UserCreateNestedOneWithoutQuizResultsInput;
  };

  export type QuizResultUncheckedCreateInput = {
    id?: string;
    userId: string;
    score: number;
    total: number;
    passedAt?: Date | string;
  };

  export type QuizResultUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    score?: IntFieldUpdateOperationsInput | number;
    total?: IntFieldUpdateOperationsInput | number;
    passedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutQuizResultsNestedInput;
  };

  export type QuizResultUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    score?: IntFieldUpdateOperationsInput | number;
    total?: IntFieldUpdateOperationsInput | number;
    passedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type QuizResultCreateManyInput = {
    id?: string;
    userId: string;
    score: number;
    total: number;
    passedAt?: Date | string;
  };

  export type QuizResultUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    score?: IntFieldUpdateOperationsInput | number;
    total?: IntFieldUpdateOperationsInput | number;
    passedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type QuizResultUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    score?: IntFieldUpdateOperationsInput | number;
    total?: IntFieldUpdateOperationsInput | number;
    passedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type LeaderboardEntryCreateInput = {
    id?: string;
    xp: number;
    rank: number;
    snapshotDate: Date | string;
    user: UserCreateNestedOneWithoutLeaderboardEntriesInput;
  };

  export type LeaderboardEntryUncheckedCreateInput = {
    id?: string;
    userId: string;
    xp: number;
    rank: number;
    snapshotDate: Date | string;
  };

  export type LeaderboardEntryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    xp?: IntFieldUpdateOperationsInput | number;
    rank?: IntFieldUpdateOperationsInput | number;
    snapshotDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutLeaderboardEntriesNestedInput;
  };

  export type LeaderboardEntryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    xp?: IntFieldUpdateOperationsInput | number;
    rank?: IntFieldUpdateOperationsInput | number;
    snapshotDate?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type LeaderboardEntryCreateManyInput = {
    id?: string;
    userId: string;
    xp: number;
    rank: number;
    snapshotDate: Date | string;
  };

  export type LeaderboardEntryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    xp?: IntFieldUpdateOperationsInput | number;
    rank?: IntFieldUpdateOperationsInput | number;
    snapshotDate?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type LeaderboardEntryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    xp?: IntFieldUpdateOperationsInput | number;
    rank?: IntFieldUpdateOperationsInput | number;
    snapshotDate?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolFilter<$PrismaModel> | boolean;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type UserProgressNullableScalarRelationFilter = {
    is?: UserProgressWhereInput | null;
    isNot?: UserProgressWhereInput | null;
  };

  export type UserAchievementListRelationFilter = {
    every?: UserAchievementWhereInput;
    some?: UserAchievementWhereInput;
    none?: UserAchievementWhereInput;
  };

  export type UserLessonProgressListRelationFilter = {
    every?: UserLessonProgressWhereInput;
    some?: UserLessonProgressWhereInput;
    none?: UserLessonProgressWhereInput;
  };

  export type DailyActivityLogListRelationFilter = {
    every?: DailyActivityLogWhereInput;
    some?: DailyActivityLogWhereInput;
    none?: DailyActivityLogWhereInput;
  };

  export type QuizResultListRelationFilter = {
    every?: QuizResultWhereInput;
    some?: QuizResultWhereInput;
    none?: QuizResultWhereInput;
  };

  export type LeaderboardEntryListRelationFilter = {
    every?: LeaderboardEntryWhereInput;
    some?: LeaderboardEntryWhereInput;
    none?: LeaderboardEntryWhereInput;
  };

  export type TeamNullableScalarRelationFilter = {
    is?: TeamWhereInput | null;
    isNot?: TeamWhereInput | null;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type UserAchievementOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type UserLessonProgressOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type DailyActivityLogOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type QuizResultOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type LeaderboardEntryOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    role?: SortOrder;
    status?: SortOrder;
    email?: SortOrder;
    passwordHash?: SortOrder;
    isApprovedByAdmin?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    teamId?: SortOrder;
  };

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    role?: SortOrder;
    status?: SortOrder;
    email?: SortOrder;
    passwordHash?: SortOrder;
    isApprovedByAdmin?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    teamId?: SortOrder;
  };

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    role?: SortOrder;
    status?: SortOrder;
    email?: SortOrder;
    passwordHash?: SortOrder;
    isApprovedByAdmin?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    teamId?: SortOrder;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedBoolFilter<$PrismaModel>;
    _max?: NestedBoolFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?:
      | NestedStringNullableWithAggregatesFilter<$PrismaModel>
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null;
  };

  export type UserScalarRelationFilter = {
    is?: UserWhereInput;
    isNot?: UserWhereInput;
  };

  export type UserProgressCountOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    xp?: SortOrder;
    level?: SortOrder;
    streak?: SortOrder;
    accuracy?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type UserProgressAvgOrderByAggregateInput = {
    xp?: SortOrder;
    level?: SortOrder;
    streak?: SortOrder;
    accuracy?: SortOrder;
  };

  export type UserProgressMaxOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    xp?: SortOrder;
    level?: SortOrder;
    streak?: SortOrder;
    accuracy?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type UserProgressMinOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    xp?: SortOrder;
    level?: SortOrder;
    streak?: SortOrder;
    accuracy?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type UserProgressSumOrderByAggregateInput = {
    xp?: SortOrder;
    level?: SortOrder;
    streak?: SortOrder;
    accuracy?: SortOrder;
  };

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedFloatNullableFilter<$PrismaModel>;
    _min?: NestedFloatNullableFilter<$PrismaModel>;
    _max?: NestedFloatNullableFilter<$PrismaModel>;
  };

  export type AchievementCountOrderByAggregateInput = {
    id?: SortOrder;
    code?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    icon?: SortOrder;
  };

  export type AchievementMaxOrderByAggregateInput = {
    id?: SortOrder;
    code?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    icon?: SortOrder;
  };

  export type AchievementMinOrderByAggregateInput = {
    id?: SortOrder;
    code?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    icon?: SortOrder;
  };

  export type AchievementScalarRelationFilter = {
    is?: AchievementWhereInput;
    isNot?: AchievementWhereInput;
  };

  export type UserAchievementCountOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    achievementId?: SortOrder;
    achievedAt?: SortOrder;
  };

  export type UserAchievementMaxOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    achievementId?: SortOrder;
    achievedAt?: SortOrder;
  };

  export type UserAchievementMinOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    achievementId?: SortOrder;
    achievedAt?: SortOrder;
  };

  export type UserListRelationFilter = {
    every?: UserWhereInput;
    some?: UserWhereInput;
    none?: UserWhereInput;
  };

  export type TeamBattleResultListRelationFilter = {
    every?: TeamBattleResultWhereInput;
    some?: TeamBattleResultWhereInput;
    none?: TeamBattleResultWhereInput;
  };

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type TeamBattleResultOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type TeamCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    createdAt?: SortOrder;
  };

  export type TeamMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    createdAt?: SortOrder;
  };

  export type TeamMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    createdAt?: SortOrder;
  };

  export type TeamScalarRelationFilter = {
    is?: TeamWhereInput;
    isNot?: TeamWhereInput;
  };

  export type TeamBattleResultCountOrderByAggregateInput = {
    id?: SortOrder;
    teamId?: SortOrder;
    score?: SortOrder;
    date?: SortOrder;
    position?: SortOrder;
  };

  export type TeamBattleResultAvgOrderByAggregateInput = {
    score?: SortOrder;
    position?: SortOrder;
  };

  export type TeamBattleResultMaxOrderByAggregateInput = {
    id?: SortOrder;
    teamId?: SortOrder;
    score?: SortOrder;
    date?: SortOrder;
    position?: SortOrder;
  };

  export type TeamBattleResultMinOrderByAggregateInput = {
    id?: SortOrder;
    teamId?: SortOrder;
    score?: SortOrder;
    date?: SortOrder;
    position?: SortOrder;
  };

  export type TeamBattleResultSumOrderByAggregateInput = {
    score?: SortOrder;
    position?: SortOrder;
  };

  export type LessonCountOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    topic?: SortOrder;
    content?: SortOrder;
    durationMin?: SortOrder;
    createdAt?: SortOrder;
  };

  export type LessonAvgOrderByAggregateInput = {
    durationMin?: SortOrder;
  };

  export type LessonMaxOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    topic?: SortOrder;
    content?: SortOrder;
    durationMin?: SortOrder;
    createdAt?: SortOrder;
  };

  export type LessonMinOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    topic?: SortOrder;
    content?: SortOrder;
    durationMin?: SortOrder;
    createdAt?: SortOrder;
  };

  export type LessonSumOrderByAggregateInput = {
    durationMin?: SortOrder;
  };

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type LessonScalarRelationFilter = {
    is?: LessonWhereInput;
    isNot?: LessonWhereInput;
  };

  export type UserLessonProgressCountOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    lessonId?: SortOrder;
    status?: SortOrder;
    completedAt?: SortOrder;
  };

  export type UserLessonProgressMaxOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    lessonId?: SortOrder;
    status?: SortOrder;
    completedAt?: SortOrder;
  };

  export type UserLessonProgressMinOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    lessonId?: SortOrder;
    status?: SortOrder;
    completedAt?: SortOrder;
  };

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?:
      | NestedDateTimeNullableWithAggregatesFilter<$PrismaModel>
      | Date
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: NestedDateTimeNullableFilter<$PrismaModel>;
  };

  export type DailyActivityLogUserIdDateCompoundUniqueInput = {
    userId: string;
    date: Date | string;
  };

  export type DailyActivityLogCountOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    date?: SortOrder;
    activity?: SortOrder;
  };

  export type DailyActivityLogMaxOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    date?: SortOrder;
    activity?: SortOrder;
  };

  export type DailyActivityLogMinOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    date?: SortOrder;
    activity?: SortOrder;
  };

  export type QuizResultCountOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    score?: SortOrder;
    total?: SortOrder;
    passedAt?: SortOrder;
  };

  export type QuizResultAvgOrderByAggregateInput = {
    score?: SortOrder;
    total?: SortOrder;
  };

  export type QuizResultMaxOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    score?: SortOrder;
    total?: SortOrder;
    passedAt?: SortOrder;
  };

  export type QuizResultMinOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    score?: SortOrder;
    total?: SortOrder;
    passedAt?: SortOrder;
  };

  export type QuizResultSumOrderByAggregateInput = {
    score?: SortOrder;
    total?: SortOrder;
  };

  export type LeaderboardEntryCountOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    xp?: SortOrder;
    rank?: SortOrder;
    snapshotDate?: SortOrder;
  };

  export type LeaderboardEntryAvgOrderByAggregateInput = {
    xp?: SortOrder;
    rank?: SortOrder;
  };

  export type LeaderboardEntryMaxOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    xp?: SortOrder;
    rank?: SortOrder;
    snapshotDate?: SortOrder;
  };

  export type LeaderboardEntryMinOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    xp?: SortOrder;
    rank?: SortOrder;
    snapshotDate?: SortOrder;
  };

  export type LeaderboardEntrySumOrderByAggregateInput = {
    xp?: SortOrder;
    rank?: SortOrder;
  };

  export type UserProgressCreateNestedOneWithoutUserInput = {
    create?: XOR<
      UserProgressCreateWithoutUserInput,
      UserProgressUncheckedCreateWithoutUserInput
    >;
    connectOrCreate?: UserProgressCreateOrConnectWithoutUserInput;
    connect?: UserProgressWhereUniqueInput;
  };

  export type UserAchievementCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          UserAchievementCreateWithoutUserInput,
          UserAchievementUncheckedCreateWithoutUserInput
        >
      | UserAchievementCreateWithoutUserInput[]
      | UserAchievementUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | UserAchievementCreateOrConnectWithoutUserInput
      | UserAchievementCreateOrConnectWithoutUserInput[];
    createMany?: UserAchievementCreateManyUserInputEnvelope;
    connect?:
      | UserAchievementWhereUniqueInput
      | UserAchievementWhereUniqueInput[];
  };

  export type UserLessonProgressCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          UserLessonProgressCreateWithoutUserInput,
          UserLessonProgressUncheckedCreateWithoutUserInput
        >
      | UserLessonProgressCreateWithoutUserInput[]
      | UserLessonProgressUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | UserLessonProgressCreateOrConnectWithoutUserInput
      | UserLessonProgressCreateOrConnectWithoutUserInput[];
    createMany?: UserLessonProgressCreateManyUserInputEnvelope;
    connect?:
      | UserLessonProgressWhereUniqueInput
      | UserLessonProgressWhereUniqueInput[];
  };

  export type DailyActivityLogCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          DailyActivityLogCreateWithoutUserInput,
          DailyActivityLogUncheckedCreateWithoutUserInput
        >
      | DailyActivityLogCreateWithoutUserInput[]
      | DailyActivityLogUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | DailyActivityLogCreateOrConnectWithoutUserInput
      | DailyActivityLogCreateOrConnectWithoutUserInput[];
    createMany?: DailyActivityLogCreateManyUserInputEnvelope;
    connect?:
      | DailyActivityLogWhereUniqueInput
      | DailyActivityLogWhereUniqueInput[];
  };

  export type QuizResultCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          QuizResultCreateWithoutUserInput,
          QuizResultUncheckedCreateWithoutUserInput
        >
      | QuizResultCreateWithoutUserInput[]
      | QuizResultUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | QuizResultCreateOrConnectWithoutUserInput
      | QuizResultCreateOrConnectWithoutUserInput[];
    createMany?: QuizResultCreateManyUserInputEnvelope;
    connect?: QuizResultWhereUniqueInput | QuizResultWhereUniqueInput[];
  };

  export type LeaderboardEntryCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          LeaderboardEntryCreateWithoutUserInput,
          LeaderboardEntryUncheckedCreateWithoutUserInput
        >
      | LeaderboardEntryCreateWithoutUserInput[]
      | LeaderboardEntryUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | LeaderboardEntryCreateOrConnectWithoutUserInput
      | LeaderboardEntryCreateOrConnectWithoutUserInput[];
    createMany?: LeaderboardEntryCreateManyUserInputEnvelope;
    connect?:
      | LeaderboardEntryWhereUniqueInput
      | LeaderboardEntryWhereUniqueInput[];
  };

  export type TeamCreateNestedOneWithoutMembersInput = {
    create?: XOR<
      TeamCreateWithoutMembersInput,
      TeamUncheckedCreateWithoutMembersInput
    >;
    connectOrCreate?: TeamCreateOrConnectWithoutMembersInput;
    connect?: TeamWhereUniqueInput;
  };

  export type UserProgressUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<
      UserProgressCreateWithoutUserInput,
      UserProgressUncheckedCreateWithoutUserInput
    >;
    connectOrCreate?: UserProgressCreateOrConnectWithoutUserInput;
    connect?: UserProgressWhereUniqueInput;
  };

  export type UserAchievementUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          UserAchievementCreateWithoutUserInput,
          UserAchievementUncheckedCreateWithoutUserInput
        >
      | UserAchievementCreateWithoutUserInput[]
      | UserAchievementUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | UserAchievementCreateOrConnectWithoutUserInput
      | UserAchievementCreateOrConnectWithoutUserInput[];
    createMany?: UserAchievementCreateManyUserInputEnvelope;
    connect?:
      | UserAchievementWhereUniqueInput
      | UserAchievementWhereUniqueInput[];
  };

  export type UserLessonProgressUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          UserLessonProgressCreateWithoutUserInput,
          UserLessonProgressUncheckedCreateWithoutUserInput
        >
      | UserLessonProgressCreateWithoutUserInput[]
      | UserLessonProgressUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | UserLessonProgressCreateOrConnectWithoutUserInput
      | UserLessonProgressCreateOrConnectWithoutUserInput[];
    createMany?: UserLessonProgressCreateManyUserInputEnvelope;
    connect?:
      | UserLessonProgressWhereUniqueInput
      | UserLessonProgressWhereUniqueInput[];
  };

  export type DailyActivityLogUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          DailyActivityLogCreateWithoutUserInput,
          DailyActivityLogUncheckedCreateWithoutUserInput
        >
      | DailyActivityLogCreateWithoutUserInput[]
      | DailyActivityLogUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | DailyActivityLogCreateOrConnectWithoutUserInput
      | DailyActivityLogCreateOrConnectWithoutUserInput[];
    createMany?: DailyActivityLogCreateManyUserInputEnvelope;
    connect?:
      | DailyActivityLogWhereUniqueInput
      | DailyActivityLogWhereUniqueInput[];
  };

  export type QuizResultUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          QuizResultCreateWithoutUserInput,
          QuizResultUncheckedCreateWithoutUserInput
        >
      | QuizResultCreateWithoutUserInput[]
      | QuizResultUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | QuizResultCreateOrConnectWithoutUserInput
      | QuizResultCreateOrConnectWithoutUserInput[];
    createMany?: QuizResultCreateManyUserInputEnvelope;
    connect?: QuizResultWhereUniqueInput | QuizResultWhereUniqueInput[];
  };

  export type LeaderboardEntryUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          LeaderboardEntryCreateWithoutUserInput,
          LeaderboardEntryUncheckedCreateWithoutUserInput
        >
      | LeaderboardEntryCreateWithoutUserInput[]
      | LeaderboardEntryUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | LeaderboardEntryCreateOrConnectWithoutUserInput
      | LeaderboardEntryCreateOrConnectWithoutUserInput[];
    createMany?: LeaderboardEntryCreateManyUserInputEnvelope;
    connect?:
      | LeaderboardEntryWhereUniqueInput
      | LeaderboardEntryWhereUniqueInput[];
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type UserProgressUpdateOneWithoutUserNestedInput = {
    create?: XOR<
      UserProgressCreateWithoutUserInput,
      UserProgressUncheckedCreateWithoutUserInput
    >;
    connectOrCreate?: UserProgressCreateOrConnectWithoutUserInput;
    upsert?: UserProgressUpsertWithoutUserInput;
    disconnect?: UserProgressWhereInput | boolean;
    delete?: UserProgressWhereInput | boolean;
    connect?: UserProgressWhereUniqueInput;
    update?: XOR<
      XOR<
        UserProgressUpdateToOneWithWhereWithoutUserInput,
        UserProgressUpdateWithoutUserInput
      >,
      UserProgressUncheckedUpdateWithoutUserInput
    >;
  };

  export type UserAchievementUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          UserAchievementCreateWithoutUserInput,
          UserAchievementUncheckedCreateWithoutUserInput
        >
      | UserAchievementCreateWithoutUserInput[]
      | UserAchievementUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | UserAchievementCreateOrConnectWithoutUserInput
      | UserAchievementCreateOrConnectWithoutUserInput[];
    upsert?:
      | UserAchievementUpsertWithWhereUniqueWithoutUserInput
      | UserAchievementUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: UserAchievementCreateManyUserInputEnvelope;
    set?: UserAchievementWhereUniqueInput | UserAchievementWhereUniqueInput[];
    disconnect?:
      | UserAchievementWhereUniqueInput
      | UserAchievementWhereUniqueInput[];
    delete?:
      | UserAchievementWhereUniqueInput
      | UserAchievementWhereUniqueInput[];
    connect?:
      | UserAchievementWhereUniqueInput
      | UserAchievementWhereUniqueInput[];
    update?:
      | UserAchievementUpdateWithWhereUniqueWithoutUserInput
      | UserAchievementUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | UserAchievementUpdateManyWithWhereWithoutUserInput
      | UserAchievementUpdateManyWithWhereWithoutUserInput[];
    deleteMany?:
      | UserAchievementScalarWhereInput
      | UserAchievementScalarWhereInput[];
  };

  export type UserLessonProgressUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          UserLessonProgressCreateWithoutUserInput,
          UserLessonProgressUncheckedCreateWithoutUserInput
        >
      | UserLessonProgressCreateWithoutUserInput[]
      | UserLessonProgressUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | UserLessonProgressCreateOrConnectWithoutUserInput
      | UserLessonProgressCreateOrConnectWithoutUserInput[];
    upsert?:
      | UserLessonProgressUpsertWithWhereUniqueWithoutUserInput
      | UserLessonProgressUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: UserLessonProgressCreateManyUserInputEnvelope;
    set?:
      | UserLessonProgressWhereUniqueInput
      | UserLessonProgressWhereUniqueInput[];
    disconnect?:
      | UserLessonProgressWhereUniqueInput
      | UserLessonProgressWhereUniqueInput[];
    delete?:
      | UserLessonProgressWhereUniqueInput
      | UserLessonProgressWhereUniqueInput[];
    connect?:
      | UserLessonProgressWhereUniqueInput
      | UserLessonProgressWhereUniqueInput[];
    update?:
      | UserLessonProgressUpdateWithWhereUniqueWithoutUserInput
      | UserLessonProgressUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | UserLessonProgressUpdateManyWithWhereWithoutUserInput
      | UserLessonProgressUpdateManyWithWhereWithoutUserInput[];
    deleteMany?:
      | UserLessonProgressScalarWhereInput
      | UserLessonProgressScalarWhereInput[];
  };

  export type DailyActivityLogUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          DailyActivityLogCreateWithoutUserInput,
          DailyActivityLogUncheckedCreateWithoutUserInput
        >
      | DailyActivityLogCreateWithoutUserInput[]
      | DailyActivityLogUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | DailyActivityLogCreateOrConnectWithoutUserInput
      | DailyActivityLogCreateOrConnectWithoutUserInput[];
    upsert?:
      | DailyActivityLogUpsertWithWhereUniqueWithoutUserInput
      | DailyActivityLogUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: DailyActivityLogCreateManyUserInputEnvelope;
    set?: DailyActivityLogWhereUniqueInput | DailyActivityLogWhereUniqueInput[];
    disconnect?:
      | DailyActivityLogWhereUniqueInput
      | DailyActivityLogWhereUniqueInput[];
    delete?:
      | DailyActivityLogWhereUniqueInput
      | DailyActivityLogWhereUniqueInput[];
    connect?:
      | DailyActivityLogWhereUniqueInput
      | DailyActivityLogWhereUniqueInput[];
    update?:
      | DailyActivityLogUpdateWithWhereUniqueWithoutUserInput
      | DailyActivityLogUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | DailyActivityLogUpdateManyWithWhereWithoutUserInput
      | DailyActivityLogUpdateManyWithWhereWithoutUserInput[];
    deleteMany?:
      | DailyActivityLogScalarWhereInput
      | DailyActivityLogScalarWhereInput[];
  };

  export type QuizResultUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          QuizResultCreateWithoutUserInput,
          QuizResultUncheckedCreateWithoutUserInput
        >
      | QuizResultCreateWithoutUserInput[]
      | QuizResultUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | QuizResultCreateOrConnectWithoutUserInput
      | QuizResultCreateOrConnectWithoutUserInput[];
    upsert?:
      | QuizResultUpsertWithWhereUniqueWithoutUserInput
      | QuizResultUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: QuizResultCreateManyUserInputEnvelope;
    set?: QuizResultWhereUniqueInput | QuizResultWhereUniqueInput[];
    disconnect?: QuizResultWhereUniqueInput | QuizResultWhereUniqueInput[];
    delete?: QuizResultWhereUniqueInput | QuizResultWhereUniqueInput[];
    connect?: QuizResultWhereUniqueInput | QuizResultWhereUniqueInput[];
    update?:
      | QuizResultUpdateWithWhereUniqueWithoutUserInput
      | QuizResultUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | QuizResultUpdateManyWithWhereWithoutUserInput
      | QuizResultUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: QuizResultScalarWhereInput | QuizResultScalarWhereInput[];
  };

  export type LeaderboardEntryUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          LeaderboardEntryCreateWithoutUserInput,
          LeaderboardEntryUncheckedCreateWithoutUserInput
        >
      | LeaderboardEntryCreateWithoutUserInput[]
      | LeaderboardEntryUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | LeaderboardEntryCreateOrConnectWithoutUserInput
      | LeaderboardEntryCreateOrConnectWithoutUserInput[];
    upsert?:
      | LeaderboardEntryUpsertWithWhereUniqueWithoutUserInput
      | LeaderboardEntryUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: LeaderboardEntryCreateManyUserInputEnvelope;
    set?: LeaderboardEntryWhereUniqueInput | LeaderboardEntryWhereUniqueInput[];
    disconnect?:
      | LeaderboardEntryWhereUniqueInput
      | LeaderboardEntryWhereUniqueInput[];
    delete?:
      | LeaderboardEntryWhereUniqueInput
      | LeaderboardEntryWhereUniqueInput[];
    connect?:
      | LeaderboardEntryWhereUniqueInput
      | LeaderboardEntryWhereUniqueInput[];
    update?:
      | LeaderboardEntryUpdateWithWhereUniqueWithoutUserInput
      | LeaderboardEntryUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | LeaderboardEntryUpdateManyWithWhereWithoutUserInput
      | LeaderboardEntryUpdateManyWithWhereWithoutUserInput[];
    deleteMany?:
      | LeaderboardEntryScalarWhereInput
      | LeaderboardEntryScalarWhereInput[];
  };

  export type TeamUpdateOneWithoutMembersNestedInput = {
    create?: XOR<
      TeamCreateWithoutMembersInput,
      TeamUncheckedCreateWithoutMembersInput
    >;
    connectOrCreate?: TeamCreateOrConnectWithoutMembersInput;
    upsert?: TeamUpsertWithoutMembersInput;
    disconnect?: TeamWhereInput | boolean;
    delete?: TeamWhereInput | boolean;
    connect?: TeamWhereUniqueInput;
    update?: XOR<
      XOR<
        TeamUpdateToOneWithWhereWithoutMembersInput,
        TeamUpdateWithoutMembersInput
      >,
      TeamUncheckedUpdateWithoutMembersInput
    >;
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type UserProgressUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<
      UserProgressCreateWithoutUserInput,
      UserProgressUncheckedCreateWithoutUserInput
    >;
    connectOrCreate?: UserProgressCreateOrConnectWithoutUserInput;
    upsert?: UserProgressUpsertWithoutUserInput;
    disconnect?: UserProgressWhereInput | boolean;
    delete?: UserProgressWhereInput | boolean;
    connect?: UserProgressWhereUniqueInput;
    update?: XOR<
      XOR<
        UserProgressUpdateToOneWithWhereWithoutUserInput,
        UserProgressUpdateWithoutUserInput
      >,
      UserProgressUncheckedUpdateWithoutUserInput
    >;
  };

  export type UserAchievementUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          UserAchievementCreateWithoutUserInput,
          UserAchievementUncheckedCreateWithoutUserInput
        >
      | UserAchievementCreateWithoutUserInput[]
      | UserAchievementUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | UserAchievementCreateOrConnectWithoutUserInput
      | UserAchievementCreateOrConnectWithoutUserInput[];
    upsert?:
      | UserAchievementUpsertWithWhereUniqueWithoutUserInput
      | UserAchievementUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: UserAchievementCreateManyUserInputEnvelope;
    set?: UserAchievementWhereUniqueInput | UserAchievementWhereUniqueInput[];
    disconnect?:
      | UserAchievementWhereUniqueInput
      | UserAchievementWhereUniqueInput[];
    delete?:
      | UserAchievementWhereUniqueInput
      | UserAchievementWhereUniqueInput[];
    connect?:
      | UserAchievementWhereUniqueInput
      | UserAchievementWhereUniqueInput[];
    update?:
      | UserAchievementUpdateWithWhereUniqueWithoutUserInput
      | UserAchievementUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | UserAchievementUpdateManyWithWhereWithoutUserInput
      | UserAchievementUpdateManyWithWhereWithoutUserInput[];
    deleteMany?:
      | UserAchievementScalarWhereInput
      | UserAchievementScalarWhereInput[];
  };

  export type UserLessonProgressUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          UserLessonProgressCreateWithoutUserInput,
          UserLessonProgressUncheckedCreateWithoutUserInput
        >
      | UserLessonProgressCreateWithoutUserInput[]
      | UserLessonProgressUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | UserLessonProgressCreateOrConnectWithoutUserInput
      | UserLessonProgressCreateOrConnectWithoutUserInput[];
    upsert?:
      | UserLessonProgressUpsertWithWhereUniqueWithoutUserInput
      | UserLessonProgressUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: UserLessonProgressCreateManyUserInputEnvelope;
    set?:
      | UserLessonProgressWhereUniqueInput
      | UserLessonProgressWhereUniqueInput[];
    disconnect?:
      | UserLessonProgressWhereUniqueInput
      | UserLessonProgressWhereUniqueInput[];
    delete?:
      | UserLessonProgressWhereUniqueInput
      | UserLessonProgressWhereUniqueInput[];
    connect?:
      | UserLessonProgressWhereUniqueInput
      | UserLessonProgressWhereUniqueInput[];
    update?:
      | UserLessonProgressUpdateWithWhereUniqueWithoutUserInput
      | UserLessonProgressUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | UserLessonProgressUpdateManyWithWhereWithoutUserInput
      | UserLessonProgressUpdateManyWithWhereWithoutUserInput[];
    deleteMany?:
      | UserLessonProgressScalarWhereInput
      | UserLessonProgressScalarWhereInput[];
  };

  export type DailyActivityLogUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          DailyActivityLogCreateWithoutUserInput,
          DailyActivityLogUncheckedCreateWithoutUserInput
        >
      | DailyActivityLogCreateWithoutUserInput[]
      | DailyActivityLogUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | DailyActivityLogCreateOrConnectWithoutUserInput
      | DailyActivityLogCreateOrConnectWithoutUserInput[];
    upsert?:
      | DailyActivityLogUpsertWithWhereUniqueWithoutUserInput
      | DailyActivityLogUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: DailyActivityLogCreateManyUserInputEnvelope;
    set?: DailyActivityLogWhereUniqueInput | DailyActivityLogWhereUniqueInput[];
    disconnect?:
      | DailyActivityLogWhereUniqueInput
      | DailyActivityLogWhereUniqueInput[];
    delete?:
      | DailyActivityLogWhereUniqueInput
      | DailyActivityLogWhereUniqueInput[];
    connect?:
      | DailyActivityLogWhereUniqueInput
      | DailyActivityLogWhereUniqueInput[];
    update?:
      | DailyActivityLogUpdateWithWhereUniqueWithoutUserInput
      | DailyActivityLogUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | DailyActivityLogUpdateManyWithWhereWithoutUserInput
      | DailyActivityLogUpdateManyWithWhereWithoutUserInput[];
    deleteMany?:
      | DailyActivityLogScalarWhereInput
      | DailyActivityLogScalarWhereInput[];
  };

  export type QuizResultUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          QuizResultCreateWithoutUserInput,
          QuizResultUncheckedCreateWithoutUserInput
        >
      | QuizResultCreateWithoutUserInput[]
      | QuizResultUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | QuizResultCreateOrConnectWithoutUserInput
      | QuizResultCreateOrConnectWithoutUserInput[];
    upsert?:
      | QuizResultUpsertWithWhereUniqueWithoutUserInput
      | QuizResultUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: QuizResultCreateManyUserInputEnvelope;
    set?: QuizResultWhereUniqueInput | QuizResultWhereUniqueInput[];
    disconnect?: QuizResultWhereUniqueInput | QuizResultWhereUniqueInput[];
    delete?: QuizResultWhereUniqueInput | QuizResultWhereUniqueInput[];
    connect?: QuizResultWhereUniqueInput | QuizResultWhereUniqueInput[];
    update?:
      | QuizResultUpdateWithWhereUniqueWithoutUserInput
      | QuizResultUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | QuizResultUpdateManyWithWhereWithoutUserInput
      | QuizResultUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: QuizResultScalarWhereInput | QuizResultScalarWhereInput[];
  };

  export type LeaderboardEntryUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          LeaderboardEntryCreateWithoutUserInput,
          LeaderboardEntryUncheckedCreateWithoutUserInput
        >
      | LeaderboardEntryCreateWithoutUserInput[]
      | LeaderboardEntryUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | LeaderboardEntryCreateOrConnectWithoutUserInput
      | LeaderboardEntryCreateOrConnectWithoutUserInput[];
    upsert?:
      | LeaderboardEntryUpsertWithWhereUniqueWithoutUserInput
      | LeaderboardEntryUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: LeaderboardEntryCreateManyUserInputEnvelope;
    set?: LeaderboardEntryWhereUniqueInput | LeaderboardEntryWhereUniqueInput[];
    disconnect?:
      | LeaderboardEntryWhereUniqueInput
      | LeaderboardEntryWhereUniqueInput[];
    delete?:
      | LeaderboardEntryWhereUniqueInput
      | LeaderboardEntryWhereUniqueInput[];
    connect?:
      | LeaderboardEntryWhereUniqueInput
      | LeaderboardEntryWhereUniqueInput[];
    update?:
      | LeaderboardEntryUpdateWithWhereUniqueWithoutUserInput
      | LeaderboardEntryUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | LeaderboardEntryUpdateManyWithWhereWithoutUserInput
      | LeaderboardEntryUpdateManyWithWhereWithoutUserInput[];
    deleteMany?:
      | LeaderboardEntryScalarWhereInput
      | LeaderboardEntryScalarWhereInput[];
  };

  export type UserCreateNestedOneWithoutProgressInput = {
    create?: XOR<
      UserCreateWithoutProgressInput,
      UserUncheckedCreateWithoutProgressInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutProgressInput;
    connect?: UserWhereUniqueInput;
  };

  export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type UserUpdateOneRequiredWithoutProgressNestedInput = {
    create?: XOR<
      UserCreateWithoutProgressInput,
      UserUncheckedCreateWithoutProgressInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutProgressInput;
    upsert?: UserUpsertWithoutProgressInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutProgressInput,
        UserUpdateWithoutProgressInput
      >,
      UserUncheckedUpdateWithoutProgressInput
    >;
  };

  export type UserAchievementCreateNestedManyWithoutAchievementInput = {
    create?:
      | XOR<
          UserAchievementCreateWithoutAchievementInput,
          UserAchievementUncheckedCreateWithoutAchievementInput
        >
      | UserAchievementCreateWithoutAchievementInput[]
      | UserAchievementUncheckedCreateWithoutAchievementInput[];
    connectOrCreate?:
      | UserAchievementCreateOrConnectWithoutAchievementInput
      | UserAchievementCreateOrConnectWithoutAchievementInput[];
    createMany?: UserAchievementCreateManyAchievementInputEnvelope;
    connect?:
      | UserAchievementWhereUniqueInput
      | UserAchievementWhereUniqueInput[];
  };

  export type UserAchievementUncheckedCreateNestedManyWithoutAchievementInput =
    {
      create?:
        | XOR<
            UserAchievementCreateWithoutAchievementInput,
            UserAchievementUncheckedCreateWithoutAchievementInput
          >
        | UserAchievementCreateWithoutAchievementInput[]
        | UserAchievementUncheckedCreateWithoutAchievementInput[];
      connectOrCreate?:
        | UserAchievementCreateOrConnectWithoutAchievementInput
        | UserAchievementCreateOrConnectWithoutAchievementInput[];
      createMany?: UserAchievementCreateManyAchievementInputEnvelope;
      connect?:
        | UserAchievementWhereUniqueInput
        | UserAchievementWhereUniqueInput[];
    };

  export type UserAchievementUpdateManyWithoutAchievementNestedInput = {
    create?:
      | XOR<
          UserAchievementCreateWithoutAchievementInput,
          UserAchievementUncheckedCreateWithoutAchievementInput
        >
      | UserAchievementCreateWithoutAchievementInput[]
      | UserAchievementUncheckedCreateWithoutAchievementInput[];
    connectOrCreate?:
      | UserAchievementCreateOrConnectWithoutAchievementInput
      | UserAchievementCreateOrConnectWithoutAchievementInput[];
    upsert?:
      | UserAchievementUpsertWithWhereUniqueWithoutAchievementInput
      | UserAchievementUpsertWithWhereUniqueWithoutAchievementInput[];
    createMany?: UserAchievementCreateManyAchievementInputEnvelope;
    set?: UserAchievementWhereUniqueInput | UserAchievementWhereUniqueInput[];
    disconnect?:
      | UserAchievementWhereUniqueInput
      | UserAchievementWhereUniqueInput[];
    delete?:
      | UserAchievementWhereUniqueInput
      | UserAchievementWhereUniqueInput[];
    connect?:
      | UserAchievementWhereUniqueInput
      | UserAchievementWhereUniqueInput[];
    update?:
      | UserAchievementUpdateWithWhereUniqueWithoutAchievementInput
      | UserAchievementUpdateWithWhereUniqueWithoutAchievementInput[];
    updateMany?:
      | UserAchievementUpdateManyWithWhereWithoutAchievementInput
      | UserAchievementUpdateManyWithWhereWithoutAchievementInput[];
    deleteMany?:
      | UserAchievementScalarWhereInput
      | UserAchievementScalarWhereInput[];
  };

  export type UserAchievementUncheckedUpdateManyWithoutAchievementNestedInput =
    {
      create?:
        | XOR<
            UserAchievementCreateWithoutAchievementInput,
            UserAchievementUncheckedCreateWithoutAchievementInput
          >
        | UserAchievementCreateWithoutAchievementInput[]
        | UserAchievementUncheckedCreateWithoutAchievementInput[];
      connectOrCreate?:
        | UserAchievementCreateOrConnectWithoutAchievementInput
        | UserAchievementCreateOrConnectWithoutAchievementInput[];
      upsert?:
        | UserAchievementUpsertWithWhereUniqueWithoutAchievementInput
        | UserAchievementUpsertWithWhereUniqueWithoutAchievementInput[];
      createMany?: UserAchievementCreateManyAchievementInputEnvelope;
      set?: UserAchievementWhereUniqueInput | UserAchievementWhereUniqueInput[];
      disconnect?:
        | UserAchievementWhereUniqueInput
        | UserAchievementWhereUniqueInput[];
      delete?:
        | UserAchievementWhereUniqueInput
        | UserAchievementWhereUniqueInput[];
      connect?:
        | UserAchievementWhereUniqueInput
        | UserAchievementWhereUniqueInput[];
      update?:
        | UserAchievementUpdateWithWhereUniqueWithoutAchievementInput
        | UserAchievementUpdateWithWhereUniqueWithoutAchievementInput[];
      updateMany?:
        | UserAchievementUpdateManyWithWhereWithoutAchievementInput
        | UserAchievementUpdateManyWithWhereWithoutAchievementInput[];
      deleteMany?:
        | UserAchievementScalarWhereInput
        | UserAchievementScalarWhereInput[];
    };

  export type UserCreateNestedOneWithoutAchievementsInput = {
    create?: XOR<
      UserCreateWithoutAchievementsInput,
      UserUncheckedCreateWithoutAchievementsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutAchievementsInput;
    connect?: UserWhereUniqueInput;
  };

  export type AchievementCreateNestedOneWithoutUsersInput = {
    create?: XOR<
      AchievementCreateWithoutUsersInput,
      AchievementUncheckedCreateWithoutUsersInput
    >;
    connectOrCreate?: AchievementCreateOrConnectWithoutUsersInput;
    connect?: AchievementWhereUniqueInput;
  };

  export type UserUpdateOneRequiredWithoutAchievementsNestedInput = {
    create?: XOR<
      UserCreateWithoutAchievementsInput,
      UserUncheckedCreateWithoutAchievementsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutAchievementsInput;
    upsert?: UserUpsertWithoutAchievementsInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutAchievementsInput,
        UserUpdateWithoutAchievementsInput
      >,
      UserUncheckedUpdateWithoutAchievementsInput
    >;
  };

  export type AchievementUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<
      AchievementCreateWithoutUsersInput,
      AchievementUncheckedCreateWithoutUsersInput
    >;
    connectOrCreate?: AchievementCreateOrConnectWithoutUsersInput;
    upsert?: AchievementUpsertWithoutUsersInput;
    connect?: AchievementWhereUniqueInput;
    update?: XOR<
      XOR<
        AchievementUpdateToOneWithWhereWithoutUsersInput,
        AchievementUpdateWithoutUsersInput
      >,
      AchievementUncheckedUpdateWithoutUsersInput
    >;
  };

  export type UserCreateNestedManyWithoutTeamInput = {
    create?:
      | XOR<UserCreateWithoutTeamInput, UserUncheckedCreateWithoutTeamInput>
      | UserCreateWithoutTeamInput[]
      | UserUncheckedCreateWithoutTeamInput[];
    connectOrCreate?:
      | UserCreateOrConnectWithoutTeamInput
      | UserCreateOrConnectWithoutTeamInput[];
    createMany?: UserCreateManyTeamInputEnvelope;
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[];
  };

  export type TeamBattleResultCreateNestedManyWithoutTeamInput = {
    create?:
      | XOR<
          TeamBattleResultCreateWithoutTeamInput,
          TeamBattleResultUncheckedCreateWithoutTeamInput
        >
      | TeamBattleResultCreateWithoutTeamInput[]
      | TeamBattleResultUncheckedCreateWithoutTeamInput[];
    connectOrCreate?:
      | TeamBattleResultCreateOrConnectWithoutTeamInput
      | TeamBattleResultCreateOrConnectWithoutTeamInput[];
    createMany?: TeamBattleResultCreateManyTeamInputEnvelope;
    connect?:
      | TeamBattleResultWhereUniqueInput
      | TeamBattleResultWhereUniqueInput[];
  };

  export type UserUncheckedCreateNestedManyWithoutTeamInput = {
    create?:
      | XOR<UserCreateWithoutTeamInput, UserUncheckedCreateWithoutTeamInput>
      | UserCreateWithoutTeamInput[]
      | UserUncheckedCreateWithoutTeamInput[];
    connectOrCreate?:
      | UserCreateOrConnectWithoutTeamInput
      | UserCreateOrConnectWithoutTeamInput[];
    createMany?: UserCreateManyTeamInputEnvelope;
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[];
  };

  export type TeamBattleResultUncheckedCreateNestedManyWithoutTeamInput = {
    create?:
      | XOR<
          TeamBattleResultCreateWithoutTeamInput,
          TeamBattleResultUncheckedCreateWithoutTeamInput
        >
      | TeamBattleResultCreateWithoutTeamInput[]
      | TeamBattleResultUncheckedCreateWithoutTeamInput[];
    connectOrCreate?:
      | TeamBattleResultCreateOrConnectWithoutTeamInput
      | TeamBattleResultCreateOrConnectWithoutTeamInput[];
    createMany?: TeamBattleResultCreateManyTeamInputEnvelope;
    connect?:
      | TeamBattleResultWhereUniqueInput
      | TeamBattleResultWhereUniqueInput[];
  };

  export type UserUpdateManyWithoutTeamNestedInput = {
    create?:
      | XOR<UserCreateWithoutTeamInput, UserUncheckedCreateWithoutTeamInput>
      | UserCreateWithoutTeamInput[]
      | UserUncheckedCreateWithoutTeamInput[];
    connectOrCreate?:
      | UserCreateOrConnectWithoutTeamInput
      | UserCreateOrConnectWithoutTeamInput[];
    upsert?:
      | UserUpsertWithWhereUniqueWithoutTeamInput
      | UserUpsertWithWhereUniqueWithoutTeamInput[];
    createMany?: UserCreateManyTeamInputEnvelope;
    set?: UserWhereUniqueInput | UserWhereUniqueInput[];
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[];
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[];
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[];
    update?:
      | UserUpdateWithWhereUniqueWithoutTeamInput
      | UserUpdateWithWhereUniqueWithoutTeamInput[];
    updateMany?:
      | UserUpdateManyWithWhereWithoutTeamInput
      | UserUpdateManyWithWhereWithoutTeamInput[];
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[];
  };

  export type TeamBattleResultUpdateManyWithoutTeamNestedInput = {
    create?:
      | XOR<
          TeamBattleResultCreateWithoutTeamInput,
          TeamBattleResultUncheckedCreateWithoutTeamInput
        >
      | TeamBattleResultCreateWithoutTeamInput[]
      | TeamBattleResultUncheckedCreateWithoutTeamInput[];
    connectOrCreate?:
      | TeamBattleResultCreateOrConnectWithoutTeamInput
      | TeamBattleResultCreateOrConnectWithoutTeamInput[];
    upsert?:
      | TeamBattleResultUpsertWithWhereUniqueWithoutTeamInput
      | TeamBattleResultUpsertWithWhereUniqueWithoutTeamInput[];
    createMany?: TeamBattleResultCreateManyTeamInputEnvelope;
    set?: TeamBattleResultWhereUniqueInput | TeamBattleResultWhereUniqueInput[];
    disconnect?:
      | TeamBattleResultWhereUniqueInput
      | TeamBattleResultWhereUniqueInput[];
    delete?:
      | TeamBattleResultWhereUniqueInput
      | TeamBattleResultWhereUniqueInput[];
    connect?:
      | TeamBattleResultWhereUniqueInput
      | TeamBattleResultWhereUniqueInput[];
    update?:
      | TeamBattleResultUpdateWithWhereUniqueWithoutTeamInput
      | TeamBattleResultUpdateWithWhereUniqueWithoutTeamInput[];
    updateMany?:
      | TeamBattleResultUpdateManyWithWhereWithoutTeamInput
      | TeamBattleResultUpdateManyWithWhereWithoutTeamInput[];
    deleteMany?:
      | TeamBattleResultScalarWhereInput
      | TeamBattleResultScalarWhereInput[];
  };

  export type UserUncheckedUpdateManyWithoutTeamNestedInput = {
    create?:
      | XOR<UserCreateWithoutTeamInput, UserUncheckedCreateWithoutTeamInput>
      | UserCreateWithoutTeamInput[]
      | UserUncheckedCreateWithoutTeamInput[];
    connectOrCreate?:
      | UserCreateOrConnectWithoutTeamInput
      | UserCreateOrConnectWithoutTeamInput[];
    upsert?:
      | UserUpsertWithWhereUniqueWithoutTeamInput
      | UserUpsertWithWhereUniqueWithoutTeamInput[];
    createMany?: UserCreateManyTeamInputEnvelope;
    set?: UserWhereUniqueInput | UserWhereUniqueInput[];
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[];
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[];
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[];
    update?:
      | UserUpdateWithWhereUniqueWithoutTeamInput
      | UserUpdateWithWhereUniqueWithoutTeamInput[];
    updateMany?:
      | UserUpdateManyWithWhereWithoutTeamInput
      | UserUpdateManyWithWhereWithoutTeamInput[];
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[];
  };

  export type TeamBattleResultUncheckedUpdateManyWithoutTeamNestedInput = {
    create?:
      | XOR<
          TeamBattleResultCreateWithoutTeamInput,
          TeamBattleResultUncheckedCreateWithoutTeamInput
        >
      | TeamBattleResultCreateWithoutTeamInput[]
      | TeamBattleResultUncheckedCreateWithoutTeamInput[];
    connectOrCreate?:
      | TeamBattleResultCreateOrConnectWithoutTeamInput
      | TeamBattleResultCreateOrConnectWithoutTeamInput[];
    upsert?:
      | TeamBattleResultUpsertWithWhereUniqueWithoutTeamInput
      | TeamBattleResultUpsertWithWhereUniqueWithoutTeamInput[];
    createMany?: TeamBattleResultCreateManyTeamInputEnvelope;
    set?: TeamBattleResultWhereUniqueInput | TeamBattleResultWhereUniqueInput[];
    disconnect?:
      | TeamBattleResultWhereUniqueInput
      | TeamBattleResultWhereUniqueInput[];
    delete?:
      | TeamBattleResultWhereUniqueInput
      | TeamBattleResultWhereUniqueInput[];
    connect?:
      | TeamBattleResultWhereUniqueInput
      | TeamBattleResultWhereUniqueInput[];
    update?:
      | TeamBattleResultUpdateWithWhereUniqueWithoutTeamInput
      | TeamBattleResultUpdateWithWhereUniqueWithoutTeamInput[];
    updateMany?:
      | TeamBattleResultUpdateManyWithWhereWithoutTeamInput
      | TeamBattleResultUpdateManyWithWhereWithoutTeamInput[];
    deleteMany?:
      | TeamBattleResultScalarWhereInput
      | TeamBattleResultScalarWhereInput[];
  };

  export type TeamCreateNestedOneWithoutResultsInput = {
    create?: XOR<
      TeamCreateWithoutResultsInput,
      TeamUncheckedCreateWithoutResultsInput
    >;
    connectOrCreate?: TeamCreateOrConnectWithoutResultsInput;
    connect?: TeamWhereUniqueInput;
  };

  export type TeamUpdateOneRequiredWithoutResultsNestedInput = {
    create?: XOR<
      TeamCreateWithoutResultsInput,
      TeamUncheckedCreateWithoutResultsInput
    >;
    connectOrCreate?: TeamCreateOrConnectWithoutResultsInput;
    upsert?: TeamUpsertWithoutResultsInput;
    connect?: TeamWhereUniqueInput;
    update?: XOR<
      XOR<
        TeamUpdateToOneWithWhereWithoutResultsInput,
        TeamUpdateWithoutResultsInput
      >,
      TeamUncheckedUpdateWithoutResultsInput
    >;
  };

  export type UserLessonProgressCreateNestedManyWithoutLessonInput = {
    create?:
      | XOR<
          UserLessonProgressCreateWithoutLessonInput,
          UserLessonProgressUncheckedCreateWithoutLessonInput
        >
      | UserLessonProgressCreateWithoutLessonInput[]
      | UserLessonProgressUncheckedCreateWithoutLessonInput[];
    connectOrCreate?:
      | UserLessonProgressCreateOrConnectWithoutLessonInput
      | UserLessonProgressCreateOrConnectWithoutLessonInput[];
    createMany?: UserLessonProgressCreateManyLessonInputEnvelope;
    connect?:
      | UserLessonProgressWhereUniqueInput
      | UserLessonProgressWhereUniqueInput[];
  };

  export type UserLessonProgressUncheckedCreateNestedManyWithoutLessonInput = {
    create?:
      | XOR<
          UserLessonProgressCreateWithoutLessonInput,
          UserLessonProgressUncheckedCreateWithoutLessonInput
        >
      | UserLessonProgressCreateWithoutLessonInput[]
      | UserLessonProgressUncheckedCreateWithoutLessonInput[];
    connectOrCreate?:
      | UserLessonProgressCreateOrConnectWithoutLessonInput
      | UserLessonProgressCreateOrConnectWithoutLessonInput[];
    createMany?: UserLessonProgressCreateManyLessonInputEnvelope;
    connect?:
      | UserLessonProgressWhereUniqueInput
      | UserLessonProgressWhereUniqueInput[];
  };

  export type UserLessonProgressUpdateManyWithoutLessonNestedInput = {
    create?:
      | XOR<
          UserLessonProgressCreateWithoutLessonInput,
          UserLessonProgressUncheckedCreateWithoutLessonInput
        >
      | UserLessonProgressCreateWithoutLessonInput[]
      | UserLessonProgressUncheckedCreateWithoutLessonInput[];
    connectOrCreate?:
      | UserLessonProgressCreateOrConnectWithoutLessonInput
      | UserLessonProgressCreateOrConnectWithoutLessonInput[];
    upsert?:
      | UserLessonProgressUpsertWithWhereUniqueWithoutLessonInput
      | UserLessonProgressUpsertWithWhereUniqueWithoutLessonInput[];
    createMany?: UserLessonProgressCreateManyLessonInputEnvelope;
    set?:
      | UserLessonProgressWhereUniqueInput
      | UserLessonProgressWhereUniqueInput[];
    disconnect?:
      | UserLessonProgressWhereUniqueInput
      | UserLessonProgressWhereUniqueInput[];
    delete?:
      | UserLessonProgressWhereUniqueInput
      | UserLessonProgressWhereUniqueInput[];
    connect?:
      | UserLessonProgressWhereUniqueInput
      | UserLessonProgressWhereUniqueInput[];
    update?:
      | UserLessonProgressUpdateWithWhereUniqueWithoutLessonInput
      | UserLessonProgressUpdateWithWhereUniqueWithoutLessonInput[];
    updateMany?:
      | UserLessonProgressUpdateManyWithWhereWithoutLessonInput
      | UserLessonProgressUpdateManyWithWhereWithoutLessonInput[];
    deleteMany?:
      | UserLessonProgressScalarWhereInput
      | UserLessonProgressScalarWhereInput[];
  };

  export type UserLessonProgressUncheckedUpdateManyWithoutLessonNestedInput = {
    create?:
      | XOR<
          UserLessonProgressCreateWithoutLessonInput,
          UserLessonProgressUncheckedCreateWithoutLessonInput
        >
      | UserLessonProgressCreateWithoutLessonInput[]
      | UserLessonProgressUncheckedCreateWithoutLessonInput[];
    connectOrCreate?:
      | UserLessonProgressCreateOrConnectWithoutLessonInput
      | UserLessonProgressCreateOrConnectWithoutLessonInput[];
    upsert?:
      | UserLessonProgressUpsertWithWhereUniqueWithoutLessonInput
      | UserLessonProgressUpsertWithWhereUniqueWithoutLessonInput[];
    createMany?: UserLessonProgressCreateManyLessonInputEnvelope;
    set?:
      | UserLessonProgressWhereUniqueInput
      | UserLessonProgressWhereUniqueInput[];
    disconnect?:
      | UserLessonProgressWhereUniqueInput
      | UserLessonProgressWhereUniqueInput[];
    delete?:
      | UserLessonProgressWhereUniqueInput
      | UserLessonProgressWhereUniqueInput[];
    connect?:
      | UserLessonProgressWhereUniqueInput
      | UserLessonProgressWhereUniqueInput[];
    update?:
      | UserLessonProgressUpdateWithWhereUniqueWithoutLessonInput
      | UserLessonProgressUpdateWithWhereUniqueWithoutLessonInput[];
    updateMany?:
      | UserLessonProgressUpdateManyWithWhereWithoutLessonInput
      | UserLessonProgressUpdateManyWithWhereWithoutLessonInput[];
    deleteMany?:
      | UserLessonProgressScalarWhereInput
      | UserLessonProgressScalarWhereInput[];
  };

  export type UserCreateNestedOneWithoutLessonProgressInput = {
    create?: XOR<
      UserCreateWithoutLessonProgressInput,
      UserUncheckedCreateWithoutLessonProgressInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutLessonProgressInput;
    connect?: UserWhereUniqueInput;
  };

  export type LessonCreateNestedOneWithoutProgressInput = {
    create?: XOR<
      LessonCreateWithoutProgressInput,
      LessonUncheckedCreateWithoutProgressInput
    >;
    connectOrCreate?: LessonCreateOrConnectWithoutProgressInput;
    connect?: LessonWhereUniqueInput;
  };

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
  };

  export type UserUpdateOneRequiredWithoutLessonProgressNestedInput = {
    create?: XOR<
      UserCreateWithoutLessonProgressInput,
      UserUncheckedCreateWithoutLessonProgressInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutLessonProgressInput;
    upsert?: UserUpsertWithoutLessonProgressInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutLessonProgressInput,
        UserUpdateWithoutLessonProgressInput
      >,
      UserUncheckedUpdateWithoutLessonProgressInput
    >;
  };

  export type LessonUpdateOneRequiredWithoutProgressNestedInput = {
    create?: XOR<
      LessonCreateWithoutProgressInput,
      LessonUncheckedCreateWithoutProgressInput
    >;
    connectOrCreate?: LessonCreateOrConnectWithoutProgressInput;
    upsert?: LessonUpsertWithoutProgressInput;
    connect?: LessonWhereUniqueInput;
    update?: XOR<
      XOR<
        LessonUpdateToOneWithWhereWithoutProgressInput,
        LessonUpdateWithoutProgressInput
      >,
      LessonUncheckedUpdateWithoutProgressInput
    >;
  };

  export type UserCreateNestedOneWithoutActivityLogsInput = {
    create?: XOR<
      UserCreateWithoutActivityLogsInput,
      UserUncheckedCreateWithoutActivityLogsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutActivityLogsInput;
    connect?: UserWhereUniqueInput;
  };

  export type UserUpdateOneRequiredWithoutActivityLogsNestedInput = {
    create?: XOR<
      UserCreateWithoutActivityLogsInput,
      UserUncheckedCreateWithoutActivityLogsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutActivityLogsInput;
    upsert?: UserUpsertWithoutActivityLogsInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutActivityLogsInput,
        UserUpdateWithoutActivityLogsInput
      >,
      UserUncheckedUpdateWithoutActivityLogsInput
    >;
  };

  export type UserCreateNestedOneWithoutQuizResultsInput = {
    create?: XOR<
      UserCreateWithoutQuizResultsInput,
      UserUncheckedCreateWithoutQuizResultsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutQuizResultsInput;
    connect?: UserWhereUniqueInput;
  };

  export type UserUpdateOneRequiredWithoutQuizResultsNestedInput = {
    create?: XOR<
      UserCreateWithoutQuizResultsInput,
      UserUncheckedCreateWithoutQuizResultsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutQuizResultsInput;
    upsert?: UserUpsertWithoutQuizResultsInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutQuizResultsInput,
        UserUpdateWithoutQuizResultsInput
      >,
      UserUncheckedUpdateWithoutQuizResultsInput
    >;
  };

  export type UserCreateNestedOneWithoutLeaderboardEntriesInput = {
    create?: XOR<
      UserCreateWithoutLeaderboardEntriesInput,
      UserUncheckedCreateWithoutLeaderboardEntriesInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutLeaderboardEntriesInput;
    connect?: UserWhereUniqueInput;
  };

  export type UserUpdateOneRequiredWithoutLeaderboardEntriesNestedInput = {
    create?: XOR<
      UserCreateWithoutLeaderboardEntriesInput,
      UserUncheckedCreateWithoutLeaderboardEntriesInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutLeaderboardEntriesInput;
    upsert?: UserUpsertWithoutLeaderboardEntriesInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutLeaderboardEntriesInput,
        UserUpdateWithoutLeaderboardEntriesInput
      >,
      UserUncheckedUpdateWithoutLeaderboardEntriesInput
    >;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolFilter<$PrismaModel> | boolean;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedBoolFilter<$PrismaModel>;
    _max?: NestedBoolFilter<$PrismaModel>;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?:
      | NestedStringNullableWithAggregatesFilter<$PrismaModel>
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedFloatNullableFilter<$PrismaModel>;
    _min?: NestedFloatNullableFilter<$PrismaModel>;
    _max?: NestedFloatNullableFilter<$PrismaModel>;
  };

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> =
    {
      equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
      in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
      notIn?:
        | Date[]
        | string[]
        | ListDateTimeFieldRefInput<$PrismaModel>
        | null;
      lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      not?:
        | NestedDateTimeNullableWithAggregatesFilter<$PrismaModel>
        | Date
        | string
        | null;
      _count?: NestedIntNullableFilter<$PrismaModel>;
      _min?: NestedDateTimeNullableFilter<$PrismaModel>;
      _max?: NestedDateTimeNullableFilter<$PrismaModel>;
    };

  export type UserProgressCreateWithoutUserInput = {
    id?: string;
    xp?: number;
    level?: number;
    streak?: number;
    accuracy?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type UserProgressUncheckedCreateWithoutUserInput = {
    id?: string;
    xp?: number;
    level?: number;
    streak?: number;
    accuracy?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type UserProgressCreateOrConnectWithoutUserInput = {
    where: UserProgressWhereUniqueInput;
    create: XOR<
      UserProgressCreateWithoutUserInput,
      UserProgressUncheckedCreateWithoutUserInput
    >;
  };

  export type UserAchievementCreateWithoutUserInput = {
    id?: string;
    achievedAt?: Date | string;
    achievement: AchievementCreateNestedOneWithoutUsersInput;
  };

  export type UserAchievementUncheckedCreateWithoutUserInput = {
    id?: string;
    achievementId: string;
    achievedAt?: Date | string;
  };

  export type UserAchievementCreateOrConnectWithoutUserInput = {
    where: UserAchievementWhereUniqueInput;
    create: XOR<
      UserAchievementCreateWithoutUserInput,
      UserAchievementUncheckedCreateWithoutUserInput
    >;
  };

  export type UserAchievementCreateManyUserInputEnvelope = {
    data:
      | UserAchievementCreateManyUserInput
      | UserAchievementCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type UserLessonProgressCreateWithoutUserInput = {
    id?: string;
    status?: string;
    completedAt?: Date | string | null;
    lesson: LessonCreateNestedOneWithoutProgressInput;
  };

  export type UserLessonProgressUncheckedCreateWithoutUserInput = {
    id?: string;
    lessonId: string;
    status?: string;
    completedAt?: Date | string | null;
  };

  export type UserLessonProgressCreateOrConnectWithoutUserInput = {
    where: UserLessonProgressWhereUniqueInput;
    create: XOR<
      UserLessonProgressCreateWithoutUserInput,
      UserLessonProgressUncheckedCreateWithoutUserInput
    >;
  };

  export type UserLessonProgressCreateManyUserInputEnvelope = {
    data:
      | UserLessonProgressCreateManyUserInput
      | UserLessonProgressCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type DailyActivityLogCreateWithoutUserInput = {
    id?: string;
    date: Date | string;
    activity: string;
  };

  export type DailyActivityLogUncheckedCreateWithoutUserInput = {
    id?: string;
    date: Date | string;
    activity: string;
  };

  export type DailyActivityLogCreateOrConnectWithoutUserInput = {
    where: DailyActivityLogWhereUniqueInput;
    create: XOR<
      DailyActivityLogCreateWithoutUserInput,
      DailyActivityLogUncheckedCreateWithoutUserInput
    >;
  };

  export type DailyActivityLogCreateManyUserInputEnvelope = {
    data:
      | DailyActivityLogCreateManyUserInput
      | DailyActivityLogCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type QuizResultCreateWithoutUserInput = {
    id?: string;
    score: number;
    total: number;
    passedAt?: Date | string;
  };

  export type QuizResultUncheckedCreateWithoutUserInput = {
    id?: string;
    score: number;
    total: number;
    passedAt?: Date | string;
  };

  export type QuizResultCreateOrConnectWithoutUserInput = {
    where: QuizResultWhereUniqueInput;
    create: XOR<
      QuizResultCreateWithoutUserInput,
      QuizResultUncheckedCreateWithoutUserInput
    >;
  };

  export type QuizResultCreateManyUserInputEnvelope = {
    data: QuizResultCreateManyUserInput | QuizResultCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type LeaderboardEntryCreateWithoutUserInput = {
    id?: string;
    xp: number;
    rank: number;
    snapshotDate: Date | string;
  };

  export type LeaderboardEntryUncheckedCreateWithoutUserInput = {
    id?: string;
    xp: number;
    rank: number;
    snapshotDate: Date | string;
  };

  export type LeaderboardEntryCreateOrConnectWithoutUserInput = {
    where: LeaderboardEntryWhereUniqueInput;
    create: XOR<
      LeaderboardEntryCreateWithoutUserInput,
      LeaderboardEntryUncheckedCreateWithoutUserInput
    >;
  };

  export type LeaderboardEntryCreateManyUserInputEnvelope = {
    data:
      | LeaderboardEntryCreateManyUserInput
      | LeaderboardEntryCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type TeamCreateWithoutMembersInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    results?: TeamBattleResultCreateNestedManyWithoutTeamInput;
  };

  export type TeamUncheckedCreateWithoutMembersInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    results?: TeamBattleResultUncheckedCreateNestedManyWithoutTeamInput;
  };

  export type TeamCreateOrConnectWithoutMembersInput = {
    where: TeamWhereUniqueInput;
    create: XOR<
      TeamCreateWithoutMembersInput,
      TeamUncheckedCreateWithoutMembersInput
    >;
  };

  export type UserProgressUpsertWithoutUserInput = {
    update: XOR<
      UserProgressUpdateWithoutUserInput,
      UserProgressUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      UserProgressCreateWithoutUserInput,
      UserProgressUncheckedCreateWithoutUserInput
    >;
    where?: UserProgressWhereInput;
  };

  export type UserProgressUpdateToOneWithWhereWithoutUserInput = {
    where?: UserProgressWhereInput;
    data: XOR<
      UserProgressUpdateWithoutUserInput,
      UserProgressUncheckedUpdateWithoutUserInput
    >;
  };

  export type UserProgressUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    xp?: IntFieldUpdateOperationsInput | number;
    level?: IntFieldUpdateOperationsInput | number;
    streak?: IntFieldUpdateOperationsInput | number;
    accuracy?: NullableFloatFieldUpdateOperationsInput | number | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UserProgressUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    xp?: IntFieldUpdateOperationsInput | number;
    level?: IntFieldUpdateOperationsInput | number;
    streak?: IntFieldUpdateOperationsInput | number;
    accuracy?: NullableFloatFieldUpdateOperationsInput | number | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UserAchievementUpsertWithWhereUniqueWithoutUserInput = {
    where: UserAchievementWhereUniqueInput;
    update: XOR<
      UserAchievementUpdateWithoutUserInput,
      UserAchievementUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      UserAchievementCreateWithoutUserInput,
      UserAchievementUncheckedCreateWithoutUserInput
    >;
  };

  export type UserAchievementUpdateWithWhereUniqueWithoutUserInput = {
    where: UserAchievementWhereUniqueInput;
    data: XOR<
      UserAchievementUpdateWithoutUserInput,
      UserAchievementUncheckedUpdateWithoutUserInput
    >;
  };

  export type UserAchievementUpdateManyWithWhereWithoutUserInput = {
    where: UserAchievementScalarWhereInput;
    data: XOR<
      UserAchievementUpdateManyMutationInput,
      UserAchievementUncheckedUpdateManyWithoutUserInput
    >;
  };

  export type UserAchievementScalarWhereInput = {
    AND?: UserAchievementScalarWhereInput | UserAchievementScalarWhereInput[];
    OR?: UserAchievementScalarWhereInput[];
    NOT?: UserAchievementScalarWhereInput | UserAchievementScalarWhereInput[];
    id?: StringFilter<'UserAchievement'> | string;
    userId?: StringFilter<'UserAchievement'> | string;
    achievementId?: StringFilter<'UserAchievement'> | string;
    achievedAt?: DateTimeFilter<'UserAchievement'> | Date | string;
  };

  export type UserLessonProgressUpsertWithWhereUniqueWithoutUserInput = {
    where: UserLessonProgressWhereUniqueInput;
    update: XOR<
      UserLessonProgressUpdateWithoutUserInput,
      UserLessonProgressUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      UserLessonProgressCreateWithoutUserInput,
      UserLessonProgressUncheckedCreateWithoutUserInput
    >;
  };

  export type UserLessonProgressUpdateWithWhereUniqueWithoutUserInput = {
    where: UserLessonProgressWhereUniqueInput;
    data: XOR<
      UserLessonProgressUpdateWithoutUserInput,
      UserLessonProgressUncheckedUpdateWithoutUserInput
    >;
  };

  export type UserLessonProgressUpdateManyWithWhereWithoutUserInput = {
    where: UserLessonProgressScalarWhereInput;
    data: XOR<
      UserLessonProgressUpdateManyMutationInput,
      UserLessonProgressUncheckedUpdateManyWithoutUserInput
    >;
  };

  export type UserLessonProgressScalarWhereInput = {
    AND?:
      | UserLessonProgressScalarWhereInput
      | UserLessonProgressScalarWhereInput[];
    OR?: UserLessonProgressScalarWhereInput[];
    NOT?:
      | UserLessonProgressScalarWhereInput
      | UserLessonProgressScalarWhereInput[];
    id?: StringFilter<'UserLessonProgress'> | string;
    userId?: StringFilter<'UserLessonProgress'> | string;
    lessonId?: StringFilter<'UserLessonProgress'> | string;
    status?: StringFilter<'UserLessonProgress'> | string;
    completedAt?:
      | DateTimeNullableFilter<'UserLessonProgress'>
      | Date
      | string
      | null;
  };

  export type DailyActivityLogUpsertWithWhereUniqueWithoutUserInput = {
    where: DailyActivityLogWhereUniqueInput;
    update: XOR<
      DailyActivityLogUpdateWithoutUserInput,
      DailyActivityLogUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      DailyActivityLogCreateWithoutUserInput,
      DailyActivityLogUncheckedCreateWithoutUserInput
    >;
  };

  export type DailyActivityLogUpdateWithWhereUniqueWithoutUserInput = {
    where: DailyActivityLogWhereUniqueInput;
    data: XOR<
      DailyActivityLogUpdateWithoutUserInput,
      DailyActivityLogUncheckedUpdateWithoutUserInput
    >;
  };

  export type DailyActivityLogUpdateManyWithWhereWithoutUserInput = {
    where: DailyActivityLogScalarWhereInput;
    data: XOR<
      DailyActivityLogUpdateManyMutationInput,
      DailyActivityLogUncheckedUpdateManyWithoutUserInput
    >;
  };

  export type DailyActivityLogScalarWhereInput = {
    AND?: DailyActivityLogScalarWhereInput | DailyActivityLogScalarWhereInput[];
    OR?: DailyActivityLogScalarWhereInput[];
    NOT?: DailyActivityLogScalarWhereInput | DailyActivityLogScalarWhereInput[];
    id?: StringFilter<'DailyActivityLog'> | string;
    userId?: StringFilter<'DailyActivityLog'> | string;
    date?: DateTimeFilter<'DailyActivityLog'> | Date | string;
    activity?: StringFilter<'DailyActivityLog'> | string;
  };

  export type QuizResultUpsertWithWhereUniqueWithoutUserInput = {
    where: QuizResultWhereUniqueInput;
    update: XOR<
      QuizResultUpdateWithoutUserInput,
      QuizResultUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      QuizResultCreateWithoutUserInput,
      QuizResultUncheckedCreateWithoutUserInput
    >;
  };

  export type QuizResultUpdateWithWhereUniqueWithoutUserInput = {
    where: QuizResultWhereUniqueInput;
    data: XOR<
      QuizResultUpdateWithoutUserInput,
      QuizResultUncheckedUpdateWithoutUserInput
    >;
  };

  export type QuizResultUpdateManyWithWhereWithoutUserInput = {
    where: QuizResultScalarWhereInput;
    data: XOR<
      QuizResultUpdateManyMutationInput,
      QuizResultUncheckedUpdateManyWithoutUserInput
    >;
  };

  export type QuizResultScalarWhereInput = {
    AND?: QuizResultScalarWhereInput | QuizResultScalarWhereInput[];
    OR?: QuizResultScalarWhereInput[];
    NOT?: QuizResultScalarWhereInput | QuizResultScalarWhereInput[];
    id?: StringFilter<'QuizResult'> | string;
    userId?: StringFilter<'QuizResult'> | string;
    score?: IntFilter<'QuizResult'> | number;
    total?: IntFilter<'QuizResult'> | number;
    passedAt?: DateTimeFilter<'QuizResult'> | Date | string;
  };

  export type LeaderboardEntryUpsertWithWhereUniqueWithoutUserInput = {
    where: LeaderboardEntryWhereUniqueInput;
    update: XOR<
      LeaderboardEntryUpdateWithoutUserInput,
      LeaderboardEntryUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      LeaderboardEntryCreateWithoutUserInput,
      LeaderboardEntryUncheckedCreateWithoutUserInput
    >;
  };

  export type LeaderboardEntryUpdateWithWhereUniqueWithoutUserInput = {
    where: LeaderboardEntryWhereUniqueInput;
    data: XOR<
      LeaderboardEntryUpdateWithoutUserInput,
      LeaderboardEntryUncheckedUpdateWithoutUserInput
    >;
  };

  export type LeaderboardEntryUpdateManyWithWhereWithoutUserInput = {
    where: LeaderboardEntryScalarWhereInput;
    data: XOR<
      LeaderboardEntryUpdateManyMutationInput,
      LeaderboardEntryUncheckedUpdateManyWithoutUserInput
    >;
  };

  export type LeaderboardEntryScalarWhereInput = {
    AND?: LeaderboardEntryScalarWhereInput | LeaderboardEntryScalarWhereInput[];
    OR?: LeaderboardEntryScalarWhereInput[];
    NOT?: LeaderboardEntryScalarWhereInput | LeaderboardEntryScalarWhereInput[];
    id?: StringFilter<'LeaderboardEntry'> | string;
    userId?: StringFilter<'LeaderboardEntry'> | string;
    xp?: IntFilter<'LeaderboardEntry'> | number;
    rank?: IntFilter<'LeaderboardEntry'> | number;
    snapshotDate?: DateTimeFilter<'LeaderboardEntry'> | Date | string;
  };

  export type TeamUpsertWithoutMembersInput = {
    update: XOR<
      TeamUpdateWithoutMembersInput,
      TeamUncheckedUpdateWithoutMembersInput
    >;
    create: XOR<
      TeamCreateWithoutMembersInput,
      TeamUncheckedCreateWithoutMembersInput
    >;
    where?: TeamWhereInput;
  };

  export type TeamUpdateToOneWithWhereWithoutMembersInput = {
    where?: TeamWhereInput;
    data: XOR<
      TeamUpdateWithoutMembersInput,
      TeamUncheckedUpdateWithoutMembersInput
    >;
  };

  export type TeamUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    results?: TeamBattleResultUpdateManyWithoutTeamNestedInput;
  };

  export type TeamUncheckedUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    results?: TeamBattleResultUncheckedUpdateManyWithoutTeamNestedInput;
  };

  export type UserCreateWithoutProgressInput = {
    id?: string;
    firstName: string;
    lastName: string;
    role?: string;
    status?: string;
    email: string;
    passwordHash: string;
    isApprovedByAdmin?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    achievements?: UserAchievementCreateNestedManyWithoutUserInput;
    lessonProgress?: UserLessonProgressCreateNestedManyWithoutUserInput;
    activityLogs?: DailyActivityLogCreateNestedManyWithoutUserInput;
    quizResults?: QuizResultCreateNestedManyWithoutUserInput;
    leaderboardEntries?: LeaderboardEntryCreateNestedManyWithoutUserInput;
    team?: TeamCreateNestedOneWithoutMembersInput;
  };

  export type UserUncheckedCreateWithoutProgressInput = {
    id?: string;
    firstName: string;
    lastName: string;
    role?: string;
    status?: string;
    email: string;
    passwordHash: string;
    isApprovedByAdmin?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    teamId?: string | null;
    achievements?: UserAchievementUncheckedCreateNestedManyWithoutUserInput;
    lessonProgress?: UserLessonProgressUncheckedCreateNestedManyWithoutUserInput;
    activityLogs?: DailyActivityLogUncheckedCreateNestedManyWithoutUserInput;
    quizResults?: QuizResultUncheckedCreateNestedManyWithoutUserInput;
    leaderboardEntries?: LeaderboardEntryUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutProgressInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutProgressInput,
      UserUncheckedCreateWithoutProgressInput
    >;
  };

  export type UserUpsertWithoutProgressInput = {
    update: XOR<
      UserUpdateWithoutProgressInput,
      UserUncheckedUpdateWithoutProgressInput
    >;
    create: XOR<
      UserCreateWithoutProgressInput,
      UserUncheckedCreateWithoutProgressInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutProgressInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutProgressInput,
      UserUncheckedUpdateWithoutProgressInput
    >;
  };

  export type UserUpdateWithoutProgressInput = {
    id?: StringFieldUpdateOperationsInput | string;
    firstName?: StringFieldUpdateOperationsInput | string;
    lastName?: StringFieldUpdateOperationsInput | string;
    role?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    passwordHash?: StringFieldUpdateOperationsInput | string;
    isApprovedByAdmin?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    achievements?: UserAchievementUpdateManyWithoutUserNestedInput;
    lessonProgress?: UserLessonProgressUpdateManyWithoutUserNestedInput;
    activityLogs?: DailyActivityLogUpdateManyWithoutUserNestedInput;
    quizResults?: QuizResultUpdateManyWithoutUserNestedInput;
    leaderboardEntries?: LeaderboardEntryUpdateManyWithoutUserNestedInput;
    team?: TeamUpdateOneWithoutMembersNestedInput;
  };

  export type UserUncheckedUpdateWithoutProgressInput = {
    id?: StringFieldUpdateOperationsInput | string;
    firstName?: StringFieldUpdateOperationsInput | string;
    lastName?: StringFieldUpdateOperationsInput | string;
    role?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    passwordHash?: StringFieldUpdateOperationsInput | string;
    isApprovedByAdmin?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    teamId?: NullableStringFieldUpdateOperationsInput | string | null;
    achievements?: UserAchievementUncheckedUpdateManyWithoutUserNestedInput;
    lessonProgress?: UserLessonProgressUncheckedUpdateManyWithoutUserNestedInput;
    activityLogs?: DailyActivityLogUncheckedUpdateManyWithoutUserNestedInput;
    quizResults?: QuizResultUncheckedUpdateManyWithoutUserNestedInput;
    leaderboardEntries?: LeaderboardEntryUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type UserAchievementCreateWithoutAchievementInput = {
    id?: string;
    achievedAt?: Date | string;
    user: UserCreateNestedOneWithoutAchievementsInput;
  };

  export type UserAchievementUncheckedCreateWithoutAchievementInput = {
    id?: string;
    userId: string;
    achievedAt?: Date | string;
  };

  export type UserAchievementCreateOrConnectWithoutAchievementInput = {
    where: UserAchievementWhereUniqueInput;
    create: XOR<
      UserAchievementCreateWithoutAchievementInput,
      UserAchievementUncheckedCreateWithoutAchievementInput
    >;
  };

  export type UserAchievementCreateManyAchievementInputEnvelope = {
    data:
      | UserAchievementCreateManyAchievementInput
      | UserAchievementCreateManyAchievementInput[];
    skipDuplicates?: boolean;
  };

  export type UserAchievementUpsertWithWhereUniqueWithoutAchievementInput = {
    where: UserAchievementWhereUniqueInput;
    update: XOR<
      UserAchievementUpdateWithoutAchievementInput,
      UserAchievementUncheckedUpdateWithoutAchievementInput
    >;
    create: XOR<
      UserAchievementCreateWithoutAchievementInput,
      UserAchievementUncheckedCreateWithoutAchievementInput
    >;
  };

  export type UserAchievementUpdateWithWhereUniqueWithoutAchievementInput = {
    where: UserAchievementWhereUniqueInput;
    data: XOR<
      UserAchievementUpdateWithoutAchievementInput,
      UserAchievementUncheckedUpdateWithoutAchievementInput
    >;
  };

  export type UserAchievementUpdateManyWithWhereWithoutAchievementInput = {
    where: UserAchievementScalarWhereInput;
    data: XOR<
      UserAchievementUpdateManyMutationInput,
      UserAchievementUncheckedUpdateManyWithoutAchievementInput
    >;
  };

  export type UserCreateWithoutAchievementsInput = {
    id?: string;
    firstName: string;
    lastName: string;
    role?: string;
    status?: string;
    email: string;
    passwordHash: string;
    isApprovedByAdmin?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    progress?: UserProgressCreateNestedOneWithoutUserInput;
    lessonProgress?: UserLessonProgressCreateNestedManyWithoutUserInput;
    activityLogs?: DailyActivityLogCreateNestedManyWithoutUserInput;
    quizResults?: QuizResultCreateNestedManyWithoutUserInput;
    leaderboardEntries?: LeaderboardEntryCreateNestedManyWithoutUserInput;
    team?: TeamCreateNestedOneWithoutMembersInput;
  };

  export type UserUncheckedCreateWithoutAchievementsInput = {
    id?: string;
    firstName: string;
    lastName: string;
    role?: string;
    status?: string;
    email: string;
    passwordHash: string;
    isApprovedByAdmin?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    teamId?: string | null;
    progress?: UserProgressUncheckedCreateNestedOneWithoutUserInput;
    lessonProgress?: UserLessonProgressUncheckedCreateNestedManyWithoutUserInput;
    activityLogs?: DailyActivityLogUncheckedCreateNestedManyWithoutUserInput;
    quizResults?: QuizResultUncheckedCreateNestedManyWithoutUserInput;
    leaderboardEntries?: LeaderboardEntryUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutAchievementsInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutAchievementsInput,
      UserUncheckedCreateWithoutAchievementsInput
    >;
  };

  export type AchievementCreateWithoutUsersInput = {
    id?: string;
    code: string;
    name: string;
    description: string;
    icon: string;
  };

  export type AchievementUncheckedCreateWithoutUsersInput = {
    id?: string;
    code: string;
    name: string;
    description: string;
    icon: string;
  };

  export type AchievementCreateOrConnectWithoutUsersInput = {
    where: AchievementWhereUniqueInput;
    create: XOR<
      AchievementCreateWithoutUsersInput,
      AchievementUncheckedCreateWithoutUsersInput
    >;
  };

  export type UserUpsertWithoutAchievementsInput = {
    update: XOR<
      UserUpdateWithoutAchievementsInput,
      UserUncheckedUpdateWithoutAchievementsInput
    >;
    create: XOR<
      UserCreateWithoutAchievementsInput,
      UserUncheckedCreateWithoutAchievementsInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutAchievementsInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutAchievementsInput,
      UserUncheckedUpdateWithoutAchievementsInput
    >;
  };

  export type UserUpdateWithoutAchievementsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    firstName?: StringFieldUpdateOperationsInput | string;
    lastName?: StringFieldUpdateOperationsInput | string;
    role?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    passwordHash?: StringFieldUpdateOperationsInput | string;
    isApprovedByAdmin?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    progress?: UserProgressUpdateOneWithoutUserNestedInput;
    lessonProgress?: UserLessonProgressUpdateManyWithoutUserNestedInput;
    activityLogs?: DailyActivityLogUpdateManyWithoutUserNestedInput;
    quizResults?: QuizResultUpdateManyWithoutUserNestedInput;
    leaderboardEntries?: LeaderboardEntryUpdateManyWithoutUserNestedInput;
    team?: TeamUpdateOneWithoutMembersNestedInput;
  };

  export type UserUncheckedUpdateWithoutAchievementsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    firstName?: StringFieldUpdateOperationsInput | string;
    lastName?: StringFieldUpdateOperationsInput | string;
    role?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    passwordHash?: StringFieldUpdateOperationsInput | string;
    isApprovedByAdmin?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    teamId?: NullableStringFieldUpdateOperationsInput | string | null;
    progress?: UserProgressUncheckedUpdateOneWithoutUserNestedInput;
    lessonProgress?: UserLessonProgressUncheckedUpdateManyWithoutUserNestedInput;
    activityLogs?: DailyActivityLogUncheckedUpdateManyWithoutUserNestedInput;
    quizResults?: QuizResultUncheckedUpdateManyWithoutUserNestedInput;
    leaderboardEntries?: LeaderboardEntryUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type AchievementUpsertWithoutUsersInput = {
    update: XOR<
      AchievementUpdateWithoutUsersInput,
      AchievementUncheckedUpdateWithoutUsersInput
    >;
    create: XOR<
      AchievementCreateWithoutUsersInput,
      AchievementUncheckedCreateWithoutUsersInput
    >;
    where?: AchievementWhereInput;
  };

  export type AchievementUpdateToOneWithWhereWithoutUsersInput = {
    where?: AchievementWhereInput;
    data: XOR<
      AchievementUpdateWithoutUsersInput,
      AchievementUncheckedUpdateWithoutUsersInput
    >;
  };

  export type AchievementUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string;
    code?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    icon?: StringFieldUpdateOperationsInput | string;
  };

  export type AchievementUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string;
    code?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    icon?: StringFieldUpdateOperationsInput | string;
  };

  export type UserCreateWithoutTeamInput = {
    id?: string;
    firstName: string;
    lastName: string;
    role?: string;
    status?: string;
    email: string;
    passwordHash: string;
    isApprovedByAdmin?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    progress?: UserProgressCreateNestedOneWithoutUserInput;
    achievements?: UserAchievementCreateNestedManyWithoutUserInput;
    lessonProgress?: UserLessonProgressCreateNestedManyWithoutUserInput;
    activityLogs?: DailyActivityLogCreateNestedManyWithoutUserInput;
    quizResults?: QuizResultCreateNestedManyWithoutUserInput;
    leaderboardEntries?: LeaderboardEntryCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutTeamInput = {
    id?: string;
    firstName: string;
    lastName: string;
    role?: string;
    status?: string;
    email: string;
    passwordHash: string;
    isApprovedByAdmin?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    progress?: UserProgressUncheckedCreateNestedOneWithoutUserInput;
    achievements?: UserAchievementUncheckedCreateNestedManyWithoutUserInput;
    lessonProgress?: UserLessonProgressUncheckedCreateNestedManyWithoutUserInput;
    activityLogs?: DailyActivityLogUncheckedCreateNestedManyWithoutUserInput;
    quizResults?: QuizResultUncheckedCreateNestedManyWithoutUserInput;
    leaderboardEntries?: LeaderboardEntryUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutTeamInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutTeamInput,
      UserUncheckedCreateWithoutTeamInput
    >;
  };

  export type UserCreateManyTeamInputEnvelope = {
    data: UserCreateManyTeamInput | UserCreateManyTeamInput[];
    skipDuplicates?: boolean;
  };

  export type TeamBattleResultCreateWithoutTeamInput = {
    id?: string;
    score: number;
    date: Date | string;
    position: number;
  };

  export type TeamBattleResultUncheckedCreateWithoutTeamInput = {
    id?: string;
    score: number;
    date: Date | string;
    position: number;
  };

  export type TeamBattleResultCreateOrConnectWithoutTeamInput = {
    where: TeamBattleResultWhereUniqueInput;
    create: XOR<
      TeamBattleResultCreateWithoutTeamInput,
      TeamBattleResultUncheckedCreateWithoutTeamInput
    >;
  };

  export type TeamBattleResultCreateManyTeamInputEnvelope = {
    data:
      | TeamBattleResultCreateManyTeamInput
      | TeamBattleResultCreateManyTeamInput[];
    skipDuplicates?: boolean;
  };

  export type UserUpsertWithWhereUniqueWithoutTeamInput = {
    where: UserWhereUniqueInput;
    update: XOR<
      UserUpdateWithoutTeamInput,
      UserUncheckedUpdateWithoutTeamInput
    >;
    create: XOR<
      UserCreateWithoutTeamInput,
      UserUncheckedCreateWithoutTeamInput
    >;
  };

  export type UserUpdateWithWhereUniqueWithoutTeamInput = {
    where: UserWhereUniqueInput;
    data: XOR<UserUpdateWithoutTeamInput, UserUncheckedUpdateWithoutTeamInput>;
  };

  export type UserUpdateManyWithWhereWithoutTeamInput = {
    where: UserScalarWhereInput;
    data: XOR<
      UserUpdateManyMutationInput,
      UserUncheckedUpdateManyWithoutTeamInput
    >;
  };

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[];
    OR?: UserScalarWhereInput[];
    NOT?: UserScalarWhereInput | UserScalarWhereInput[];
    id?: StringFilter<'User'> | string;
    firstName?: StringFilter<'User'> | string;
    lastName?: StringFilter<'User'> | string;
    role?: StringFilter<'User'> | string;
    status?: StringFilter<'User'> | string;
    email?: StringFilter<'User'> | string;
    passwordHash?: StringFilter<'User'> | string;
    isApprovedByAdmin?: BoolFilter<'User'> | boolean;
    createdAt?: DateTimeFilter<'User'> | Date | string;
    updatedAt?: DateTimeFilter<'User'> | Date | string;
    teamId?: StringNullableFilter<'User'> | string | null;
  };

  export type TeamBattleResultUpsertWithWhereUniqueWithoutTeamInput = {
    where: TeamBattleResultWhereUniqueInput;
    update: XOR<
      TeamBattleResultUpdateWithoutTeamInput,
      TeamBattleResultUncheckedUpdateWithoutTeamInput
    >;
    create: XOR<
      TeamBattleResultCreateWithoutTeamInput,
      TeamBattleResultUncheckedCreateWithoutTeamInput
    >;
  };

  export type TeamBattleResultUpdateWithWhereUniqueWithoutTeamInput = {
    where: TeamBattleResultWhereUniqueInput;
    data: XOR<
      TeamBattleResultUpdateWithoutTeamInput,
      TeamBattleResultUncheckedUpdateWithoutTeamInput
    >;
  };

  export type TeamBattleResultUpdateManyWithWhereWithoutTeamInput = {
    where: TeamBattleResultScalarWhereInput;
    data: XOR<
      TeamBattleResultUpdateManyMutationInput,
      TeamBattleResultUncheckedUpdateManyWithoutTeamInput
    >;
  };

  export type TeamBattleResultScalarWhereInput = {
    AND?: TeamBattleResultScalarWhereInput | TeamBattleResultScalarWhereInput[];
    OR?: TeamBattleResultScalarWhereInput[];
    NOT?: TeamBattleResultScalarWhereInput | TeamBattleResultScalarWhereInput[];
    id?: StringFilter<'TeamBattleResult'> | string;
    teamId?: StringFilter<'TeamBattleResult'> | string;
    score?: IntFilter<'TeamBattleResult'> | number;
    date?: DateTimeFilter<'TeamBattleResult'> | Date | string;
    position?: IntFilter<'TeamBattleResult'> | number;
  };

  export type TeamCreateWithoutResultsInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    members?: UserCreateNestedManyWithoutTeamInput;
  };

  export type TeamUncheckedCreateWithoutResultsInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    members?: UserUncheckedCreateNestedManyWithoutTeamInput;
  };

  export type TeamCreateOrConnectWithoutResultsInput = {
    where: TeamWhereUniqueInput;
    create: XOR<
      TeamCreateWithoutResultsInput,
      TeamUncheckedCreateWithoutResultsInput
    >;
  };

  export type TeamUpsertWithoutResultsInput = {
    update: XOR<
      TeamUpdateWithoutResultsInput,
      TeamUncheckedUpdateWithoutResultsInput
    >;
    create: XOR<
      TeamCreateWithoutResultsInput,
      TeamUncheckedCreateWithoutResultsInput
    >;
    where?: TeamWhereInput;
  };

  export type TeamUpdateToOneWithWhereWithoutResultsInput = {
    where?: TeamWhereInput;
    data: XOR<
      TeamUpdateWithoutResultsInput,
      TeamUncheckedUpdateWithoutResultsInput
    >;
  };

  export type TeamUpdateWithoutResultsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    members?: UserUpdateManyWithoutTeamNestedInput;
  };

  export type TeamUncheckedUpdateWithoutResultsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    members?: UserUncheckedUpdateManyWithoutTeamNestedInput;
  };

  export type UserLessonProgressCreateWithoutLessonInput = {
    id?: string;
    status?: string;
    completedAt?: Date | string | null;
    user: UserCreateNestedOneWithoutLessonProgressInput;
  };

  export type UserLessonProgressUncheckedCreateWithoutLessonInput = {
    id?: string;
    userId: string;
    status?: string;
    completedAt?: Date | string | null;
  };

  export type UserLessonProgressCreateOrConnectWithoutLessonInput = {
    where: UserLessonProgressWhereUniqueInput;
    create: XOR<
      UserLessonProgressCreateWithoutLessonInput,
      UserLessonProgressUncheckedCreateWithoutLessonInput
    >;
  };

  export type UserLessonProgressCreateManyLessonInputEnvelope = {
    data:
      | UserLessonProgressCreateManyLessonInput
      | UserLessonProgressCreateManyLessonInput[];
    skipDuplicates?: boolean;
  };

  export type UserLessonProgressUpsertWithWhereUniqueWithoutLessonInput = {
    where: UserLessonProgressWhereUniqueInput;
    update: XOR<
      UserLessonProgressUpdateWithoutLessonInput,
      UserLessonProgressUncheckedUpdateWithoutLessonInput
    >;
    create: XOR<
      UserLessonProgressCreateWithoutLessonInput,
      UserLessonProgressUncheckedCreateWithoutLessonInput
    >;
  };

  export type UserLessonProgressUpdateWithWhereUniqueWithoutLessonInput = {
    where: UserLessonProgressWhereUniqueInput;
    data: XOR<
      UserLessonProgressUpdateWithoutLessonInput,
      UserLessonProgressUncheckedUpdateWithoutLessonInput
    >;
  };

  export type UserLessonProgressUpdateManyWithWhereWithoutLessonInput = {
    where: UserLessonProgressScalarWhereInput;
    data: XOR<
      UserLessonProgressUpdateManyMutationInput,
      UserLessonProgressUncheckedUpdateManyWithoutLessonInput
    >;
  };

  export type UserCreateWithoutLessonProgressInput = {
    id?: string;
    firstName: string;
    lastName: string;
    role?: string;
    status?: string;
    email: string;
    passwordHash: string;
    isApprovedByAdmin?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    progress?: UserProgressCreateNestedOneWithoutUserInput;
    achievements?: UserAchievementCreateNestedManyWithoutUserInput;
    activityLogs?: DailyActivityLogCreateNestedManyWithoutUserInput;
    quizResults?: QuizResultCreateNestedManyWithoutUserInput;
    leaderboardEntries?: LeaderboardEntryCreateNestedManyWithoutUserInput;
    team?: TeamCreateNestedOneWithoutMembersInput;
  };

  export type UserUncheckedCreateWithoutLessonProgressInput = {
    id?: string;
    firstName: string;
    lastName: string;
    role?: string;
    status?: string;
    email: string;
    passwordHash: string;
    isApprovedByAdmin?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    teamId?: string | null;
    progress?: UserProgressUncheckedCreateNestedOneWithoutUserInput;
    achievements?: UserAchievementUncheckedCreateNestedManyWithoutUserInput;
    activityLogs?: DailyActivityLogUncheckedCreateNestedManyWithoutUserInput;
    quizResults?: QuizResultUncheckedCreateNestedManyWithoutUserInput;
    leaderboardEntries?: LeaderboardEntryUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutLessonProgressInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutLessonProgressInput,
      UserUncheckedCreateWithoutLessonProgressInput
    >;
  };

  export type LessonCreateWithoutProgressInput = {
    id?: string;
    title: string;
    topic: string;
    content: string;
    durationMin: number;
    createdAt?: Date | string;
  };

  export type LessonUncheckedCreateWithoutProgressInput = {
    id?: string;
    title: string;
    topic: string;
    content: string;
    durationMin: number;
    createdAt?: Date | string;
  };

  export type LessonCreateOrConnectWithoutProgressInput = {
    where: LessonWhereUniqueInput;
    create: XOR<
      LessonCreateWithoutProgressInput,
      LessonUncheckedCreateWithoutProgressInput
    >;
  };

  export type UserUpsertWithoutLessonProgressInput = {
    update: XOR<
      UserUpdateWithoutLessonProgressInput,
      UserUncheckedUpdateWithoutLessonProgressInput
    >;
    create: XOR<
      UserCreateWithoutLessonProgressInput,
      UserUncheckedCreateWithoutLessonProgressInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutLessonProgressInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutLessonProgressInput,
      UserUncheckedUpdateWithoutLessonProgressInput
    >;
  };

  export type UserUpdateWithoutLessonProgressInput = {
    id?: StringFieldUpdateOperationsInput | string;
    firstName?: StringFieldUpdateOperationsInput | string;
    lastName?: StringFieldUpdateOperationsInput | string;
    role?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    passwordHash?: StringFieldUpdateOperationsInput | string;
    isApprovedByAdmin?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    progress?: UserProgressUpdateOneWithoutUserNestedInput;
    achievements?: UserAchievementUpdateManyWithoutUserNestedInput;
    activityLogs?: DailyActivityLogUpdateManyWithoutUserNestedInput;
    quizResults?: QuizResultUpdateManyWithoutUserNestedInput;
    leaderboardEntries?: LeaderboardEntryUpdateManyWithoutUserNestedInput;
    team?: TeamUpdateOneWithoutMembersNestedInput;
  };

  export type UserUncheckedUpdateWithoutLessonProgressInput = {
    id?: StringFieldUpdateOperationsInput | string;
    firstName?: StringFieldUpdateOperationsInput | string;
    lastName?: StringFieldUpdateOperationsInput | string;
    role?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    passwordHash?: StringFieldUpdateOperationsInput | string;
    isApprovedByAdmin?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    teamId?: NullableStringFieldUpdateOperationsInput | string | null;
    progress?: UserProgressUncheckedUpdateOneWithoutUserNestedInput;
    achievements?: UserAchievementUncheckedUpdateManyWithoutUserNestedInput;
    activityLogs?: DailyActivityLogUncheckedUpdateManyWithoutUserNestedInput;
    quizResults?: QuizResultUncheckedUpdateManyWithoutUserNestedInput;
    leaderboardEntries?: LeaderboardEntryUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type LessonUpsertWithoutProgressInput = {
    update: XOR<
      LessonUpdateWithoutProgressInput,
      LessonUncheckedUpdateWithoutProgressInput
    >;
    create: XOR<
      LessonCreateWithoutProgressInput,
      LessonUncheckedCreateWithoutProgressInput
    >;
    where?: LessonWhereInput;
  };

  export type LessonUpdateToOneWithWhereWithoutProgressInput = {
    where?: LessonWhereInput;
    data: XOR<
      LessonUpdateWithoutProgressInput,
      LessonUncheckedUpdateWithoutProgressInput
    >;
  };

  export type LessonUpdateWithoutProgressInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    topic?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    durationMin?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type LessonUncheckedUpdateWithoutProgressInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    topic?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    durationMin?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UserCreateWithoutActivityLogsInput = {
    id?: string;
    firstName: string;
    lastName: string;
    role?: string;
    status?: string;
    email: string;
    passwordHash: string;
    isApprovedByAdmin?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    progress?: UserProgressCreateNestedOneWithoutUserInput;
    achievements?: UserAchievementCreateNestedManyWithoutUserInput;
    lessonProgress?: UserLessonProgressCreateNestedManyWithoutUserInput;
    quizResults?: QuizResultCreateNestedManyWithoutUserInput;
    leaderboardEntries?: LeaderboardEntryCreateNestedManyWithoutUserInput;
    team?: TeamCreateNestedOneWithoutMembersInput;
  };

  export type UserUncheckedCreateWithoutActivityLogsInput = {
    id?: string;
    firstName: string;
    lastName: string;
    role?: string;
    status?: string;
    email: string;
    passwordHash: string;
    isApprovedByAdmin?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    teamId?: string | null;
    progress?: UserProgressUncheckedCreateNestedOneWithoutUserInput;
    achievements?: UserAchievementUncheckedCreateNestedManyWithoutUserInput;
    lessonProgress?: UserLessonProgressUncheckedCreateNestedManyWithoutUserInput;
    quizResults?: QuizResultUncheckedCreateNestedManyWithoutUserInput;
    leaderboardEntries?: LeaderboardEntryUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutActivityLogsInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutActivityLogsInput,
      UserUncheckedCreateWithoutActivityLogsInput
    >;
  };

  export type UserUpsertWithoutActivityLogsInput = {
    update: XOR<
      UserUpdateWithoutActivityLogsInput,
      UserUncheckedUpdateWithoutActivityLogsInput
    >;
    create: XOR<
      UserCreateWithoutActivityLogsInput,
      UserUncheckedCreateWithoutActivityLogsInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutActivityLogsInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutActivityLogsInput,
      UserUncheckedUpdateWithoutActivityLogsInput
    >;
  };

  export type UserUpdateWithoutActivityLogsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    firstName?: StringFieldUpdateOperationsInput | string;
    lastName?: StringFieldUpdateOperationsInput | string;
    role?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    passwordHash?: StringFieldUpdateOperationsInput | string;
    isApprovedByAdmin?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    progress?: UserProgressUpdateOneWithoutUserNestedInput;
    achievements?: UserAchievementUpdateManyWithoutUserNestedInput;
    lessonProgress?: UserLessonProgressUpdateManyWithoutUserNestedInput;
    quizResults?: QuizResultUpdateManyWithoutUserNestedInput;
    leaderboardEntries?: LeaderboardEntryUpdateManyWithoutUserNestedInput;
    team?: TeamUpdateOneWithoutMembersNestedInput;
  };

  export type UserUncheckedUpdateWithoutActivityLogsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    firstName?: StringFieldUpdateOperationsInput | string;
    lastName?: StringFieldUpdateOperationsInput | string;
    role?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    passwordHash?: StringFieldUpdateOperationsInput | string;
    isApprovedByAdmin?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    teamId?: NullableStringFieldUpdateOperationsInput | string | null;
    progress?: UserProgressUncheckedUpdateOneWithoutUserNestedInput;
    achievements?: UserAchievementUncheckedUpdateManyWithoutUserNestedInput;
    lessonProgress?: UserLessonProgressUncheckedUpdateManyWithoutUserNestedInput;
    quizResults?: QuizResultUncheckedUpdateManyWithoutUserNestedInput;
    leaderboardEntries?: LeaderboardEntryUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type UserCreateWithoutQuizResultsInput = {
    id?: string;
    firstName: string;
    lastName: string;
    role?: string;
    status?: string;
    email: string;
    passwordHash: string;
    isApprovedByAdmin?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    progress?: UserProgressCreateNestedOneWithoutUserInput;
    achievements?: UserAchievementCreateNestedManyWithoutUserInput;
    lessonProgress?: UserLessonProgressCreateNestedManyWithoutUserInput;
    activityLogs?: DailyActivityLogCreateNestedManyWithoutUserInput;
    leaderboardEntries?: LeaderboardEntryCreateNestedManyWithoutUserInput;
    team?: TeamCreateNestedOneWithoutMembersInput;
  };

  export type UserUncheckedCreateWithoutQuizResultsInput = {
    id?: string;
    firstName: string;
    lastName: string;
    role?: string;
    status?: string;
    email: string;
    passwordHash: string;
    isApprovedByAdmin?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    teamId?: string | null;
    progress?: UserProgressUncheckedCreateNestedOneWithoutUserInput;
    achievements?: UserAchievementUncheckedCreateNestedManyWithoutUserInput;
    lessonProgress?: UserLessonProgressUncheckedCreateNestedManyWithoutUserInput;
    activityLogs?: DailyActivityLogUncheckedCreateNestedManyWithoutUserInput;
    leaderboardEntries?: LeaderboardEntryUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutQuizResultsInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutQuizResultsInput,
      UserUncheckedCreateWithoutQuizResultsInput
    >;
  };

  export type UserUpsertWithoutQuizResultsInput = {
    update: XOR<
      UserUpdateWithoutQuizResultsInput,
      UserUncheckedUpdateWithoutQuizResultsInput
    >;
    create: XOR<
      UserCreateWithoutQuizResultsInput,
      UserUncheckedCreateWithoutQuizResultsInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutQuizResultsInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutQuizResultsInput,
      UserUncheckedUpdateWithoutQuizResultsInput
    >;
  };

  export type UserUpdateWithoutQuizResultsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    firstName?: StringFieldUpdateOperationsInput | string;
    lastName?: StringFieldUpdateOperationsInput | string;
    role?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    passwordHash?: StringFieldUpdateOperationsInput | string;
    isApprovedByAdmin?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    progress?: UserProgressUpdateOneWithoutUserNestedInput;
    achievements?: UserAchievementUpdateManyWithoutUserNestedInput;
    lessonProgress?: UserLessonProgressUpdateManyWithoutUserNestedInput;
    activityLogs?: DailyActivityLogUpdateManyWithoutUserNestedInput;
    leaderboardEntries?: LeaderboardEntryUpdateManyWithoutUserNestedInput;
    team?: TeamUpdateOneWithoutMembersNestedInput;
  };

  export type UserUncheckedUpdateWithoutQuizResultsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    firstName?: StringFieldUpdateOperationsInput | string;
    lastName?: StringFieldUpdateOperationsInput | string;
    role?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    passwordHash?: StringFieldUpdateOperationsInput | string;
    isApprovedByAdmin?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    teamId?: NullableStringFieldUpdateOperationsInput | string | null;
    progress?: UserProgressUncheckedUpdateOneWithoutUserNestedInput;
    achievements?: UserAchievementUncheckedUpdateManyWithoutUserNestedInput;
    lessonProgress?: UserLessonProgressUncheckedUpdateManyWithoutUserNestedInput;
    activityLogs?: DailyActivityLogUncheckedUpdateManyWithoutUserNestedInput;
    leaderboardEntries?: LeaderboardEntryUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type UserCreateWithoutLeaderboardEntriesInput = {
    id?: string;
    firstName: string;
    lastName: string;
    role?: string;
    status?: string;
    email: string;
    passwordHash: string;
    isApprovedByAdmin?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    progress?: UserProgressCreateNestedOneWithoutUserInput;
    achievements?: UserAchievementCreateNestedManyWithoutUserInput;
    lessonProgress?: UserLessonProgressCreateNestedManyWithoutUserInput;
    activityLogs?: DailyActivityLogCreateNestedManyWithoutUserInput;
    quizResults?: QuizResultCreateNestedManyWithoutUserInput;
    team?: TeamCreateNestedOneWithoutMembersInput;
  };

  export type UserUncheckedCreateWithoutLeaderboardEntriesInput = {
    id?: string;
    firstName: string;
    lastName: string;
    role?: string;
    status?: string;
    email: string;
    passwordHash: string;
    isApprovedByAdmin?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    teamId?: string | null;
    progress?: UserProgressUncheckedCreateNestedOneWithoutUserInput;
    achievements?: UserAchievementUncheckedCreateNestedManyWithoutUserInput;
    lessonProgress?: UserLessonProgressUncheckedCreateNestedManyWithoutUserInput;
    activityLogs?: DailyActivityLogUncheckedCreateNestedManyWithoutUserInput;
    quizResults?: QuizResultUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutLeaderboardEntriesInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutLeaderboardEntriesInput,
      UserUncheckedCreateWithoutLeaderboardEntriesInput
    >;
  };

  export type UserUpsertWithoutLeaderboardEntriesInput = {
    update: XOR<
      UserUpdateWithoutLeaderboardEntriesInput,
      UserUncheckedUpdateWithoutLeaderboardEntriesInput
    >;
    create: XOR<
      UserCreateWithoutLeaderboardEntriesInput,
      UserUncheckedCreateWithoutLeaderboardEntriesInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutLeaderboardEntriesInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutLeaderboardEntriesInput,
      UserUncheckedUpdateWithoutLeaderboardEntriesInput
    >;
  };

  export type UserUpdateWithoutLeaderboardEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    firstName?: StringFieldUpdateOperationsInput | string;
    lastName?: StringFieldUpdateOperationsInput | string;
    role?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    passwordHash?: StringFieldUpdateOperationsInput | string;
    isApprovedByAdmin?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    progress?: UserProgressUpdateOneWithoutUserNestedInput;
    achievements?: UserAchievementUpdateManyWithoutUserNestedInput;
    lessonProgress?: UserLessonProgressUpdateManyWithoutUserNestedInput;
    activityLogs?: DailyActivityLogUpdateManyWithoutUserNestedInput;
    quizResults?: QuizResultUpdateManyWithoutUserNestedInput;
    team?: TeamUpdateOneWithoutMembersNestedInput;
  };

  export type UserUncheckedUpdateWithoutLeaderboardEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    firstName?: StringFieldUpdateOperationsInput | string;
    lastName?: StringFieldUpdateOperationsInput | string;
    role?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    passwordHash?: StringFieldUpdateOperationsInput | string;
    isApprovedByAdmin?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    teamId?: NullableStringFieldUpdateOperationsInput | string | null;
    progress?: UserProgressUncheckedUpdateOneWithoutUserNestedInput;
    achievements?: UserAchievementUncheckedUpdateManyWithoutUserNestedInput;
    lessonProgress?: UserLessonProgressUncheckedUpdateManyWithoutUserNestedInput;
    activityLogs?: DailyActivityLogUncheckedUpdateManyWithoutUserNestedInput;
    quizResults?: QuizResultUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type UserAchievementCreateManyUserInput = {
    id?: string;
    achievementId: string;
    achievedAt?: Date | string;
  };

  export type UserLessonProgressCreateManyUserInput = {
    id?: string;
    lessonId: string;
    status?: string;
    completedAt?: Date | string | null;
  };

  export type DailyActivityLogCreateManyUserInput = {
    id?: string;
    date: Date | string;
    activity: string;
  };

  export type QuizResultCreateManyUserInput = {
    id?: string;
    score: number;
    total: number;
    passedAt?: Date | string;
  };

  export type LeaderboardEntryCreateManyUserInput = {
    id?: string;
    xp: number;
    rank: number;
    snapshotDate: Date | string;
  };

  export type UserAchievementUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    achievedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    achievement?: AchievementUpdateOneRequiredWithoutUsersNestedInput;
  };

  export type UserAchievementUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    achievementId?: StringFieldUpdateOperationsInput | string;
    achievedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UserAchievementUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    achievementId?: StringFieldUpdateOperationsInput | string;
    achievedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UserLessonProgressUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    completedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    lesson?: LessonUpdateOneRequiredWithoutProgressNestedInput;
  };

  export type UserLessonProgressUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    lessonId?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    completedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type UserLessonProgressUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    lessonId?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    completedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type DailyActivityLogUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    activity?: StringFieldUpdateOperationsInput | string;
  };

  export type DailyActivityLogUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    activity?: StringFieldUpdateOperationsInput | string;
  };

  export type DailyActivityLogUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    activity?: StringFieldUpdateOperationsInput | string;
  };

  export type QuizResultUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    score?: IntFieldUpdateOperationsInput | number;
    total?: IntFieldUpdateOperationsInput | number;
    passedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type QuizResultUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    score?: IntFieldUpdateOperationsInput | number;
    total?: IntFieldUpdateOperationsInput | number;
    passedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type QuizResultUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    score?: IntFieldUpdateOperationsInput | number;
    total?: IntFieldUpdateOperationsInput | number;
    passedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type LeaderboardEntryUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    xp?: IntFieldUpdateOperationsInput | number;
    rank?: IntFieldUpdateOperationsInput | number;
    snapshotDate?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type LeaderboardEntryUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    xp?: IntFieldUpdateOperationsInput | number;
    rank?: IntFieldUpdateOperationsInput | number;
    snapshotDate?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type LeaderboardEntryUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    xp?: IntFieldUpdateOperationsInput | number;
    rank?: IntFieldUpdateOperationsInput | number;
    snapshotDate?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UserAchievementCreateManyAchievementInput = {
    id?: string;
    userId: string;
    achievedAt?: Date | string;
  };

  export type UserAchievementUpdateWithoutAchievementInput = {
    id?: StringFieldUpdateOperationsInput | string;
    achievedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutAchievementsNestedInput;
  };

  export type UserAchievementUncheckedUpdateWithoutAchievementInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    achievedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UserAchievementUncheckedUpdateManyWithoutAchievementInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    achievedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UserCreateManyTeamInput = {
    id?: string;
    firstName: string;
    lastName: string;
    role?: string;
    status?: string;
    email: string;
    passwordHash: string;
    isApprovedByAdmin?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type TeamBattleResultCreateManyTeamInput = {
    id?: string;
    score: number;
    date: Date | string;
    position: number;
  };

  export type UserUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string;
    firstName?: StringFieldUpdateOperationsInput | string;
    lastName?: StringFieldUpdateOperationsInput | string;
    role?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    passwordHash?: StringFieldUpdateOperationsInput | string;
    isApprovedByAdmin?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    progress?: UserProgressUpdateOneWithoutUserNestedInput;
    achievements?: UserAchievementUpdateManyWithoutUserNestedInput;
    lessonProgress?: UserLessonProgressUpdateManyWithoutUserNestedInput;
    activityLogs?: DailyActivityLogUpdateManyWithoutUserNestedInput;
    quizResults?: QuizResultUpdateManyWithoutUserNestedInput;
    leaderboardEntries?: LeaderboardEntryUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string;
    firstName?: StringFieldUpdateOperationsInput | string;
    lastName?: StringFieldUpdateOperationsInput | string;
    role?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    passwordHash?: StringFieldUpdateOperationsInput | string;
    isApprovedByAdmin?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    progress?: UserProgressUncheckedUpdateOneWithoutUserNestedInput;
    achievements?: UserAchievementUncheckedUpdateManyWithoutUserNestedInput;
    lessonProgress?: UserLessonProgressUncheckedUpdateManyWithoutUserNestedInput;
    activityLogs?: DailyActivityLogUncheckedUpdateManyWithoutUserNestedInput;
    quizResults?: QuizResultUncheckedUpdateManyWithoutUserNestedInput;
    leaderboardEntries?: LeaderboardEntryUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateManyWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string;
    firstName?: StringFieldUpdateOperationsInput | string;
    lastName?: StringFieldUpdateOperationsInput | string;
    role?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    passwordHash?: StringFieldUpdateOperationsInput | string;
    isApprovedByAdmin?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type TeamBattleResultUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string;
    score?: IntFieldUpdateOperationsInput | number;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    position?: IntFieldUpdateOperationsInput | number;
  };

  export type TeamBattleResultUncheckedUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string;
    score?: IntFieldUpdateOperationsInput | number;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    position?: IntFieldUpdateOperationsInput | number;
  };

  export type TeamBattleResultUncheckedUpdateManyWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string;
    score?: IntFieldUpdateOperationsInput | number;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    position?: IntFieldUpdateOperationsInput | number;
  };

  export type UserLessonProgressCreateManyLessonInput = {
    id?: string;
    userId: string;
    status?: string;
    completedAt?: Date | string | null;
  };

  export type UserLessonProgressUpdateWithoutLessonInput = {
    id?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    completedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    user?: UserUpdateOneRequiredWithoutLessonProgressNestedInput;
  };

  export type UserLessonProgressUncheckedUpdateWithoutLessonInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    completedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type UserLessonProgressUncheckedUpdateManyWithoutLessonInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    completedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
