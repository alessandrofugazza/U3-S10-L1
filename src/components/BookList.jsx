import { Col, Form, InputGroup, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";
import { Component } from "react";

class BookList extends Component {
  state = {
    filterString: "",
  };
  handleChange = string => this.setState({ filterString: string });
  filterBookList = books =>
    books.filter(book => book.title.toLowerCase().includes(this.state.filterString.toLowerCase()));
  render() {
    return (
      <>
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Search a title.."
            value={this.state.filterString}
            onChange={e => this.handleChange(e.target.value)}
          />
        </InputGroup>
        <Row className="row-cols-2  gy-4 mb-5">
          {this.filterBookList(this.props.books).map(book => {
            // {this.props.books.map(book => {
            return (
              <Col key={book.asin} className="d-flex">
                <SingleBook
                  book={book}
                  selectedBookAsin={this.props.selectedBookAsin}
                  setSelectedBookAsin={this.props.setSelectedBookAsin}
                />
              </Col>
            );
          })}
        </Row>
      </>
    );
  }
}

export default BookList;
