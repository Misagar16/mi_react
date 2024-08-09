const parent = React.createElement("div" , 
    {id : "parent"},
    [React.createElement("div" , 
        {id : "child1"},
         [React.createElement("h1" , {},"heading 1"),React.createElement("h2" , {},"heading 12")]),


    React.createElement("div" , 
            {id : "child2"},
             [React.createElement("h1" , {},"heading 1"),React.createElement("h2" , {},"heading 13")])
        
        ])


const root2 = ReactDOM.createRoot(document.getElementById("root"));

root2.render(parent);



