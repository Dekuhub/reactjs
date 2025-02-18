import classes from './page.module.css'
import { useRef, useState } from 'react'

export const PageFetch = () => {
  const urlRef = useRef("");
  const resultRef = useRef("");
  const bodyRef = useRef("{}");
  const [method, setMethod] = useState("GET");

  const hasBody = ["POST", "PUT"].includes(method);

  const headers = {
    "Content-Type": "application/json"
  }

  const port = 3000;

  const submit = (e) => {
    e.preventDefault();
    const url = "http://localhost:" + port + urlRef.current.value;
    const body = hasBody ? JSON.parse(bodyRef.current.value) : {};

    const promise = hasBody ?
    fetch(url, { method, body: JSON.stringify( body ), headers }) :
    fetch(url, { method }) ;

    promise.then((resp) => {
      return resp.json();
    }).then((data) => {
      const json = JSON.stringify(data, null, 2);
      resultRef.current.value = json;
    }).catch((err) => {
        resultRef.current.value = err.toString();
    });
  }

  return (
    <div className={classes.wrapper}>
      <form>
        <div className="row">
          <input className={classes.input} type="text" defaultValue="" ref={urlRef} />
          <select className={classes.select} value={method} onChange={ (e) => setMethod(e.target.value) }>
            <option value="GET">GET</option>
            <option value="POST">POST</option>
            <option value="PUT">PUT</option>
            <option value="DELETE">DELETE</option>
          </select>
        </div>

        { ["POST", "PUT"].includes(method) &&
        <div className="row">
          <textarea ref={bodyRef} className={classes.textarea}></textarea>
        </div> }

        <div className="row">
          <textarea ref={resultRef} className={classes.textarea}></textarea>
        </div>

        <div className="row">
          <button onClick={submit}>Send</button>
        </div>
      </form>
    </div>
  )
}