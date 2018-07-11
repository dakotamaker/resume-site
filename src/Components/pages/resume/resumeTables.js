import React, { Component } from 'react';
import BootStrapTable from 'react-bootstrap-table-next';

class ResumeTables extends Component {
  render() {
    const LanguagesCaption = () => <h4 style={{  textAlign: 'center', padding: '0.5em' }}>Languages/Frameworks</h4>;
    const ToolsCaption = () => <h4 style={{  textAlign: 'center', padding: '0.5em' }}>Tools</h4>;
  
    const languagesAndFrameworks = [{key: 'Java', exp: "✔"}, {key: 'JavaScript', prof: "✔"}, 
                                    {key: 'Angular.JS', prof: "✔"}, {key: 'Angular Material', prof: "✔"}, 
                                    {key: 'React.JS', prof: "✔"}, {key: 'HTML5 + CSS3', prof: "✔"},
                                    {key: 'Python', prof: "✔"}, {key: 'C', qual: "✔"}, {key: ' '}];
  
    const tools = [{key: 'Android Mobile', qual: "✔"}, {key: 'Git', exp: "✔"}, 
                   {key: 'Google Data Studio', exp: "✔"}, {key: 'Google Sheets', exp: "✔"}, 
                   {key: 'Jenkins CD Pipeline', prof: "✔"}, {key: 'Jira', exp: "✔"}, 
                   {key: 'Microsoft Office',exp: "✔"}, {key: 'Postman', prof: "✔"}, {key: ' '}];
  
    const columns = [{dataField: 'key', text: ' ', align: 'left'}, 
                     {dataField: 'qual', text: 'Qualified', align: 'center', headerAlign: 'center', classes: 'check'}, 
                     {dataField: 'prof', text: 'Proficient', align: 'center', headerAlign: 'center', classes: 'check'}, 
                     {dataField: 'exp', text: 'Experienced', align: 'center', headerAlign: 'center', classes: 'check'}];
  

    return (
      <div>
        <BootStrapTable
            keyField="key"
            caption={<LanguagesCaption />}
            data={ languagesAndFrameworks }
            columns={ columns }
            bordered={ false }/>
        <BootStrapTable
            keyField="key"
            caption={<ToolsCaption />}
            data={ tools }
            columns={ columns }
            bordered={ false }/>
        </div>      
    )
  }
}
  
export default ResumeTables;