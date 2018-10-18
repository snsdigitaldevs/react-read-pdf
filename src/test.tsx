import * as React from "react";
import {Component,Fragment} from 'react';
import PDFReader from "./components/PDFReader/index";
import MobilePDFReader from "./components/MobilePDFReader/index";
//atob() is used to convert base64 encoded PDF to binary-like data.
const pdfData = atob(
  'JVBERi0xLjcKCjEgMCBvYmogICUgZW50cnkgcG9pbnQKPDwKICAvVHlwZSAvQ2F0YWxvZwog' +
  'IC9QYWdlcyAyIDAgUgo+PgplbmRvYmoKCjIgMCBvYmoKPDwKICAvVHlwZSAvUGFnZXMKICAv' +
  'TWVkaWFCb3ggWyAwIDAgMjAwIDIwMCBdCiAgL0NvdW50IDEKICAvS2lkcyBbIDMgMCBSIF0K' +
  'Pj4KZW5kb2JqCgozIDAgb2JqCjw8CiAgL1R5cGUgL1BhZ2UKICAvUGFyZW50IDIgMCBSCiAg' +
  'L1Jlc291cmNlcyA8PAogICAgL0ZvbnQgPDwKICAgICAgL0YxIDQgMCBSIAogICAgPj4KICA+' +
  'PgogIC9Db250ZW50cyA1IDAgUgo+PgplbmRvYmoKCjQgMCBvYmoKPDwKICAvVHlwZSAvRm9u' +
  'dAogIC9TdWJ0eXBlIC9UeXBlMQogIC9CYXNlRm9udCAvVGltZXMtUm9tYW4KPj4KZW5kb2Jq' +
  'Cgo1IDAgb2JqICAlIHBhZ2UgY29udGVudAo8PAogIC9MZW5ndGggNDQKPj4Kc3RyZWFtCkJU' +
  'CjcwIDUwIFRECi9GMSAxMiBUZgooSGVsbG8sIHdvcmxkISkgVGoKRVQKZW5kc3RyZWFtCmVu' +
  'ZG9iagoKeHJlZgowIDYKMDAwMDAwMDAwMCA2NTUzNSBmIAowMDAwMDAwMDEwIDAwMDAwIG4g' +
  'CjAwMDAwMDAwNzkgMDAwMDAgbiAKMDAwMDAwMDE3MyAwMDAwMCBuIAowMDAwMDAwMzAxIDAw' +
  'MDAwIG4gCjAwMDAwMDAzODAgMDAwMDAgbiAKdHJhaWxlcgo8PAogIC9TaXplIDYKICAvUm9v' +
  'dCAxIDAgUgo+PgpzdGFydHhyZWYKNDkyCiUlRU9G');

export default class PDFTest extends Component{
  state = {
    page:1,
    scale:1
  }
  private changePage=()=>{
    const { page,scale } = this.state;
    this.setState({
      page:page+1
    })
    this.setState({
      scale:scale+1
    })
  }
  private completeLoad(){

  }
  public render(){
    const { page,scale } = this.state;
    return <Fragment>
              <div style={{height:600,overflow:'srcoll'}}>
                <PDFReader url={{url:'/test.pdf'}} page={page} scale={scale} width={500} showAllPage={false} onDocumentComplete={function(x){console.log(x)}}/>
                {/* <MobilePDFReader url={'/test.pdf'}  page={page} scale={scale} minScale={0.3} maxScale={9} onDocumentComplete={function(totalPage,title,otherObj){console.log(totalPage,title,otherObj)}}/> */}
                <button onClick={this.changePage} style={{position:'fixed',top:0,left:0}}>button</button>
              </div>
          </Fragment>
  }
}
