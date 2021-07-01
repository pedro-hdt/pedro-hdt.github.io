import Head from "next/head";
import React from 'react';
import BlogFeed from '../components/BlogFeed';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export default function Blog({ posts }) {
    return (<>
        <Head>
            <title>Pedro Teixeira | Blog</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <BlogFeed posts={posts} />
    </>);
}

export async function getStaticProps() {

    // Retrieve all posts (everything in posts directory)
    const filenames = fs.readdirSync(path.join('posts'));

    // Get slug and frontmatter for each
    const posts = filenames.map(filename => {
        const slug = path.parse(filename).name;

        // read file contents and parse with gray-matter
        const fileContent = fs.readFileSync(
            path.join('posts', filename),
            'utf-8'
        );
        // destructure only the frontmatter
        // content can be dropped because this is just the top level feed
        const { data: frontmatter } = matter(fileContent);

        return {
            slug,
            frontmatter
        }
    });

    console.log(posts)

    // Most recent first
    const sortByDate = (a, b) => {
        return new Date(b.frontmatter.date) - new Date(a.frontmatter.date);
    }

    return {
        props: {
            posts: posts.sort(sortByDate)
        }
    }
}