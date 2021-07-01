import fs from "fs";
import path from "path";
import matter from "gray-matter";
import markdownToHtml from "../../lib/markDownToHtml";
import Container from "react-bootstrap/Container";
import styles from "../../styles/Post.module.css"
import Head from "next/head";

export default function Post({ slug, frontmatter, htmlContent }) {
    return <Container>
        <Head>
            <title>Pedro Teixeira | Blog | {frontmatter.title}</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <article className={styles.article}>
            <div dangerouslySetInnerHTML={{ __html: htmlContent }}></div>
        </article>
    </Container>
}

export async function getStaticProps({ params: { slug } }) {

    const fileContent = fs.readFileSync(
        path.join('posts', slug + ".md"),
        'utf-8'
    );

    const { data: frontmatter, content: markdownContent } = matter(fileContent);
    const htmlContent = await markdownToHtml(markdownContent);

    return {
        props: {
            slug,
            frontmatter,
            htmlContent,
        }
    }
}

export async function getStaticPaths() {

    // one slug for each file in the posts directory
    // a path should correspond to each of the slugs
    const files = fs.readdirSync(path.join('posts'));
    const paths = files.map((filename) => ({
        params: { slug: path.parse(filename).name },
    }));

    return {
        paths,
        fallback: false,
    }
}