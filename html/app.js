axios.get('/temp.json')
.then(function (result) {                        
      let data= result.data                                                
      ReactDOM.render(
            <table>
                  <thead>
                        <tr>
                        {Object.keys(data[0]).map((i)=><td>{i}</td>)}
                        </tr>
                  </thead>
                  <tbody>
                        {data.map((row, key)=><tr key={key}>
                              {Object.keys(row).map((field,keyfield)=><td key={field}>{row[field]}</td>)}                                                
                        </tr>)}
                  </tbody>
            </table>,
            document.getElementById('root')
      );
})