import * as React from "react"; 
import { Link } from "react-router-dom";
import ArticleCard from "./ArticleCard";
var data = require("../data.json");

export default class ArticleList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
    };
  }

  componentDidMount() {
    // Fetch data here
    this.setState({ articles: data });
  }

  render() {
    return <div style={{ display: "flex", flexWrap: "wrap" }}>
        {!this.props.match.params.id && this.state.articles.map(article => (
            <Link key={article.id} to={`/article/${article.id}`}>
              <ArticleCard {...article} />
            </Link>
          ))}
        {this.state.articles
          .filter(article => article.id === parseInt(this.props.match.params.id, 10))
          .map(article => <ArticleCard key={article.id} {...article} />)}
      </div>;
  }
}
