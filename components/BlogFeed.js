import Badge from "react-bootstrap/Badge";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Link from "next/link";
import styles from "../styles/BlogFeed.module.css";

export default function BlogFeed({ posts }) {

    const makeCard = (post) => {
        return <Card>
            <Card.Body>
                <Card.Title>
                    <Link href={`/blog/${post.slug}`}>{post.frontmatter.title}</Link>
                    {" "}
                    {/* {post.new ? <Badge variant="primary">New</Badge> : null} */}
                </Card.Title>
                <Card.Subtitle>
                    {post.frontmatter.date}
                </Card.Subtitle>
                <Card.Text>{post.frontmatter.summary}</Card.Text>
            </Card.Body>
        </Card>;
    };

    const cards = []
    for (let post of posts) {
        cards.push(<li key={post.slug}>{makeCard(post)}</li>)
    }

    return (
        <Container className={styles.container}>
            <ul style={{ "listStyle": "none", "padding": 0 }}>
                {cards}
            </ul>
        </Container>
    );
}