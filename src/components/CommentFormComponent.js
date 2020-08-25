import React, { Component } from "react";
import {
	Modal,
	ModalHeader,
	ModalBody,
	Button,
	Row,
	Col,
	Label,
} from "reactstrap";
import { LocalForm, Errors, Control } from "react-redux-form";

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;

class CommentForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isModalOpen: false,
		};
		this.toggleModal = this.toggleModal.bind(this);
	}

	toggleModal() {
		this.setState({
			isModalOpen: !this.state.isModalOpen,
		});
	}

	handleSubmit(values) {
		console.log("Current State is " + JSON.stringify(values));
		alert("Current State is " + JSON.stringify(values));
	}

	render() {
		return (
			<>
				<Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
					<ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
					<ModalBody>
						<LocalForm onSubmit={(values) => this.handleSubmit(values)}>
							<Row className="form-group">
								<Label className="ml-3" htmlFor="rating">
									{" "}
									Rating
								</Label>
								<Col md={12}>
									<Control.select
										model=".rating"
										id="rating"
										name="rating"
										className="form-control"
									>
										<option>1</option>
										<option>2</option>
										<option>3</option>
										<option>4</option>
										<option>5</option>
									</Control.select>
								</Col>
							</Row>
							<Row className="form-group">
								<Label className="ml-3" htmlFor="yourname">
									{" "}
									Your Name
								</Label>
								<Col md={12}>
									<Control.text
										model=".yourname"
										id="yourname"
										name="yourname"
										placeholder="Your Name"
										className="form-control"
										validators={{
											required,
											minLength: minLength(3),
											maxLength: maxLength(15),
										}}
									/>
									<Errors
										className="text-danger"
										model=".yourname"
										show="touched"
										messages={{
											required: "Invalid! ",
											minLength: "Must be greater than 2 characters",
											maxLength: "Must be 15 characters or less",
										}}
									/>
								</Col>
							</Row>
							<Row className="form-group">
								<Label className="ml-3" htmlFor="comment">
									{" "}
									Comment
								</Label>
								<Col md={12}>
									<Control.textarea
										model=".comment"
										id="comment"
										name="comment"
										rows="6"
										className="form-control"
									/>
								</Col>
							</Row>
							<Row className="form-group">
								<Col ml={4}>
									<Button color="primary" type="submit">
										Submit
									</Button>
								</Col>
							</Row>
						</LocalForm>
					</ModalBody>
				</Modal>

				<Button outline onClick={this.toggleModal}>
					<span className="fa fa-pencil fa-lg"></span> Submit Comment
				</Button>
			</>
		);
	}
}
export default CommentForm;
