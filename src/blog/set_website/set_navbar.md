**Set Navbar**

for paths in navbar: / = “scr/“

Find icons:  https://icon-sets.iconify.design/





`export default navbar([`

`// New topic`

`{text: “text”, icon: “icon_name”, link: ""/path"},`



`// New group`

`{`

  `text: "name",`

  `icon: "icon:name",`

`prefix: “/path_prefix”`

  `children: [`

`// Ad entry`

   `"/path",`



`// Add link`

   `{ text: "test", icon: "icon_name", link: "/path"},`



`// Add group in group`

​	`{`

​    	`text: "Set Website",`

​    	`icon: "",`

​    	`children: [`

​     	`{ text: "", icon:"", link:"#" },`

​     	`{ text: "", icon: "", link: "#" },`

​    	`]`

   	`}`

  `]`

 `},`

`)}`