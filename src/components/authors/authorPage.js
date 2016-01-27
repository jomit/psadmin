"use strict";

var React = require("react");
var AuthorApi = require("../../api/authorApi");

var Authors = React.createClass({
	getInitialState: function(){
		return {
			authors: []
		};
	},

	componentWillMount: function(){
		//Making synchronous call to author api as its just a mock api
		//Need to make async call for real AJAX calls
		this.setState({ authors: AuthorApi.getAllAuthors()});
	},

	render: function() {
		var createAuthorRow = function(author){
			return (
				<tr key={author.id}>
					<td><a href={"/#authors/" + author.id}>{author.id}</a></td>
					<td>{author.firstName} {author.lastName}</td>
				</tr>
			);
		};

		return (
			<div>
				<h1>Authors</h1>
				<table className="table">
					<thead>
						<th>ID</th>
						<th>Name</th>
					</thead>
					<tbody>
						{this.state.authors.map(createAuthorRow, this)}
					</tbody>
				</table>
			</div>	
		);
	}
});

module.exports = Authors;