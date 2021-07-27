import React, {Component} from 'react';
import { Box } from "@chakra-ui/react";


class AllowNumbers extends Component {
	constructor() {
		super();
		this.state = {value:''};
	}

	txtNum(e) {
		this.setState({inputvalue:e.target.value.replace(/\D/g,'')});
	}
	render() {
		return (
			<Box align="center">
				<hr />
				Enter Weight: <input type="text" value={this.state.inputvalue} onChange={this.txtNum.bind(this)} placeholder="Enter Only Numbers..."/>
			</Box>
		)
	}
}

export default AllowNumbers;