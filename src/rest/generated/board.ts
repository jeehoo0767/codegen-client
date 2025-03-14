/**
 * Generated by orval v6.31.0 🍺
 * Do not edit manually.
 * Gracy API 명세서
 * OpenAPI spec version: 1.0.0
 */
import {
  useInfiniteQuery,
  useQuery
} from '@tanstack/react-query'
import type {
  InfiniteData,
  QueryFunction,
  QueryKey,
  UseInfiniteQueryOptions,
  UseInfiniteQueryResult,
  UseQueryOptions,
  UseQueryResult
} from '@tanstack/react-query'
import type {
  BoardResponse,
  GetBoardParams
} from './types'
import { customInstance } from '../../plugins/customInstance';
import type { ErrorType } from '../../plugins/customInstance';



type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1];


/**
 * 특정 기간 게시물 조회
 * @summary 특정 기간 게시물 조회
 */
export const getBoard = (
    params?: GetBoardParams,
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      
      
      return customInstance<BoardResponse>(
      {url: `/board`, method: 'GET',
        params, signal
    },
      options);
    }
  

export const getGetBoardQueryKey = (params?: GetBoardParams,) => {
    return [`/board`, ...(params ? [params]: [])] as const;
    }

    
export const getGetBoardInfiniteQueryOptions = <TData = InfiniteData<Awaited<ReturnType<typeof getBoard>>>, TError = ErrorType<unknown>>(params?: GetBoardParams, options?: { query?:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof getBoard>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetBoardQueryKey(params);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getBoard>>> = ({ signal }) => getBoard(params, requestOptions, signal);

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseInfiniteQueryOptions<Awaited<ReturnType<typeof getBoard>>, TError, TData> & { queryKey: QueryKey }
}

export type GetBoardInfiniteQueryResult = NonNullable<Awaited<ReturnType<typeof getBoard>>>
export type GetBoardInfiniteQueryError = ErrorType<unknown>

/**
 * @summary 특정 기간 게시물 조회
 */
export const useGetBoardInfinite = <TData = InfiniteData<Awaited<ReturnType<typeof getBoard>>>, TError = ErrorType<unknown>>(
 params?: GetBoardParams, options?: { query?:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof getBoard>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}

  ):  UseInfiniteQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getGetBoardInfiniteQueryOptions(params,options)

  const query = useInfiniteQuery(queryOptions) as  UseInfiniteQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



export const getGetBoardQueryOptions = <TData = Awaited<ReturnType<typeof getBoard>>, TError = ErrorType<unknown>>(params?: GetBoardParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getBoard>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetBoardQueryKey(params);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getBoard>>> = ({ signal }) => getBoard(params, requestOptions, signal);

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getBoard>>, TError, TData> & { queryKey: QueryKey }
}

export type GetBoardQueryResult = NonNullable<Awaited<ReturnType<typeof getBoard>>>
export type GetBoardQueryError = ErrorType<unknown>

/**
 * @summary 특정 기간 게시물 조회
 */
export const useGetBoard = <TData = Awaited<ReturnType<typeof getBoard>>, TError = ErrorType<unknown>>(
 params?: GetBoardParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getBoard>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getGetBoardQueryOptions(params,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



