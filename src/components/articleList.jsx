import { useState } from "react";
import Article from "../components/article";
import js from "./../assets/javascript.png";
import integration from "./../assets/integration.jpeg";
import react from "./../assets/react.png";
import node from "./../assets/node.png";
import mongo from "./../assets/MongoDB.png";
import reactnative from "./../assets/rn.png";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const articles = [
  {
    id: 1,
    img: js,
    content: "Learning during 3 weeks JavaScript and alorithms",
  },
  {
    id: 2,
    img: integration,
    content: "Frontend : Learning during 3 weeks HTML5, CSS3 and Bootstrap",
  },
  {
    id: 3,
    img: react,
    content: "Frontend : Learning during 2 weeks React JS library",
  },
  { id: 4, img: node, content: "Backend : Learning during 2 weeks Node JS" },
  { id: 5, img: mongo, content: "Database NoSql : Mongo DB" },
  { id: 6, img: reactnative, content: "Mobile development : React Native" },
];

export default function ArticleList() {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    // console.log(e.target.value);
    setSearch(e.target.value);
  };

  return (
    <>
      <h2>Bootcamp Fullstack JS</h2>
      <Container>
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Recipient's username"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            onChange={handleSearch}
          />
          <InputGroup.Text id="basic-addon2">Search</InputGroup.Text>
        </InputGroup>
      </Container>

      <Container>
        <Row lg={3}>
          {articles
            .filter((article) =>
              article.content.toLowerCase().includes(search.toLowerCase())
            )
            .map((article, id) => (
              <Article key={id} img={article.img} content={article.content} />
            ))}
        </Row>
      </Container>
    </>
  );
}
