import "./App.css";
import MyFooter from "./components/MyFooter";
import MyNav from "./components/MyNav";
import "bootstrap/dist/css/bootstrap.min.css";
import Welcome from "./components/Welcome";
import BookList from "./components/BookList";
import fantasyBooks from "./data/fantasy.json";
import { Col, Container, Row } from "react-bootstrap";
import CommentArea from "./components/CommentArea";
import { Component } from "react";

class App extends Component {
  state = {
    selectedBookAsin: null,
  };

  setSelectedBookAsin = asin => {
    this.setState({ selectedBookAsin: asin });
  };

  render() {
    return (
      <div className="App">
        <MyNav />
        <Welcome />
        <Container>
          <Row className="justify-content-center">
            <Col xs={6}>
              <BookList
                books={fantasyBooks}
                selectedBookAsin={this.state.selectedBookAsin}
                setSelectedBookAsin={this.setSelectedBookAsin}
              />
            </Col>
            <Col xs={6}>
              <CommentArea selectedBookAsin={this.state.selectedBookAsin} />
            </Col>
          </Row>
        </Container>
        <MyFooter />
      </div>
    );
  }
}

export default App;
