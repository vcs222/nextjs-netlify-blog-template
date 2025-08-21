import { GetStaticProps } from "next";
import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import PostGrid from "../components/PostGrid";
import config from "../lib/config";
import { getAllPosts, PostContent } from "../lib/posts";
import { listTags, TagContent } from "../lib/tags";
import Head from "next/head";

type Props = {
  posts: PostContent[];
  tags: TagContent[];
};

export default function Index({ posts, tags }: Props) {
  const url = "/";
  const title = "All posts";
  return (
    <Layout>
      <BasicMeta url={url} title={title} />
      <OpenGraphMeta url={url} title={title} />
      <PostGrid posts={posts} tags={tags} />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  // Get all posts for the tile-based layout
  const posts = getAllPosts();
  const tags = listTags();
  
  return {
    props: {
      posts,
      tags,
    },
  };
};
