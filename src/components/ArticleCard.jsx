import * as React from "react";
import { Card, CardHeader, CardText } from "material-ui";

export default class ArticleCard extends React.Component {
  render() {
    const { title, content, date } = this.props;
    return <div style={{ margin: "10px" }}>
      <Card>
        <CardHeader title={title} subtitle={date} />
        <CardText>{content}</CardText>
      </Card>
    </div>;
  }
}