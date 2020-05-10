# HEX Reader
A cli (Command line interface) application to read the content of a file or just a simple string value from input.

It also works in linux pipe line to get the input from stdin and puts the output into stdout.

## Installation
It can be installed locally, but global installation is recommended because makes it available everywhere.
```
npm install -g hex-reader
```

## Usage
You can use hex-reader in three possible ways.

### 1. Read the content of a file by passing a valid the file path to it
```
hex-reader /var/log.txt
```

### 2. Read a simple string
```
hex-reader "this is a simple string"
```
*Note: If you pass an invalid file path or the application couldn't be able to read it, it just reads the file path as a simple string.*

### 3. Read a content from pipe line
```
cat /var/log.txt | hex-reader
```

And a sample preview of its result:

![hex-reader preview](https://raw.githubusercontent.com/Babak-Gholamzadeh/hex-reader/master/preview/preview.jpg)
