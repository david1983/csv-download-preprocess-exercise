'use strict';

axios.get('/temp.json').then(function (result) {
      var data = result.data;
      ReactDOM.render(React.createElement(
            'table',
            null,
            React.createElement(
                  'thead',
                  null,
                  React.createElement(
                        'tr',
                        null,
                        Object.keys(data[0]).map(function (i) {
                              return React.createElement(
                                    'td',
                                    null,
                                    i
                              );
                        })
                  )
            ),
            React.createElement(
                  'tbody',
                  null,
                  data.map(function (row, key) {
                        return React.createElement(
                              'tr',
                              { key: key },
                              Object.keys(row).map(function (field, keyfield) {
                                    return React.createElement(
                                          'td',
                                          { key: field },
                                          row[field]
                                    );
                              })
                        );
                  })
            )
      ), document.getElementById('root'));
});