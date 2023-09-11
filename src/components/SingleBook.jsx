import { Component } from "react";
import { Card } from "react-bootstrap";
import CommentArea from "./CommentArea";

class SingleBook extends Component {
  state = {
    selected: false,
  };
  // highlightSelected = () => {
  //   this.setState({ selected: !this.state.selected });
  //   ;
  // };
  render() {
    return (
      <Card style={this.props.book.asin === this.props.selectedBookAsin ? { border: "1.5px solid red" } : null}>
        <Card.Img
          onClick={() => this.props.setSelectedBookAsin(this.props.book.asin)}
          src={this.props.book.img}
          variant="top"
          style={{ height: "200px" }}
          className="object-fit-contain"
        />
        <Card.Body>
          <Card.Title className="fs-6">{this.props.book.title}</Card.Title>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;
