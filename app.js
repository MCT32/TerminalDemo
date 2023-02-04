class Acheivement {
	name = undefined
	desc = undefined
	done = false
	
	constructor(name, desc) {
		this.name = name
		this.desc = desc
	}
}

class Script {
	exec = undefined
	
	constructor(exec) {
		this.exec = exec
	}
}

class Text {
	text = undefined
	script = undefined
	
	constructor(text, script) {
		this.text = text
		this.script = script
	}
}

class Terminal {
	htmlElement = undefined
	
	dirs = {
		"bin": {},
		"boot": {},
		"dev": {},
		"etc": {
			"shadow": new Text(";)", "term.complete('hacker')")
		},
		"home": {
			"mct32": {
				"acheivements": {
					"hacker": new Acheivement("Master Hacker", "Find the root password.")
				},
				"contacts": {
					" github": new Script("window.location.href = 'https://github.com/MCT32'"),
					"ﭮ discord": new Script("window.location.href = 'https://discord.gg/VTKHuH2zNm'")
				}
			}
		},
		"lib": {},
		"media": {},
		"mnt": {},
		"opt": {},
		"proc": {},
		"sbin": {},
		"srv": {},
		"tmp": {},
		"usr": {},
		"var": {}
	}
	
	cwd = ["home", "mct32"]
	user = "mct32"
	machine = "mct32.com"
	
	obselete() {
		for (let i of this.htmlElement.childNodes) {
			if (i instanceof Element) {
				i.removeAttribute("onclick")
				i.removeAttribute("href")
			}
		}
	}
	
	evalUser() {
		return this.user + "@" + this.machine
	}
	
	evalDirText(dir) {
		let buffer = ""
		for (let i of dir) {
			buffer += "/" + i
		}
		if (buffer == "") buffer = "/"
		
		return buffer
	}
	
	evalCwd() {
		if (this.cwd.length == 2 && this.cwd[0] === "home" && this.cwd[1] === this.user) return "~"
		
		return this.evalDirText(this.cwd)
	}
	
	evalDir(dir) {
		let current = this.dirs
		for (let i in dir) {
			let dirVal = dir[i]
			current = current[dirVal]
		}
		return current
	}
	
	constructor(htmlElement) {
		this.htmlElement = htmlElement
	}
	
	printShell() {
		this.htmlElement.innerHTML += '<i class="user">' + this.evalUser() + '</i>:<i class="dir">' + this.evalCwd() + '</i>$ '
		document.getElementById("pageend").scrollIntoView()
	}
	
	printDirs(dir) {
		if (this.cwd.length > 0) this.htmlElement.innerHTML += '<a class="dirlist" href="#" onclick="term.prev()">..</a><br>'
		for (let i of Object.keys(dir)) {
			if (dir[i] instanceof Text) {
				this.htmlElement.innerHTML += '<a class="text" href="#" onclick="term.cat(\'' + i + '\')">' + i + '</a><br>'
				continue
			}
			
			if (dir[i] instanceof Script) {
				this.htmlElement.innerHTML += '<a class="script" href="#" onclick="' + dir[i].exec + '">' + i + '</a><br>'
				continue
			}
			
			if (dir[i] instanceof Acheivement) {
				if (dir[i].done) {
					this.htmlElement.innerHTML += '<a class="acheivementdone">' + dir[i].name + ': ' + dir[i].desc + '</a><br>'
				} else {
					this.htmlElement.innerHTML += '<a class="acheivement">' + dir[i].name + '</a><br>'
				}
				continue
			}
			
			this.htmlElement.innerHTML += '<a class="dirlist" href="#" onclick="term.cd(\'' + i + '\')">' + i + '</a><br>'
		}
	}
	
	ls() {
		this.htmlElement.innerHTML += "ls<br>"
		this.printDirs(this.evalDir(this.cwd))
		this.printShell()
	}
	
	cat(file) {
		this.cwd.push(file)
		this.htmlElement.innerHTML += "cat " + file + "<br>" + this.evalDir(this.cwd).text + "<br>"
		if (this.evalDir(this.cwd).script) eval(this.evalDir(this.cwd).script)
		this.cwd.pop()
		this.printShell()
	}
	
	cd(folder) {
		this.obselete()
		this.cwd.push(folder)
		this.htmlElement.innerHTML += "cd " + folder + "<br>"
		this.printShell()
		this.ls()
	}
	
	prev() {
		this.obselete()
		this.cwd.pop()
		this.htmlElement.innerHTML += "cd ..<br>"
		this.printShell()
		this.ls()
	}
	
	init() {
		this.printShell()
		this.ls()
	}
	
	complete(name) {
		this.dirs["home"]["mct32"]["acheivements"][name].done = true
	}
}

let termElement = document.getElementById("terminal")
let term = new Terminal(termElement)
term.init()

console.log("DON'T CHEAT!")
console.log("DON'T CHEAT!")
console.log("DON'T CHEAT!")
console.log("DON'T CHEAT!")
console.log("DON'T CHEAT!")
console.log("DON'T CHEAT!")
console.log("DON'T CHEAT!")
console.log("DON'T CHEAT!")
console.log("DON'T CHEAT!")
console.log("DON'T CHEAT!")
console.log("DON'T CHEAT!")
console.log("DON'T CHEAT!")
console.log("DON'T CHEAT!")
console.log("DON'T CHEAT!")
console.log("DON'T CHEAT!")
console.log("DON'T CHEAT!")
console.log("DON'T CHEAT!")
console.log("DON'T CHEAT!")
console.log("DON'T CHEAT!")
console.log("DON'T CHEAT!")
console.log("DON'T CHEAT!")
console.log("DON'T CHEAT!")
console.log("DON'T CHEAT!")
console.log("DON'T CHEAT!")
console.log("DON'T CHEAT!")
console.log("DON'T CHEAT!")