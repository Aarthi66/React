import React,{Component} from 'react';
import './App.css';
import Comp1 from './Comp1.jsx'


class App extends Component {

  constructor(props){
    super(props);
    this.state ={
      noteText : '',
      notes : []
    };
  }
  updateNotetext(event){
    this.setState({noteText : event.target.value})
  }
  handleKeyPress(event){
   if(event.key === 'Enter'){
    let notesArr = this.state.notes;
    notesArr.push(this.state.noteText);
    this.setState({noteText: ''});
   }
  }
  addNotes(){
    if(this.state.noteText === ''){return}
    
    let notesArr = this.state.notes;
    notesArr.push(this.state.noteText);
    this.setState({noteText: ''});
    console.log("Update NoteText String - " + this.state.noteText);
    this.textInput.focus();
  }
  deleteNote(index){
    console.log(index);
   let notesArr = this.state.notes;
   notesArr.splice(index,1);
   this.setState({notes : notesArr})
  }
  render() { 
    let notes =this.state.notes.map((val,key) =>{
      return <Comp1 key={key} text={val} deleteMethod={()=>this.deleteNote(key)}/>
    })
    return ( 
      <div className ='container'>
        <div className ='header'>React Application</div>
        {notes}
        <div className='btn' onClick={this.addNotes.bind(this)}>+</div>
        <input type='text' className='textInput' value={this.state.noteText} ref={((input)=> {this.textInput = input})}  
        onChange={noteText => {this.updateNotetext(noteText) }} onKeyPress= {this.handleKeyPress.bind(this)} onFocus={this.value=''}/>
      </div>
     );
  }
}
 
export default App;
