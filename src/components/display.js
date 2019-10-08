import React from 'react';
export default class Display extends React.Component{
	constructor(props) {
		super(props);

		this.state = {
			data:[]
		};
    };
  componentDidMount() {
    // fetch('http://localhost:4000/backend/userlist')
    //   .then(res => res.json())
    //   .then(members => this.setState({ data: members.data }));
  }

  render(){
      console.log(this.state.data);
    return (
        <div >
       
          {this.state.data.map(member =>
            <div key={member.id}>{member.name} {member.age}</div>
          )}
        </div>
    );
  }
}