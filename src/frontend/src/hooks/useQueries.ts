import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { Post, PostCategory } from "../backend.d";
import { useActor } from "./useActor";

export function useGetAllPosts() {
  const { actor, isFetching } = useActor();
  return useQuery<Post[]>({
    queryKey: ["posts"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllPosts();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetPostsByCategory(category: PostCategory) {
  const { actor, isFetching } = useActor();
  return useQuery<Post[]>({
    queryKey: ["posts", "category", category],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getPostsByCategory(category);
    },
    enabled: !!actor && !isFetching,
  });
}

export function useCreatePost() {
  const { actor } = useActor();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: {
      username: string;
      password: string;
      title: string;
      content: string;
      author: string;
      category: PostCategory;
    }) => {
      if (!actor) throw new Error("Actor not ready");
      return actor.createPost(
        data.username,
        data.password,
        data.title,
        data.content,
        data.author,
        data.category,
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });
}

export function useUpdatePost() {
  const { actor } = useActor();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: {
      username: string;
      password: string;
      id: bigint;
      title: string;
      content: string;
      author: string;
      category: PostCategory;
    }) => {
      if (!actor) throw new Error("Actor not ready");
      return actor.updatePost(
        data.username,
        data.password,
        data.id,
        data.title,
        data.content,
        data.author,
        data.category,
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });
}

export function useDeletePost() {
  const { actor } = useActor();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: {
      username: string;
      password: string;
      id: bigint;
    }) => {
      if (!actor) throw new Error("Actor not ready");
      return actor.deletePost(data.username, data.password, data.id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });
}
