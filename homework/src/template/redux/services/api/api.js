import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
	reducerPath: "api",
	baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api" }),
	tagTypes: ["Reviews"],
	endpoints: (builder) => ({
		getRestaurants: builder.query({ query: () => "/restaurants" }),
		getRestaurant: builder.query({
			query: ({ restaurantId }) => `/restaurant/${restaurantId}`,
		}),
		getRestaurantMenu: builder.query({
			query: ({ restaurantId }) => `/dishes?restaurantId=${restaurantId}`,
		}),
		getDish: builder.query({
			query: ({ dishId }) => `/dish/${dishId}`,
		}),
		getUsers: builder.query({
			query: () => `/users`,
		}),
		getRestaurantReviews: builder.query({
			query: ({ restaurantId }) => `/reviews?restaurantId=${restaurantId}`,
			providesTags: ({ restaurantId }) => [{ type: "Reviews", restaurantId }],
		}),
		addReview: builder.mutation({
			query: ({ restaurantId, review }) => ({
				url: `/review/${restaurantId}`,
				method: "POST",
				body: review,
			}),
			invalidatesTags: ({ restaurantId }) => [{ type: "Reviews", restaurantId }],
		}),
		editReview: builder.mutation({
			query: ({ reviewId, newReview }) => ({
				url: `/review/${reviewId}`,
				method: "PATCH",
				body: newReview,
				invalidatesTags: [{ type: "Reviews", id: reviewId }],
			}),
		}),
	}),
});

export const {
	useGetRestaurantsQuery,
	useGetRestaurantQuery,
	useGetRestaurantMenuQuery,
	useGetDishQuery,
	useGetRestaurantReviewsQuery,
	useGetUsersQuery,
	useAddReviewMutation,
	useEditReviewMutation,
} = apiSlice;
