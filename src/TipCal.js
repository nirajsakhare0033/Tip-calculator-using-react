import React from 'react';

class TipCal extends React.Component {

        state = {
                total: '',
                service: '',
                person: '',
                totalTip: '',
                perPerson: '',
                Customer: '',

        }

        handleTotal = (event) => {
                this.setState({
                        total: event.target.value
                })
        }

        handleService = (event) => {
                this.setState({
                        service: event.target.value
                })
        }

        handlePer = (event) => {
                this.setState({
                        person: event.target.value
                })
        }

        handleaddCustomer = (event) => {
                this.setState({
                        Customer: event.target.value
                })
        }

        TipCalculation = (event) => {
                event.preventDefault();
                let tip = parseFloat((this.state.total * this.state.service)/100).toFixed(2)
                let totalperPerson = parseFloat(tip / this.state.person).toFixed(2)
                this.setState({
                        totalTip: tip,
                        perPerson: totalperPerson
                        
                })
        }
        render() {

                return (


                        <div>
                                <h1>tip calculator</h1>
                                <form onSubmit={this.TipCalculation} >
                                        <label className='ui container'>Bill total:
                                        <div className='ui input focus'>
                                        
                                                <input  type='number' placeholder='rs' value={this.state.total} onChange={this.handleTotal} />
                                        </div>
                                        
                                        </label><br></br>

                                        <label className='ui container'>service:
                                        <div className='ui input focus'>
                                                <input  type='number' placeholder='rs' value={this.state.service} onChange={this.handleService} />
                                        </div>
                                        </label><br></br>

                                        <label className='ui container'>person:
                                        <div className='ui input focus'>
                                                <input  type='number' placeholder='rs' value={this.state.person} onChange={this.handlePer} />
                                        </div>
                                        </label><br></br>
                                        <label className='ui container'>add customer:
                                        <div className='ui input focus'>
                                               <input type='text' value={this.state.Customer} onChange={this.handleaddCustomer} />
                                        </div>
                                        </label>
                                        
                                        <input className='ui container' class='positive ui button' type='submit' /> 

                                        


                                </form>

                                <p className='ui container'>tip: rs{this.state.totalTip}</p>
                                <p className='ui container'>perPerson: rs{this.state.perPerson}</p>
                                <p>your tip for {this.state.Customer} is {this.state.perPerson}rs here </p>
                        </div>

                );
        }
}

export default TipCal;