# Simple Cookie
[![Powered by Dockwa](https://raw.githubusercontent.com/dockwa/openpixel/dockwa/by-dockwa.png)](https://engineering.dockwa.com/)

This is a very simple, super lightweight javascript cookie class to be used however you like. It has 4 simple methods...

### Set Cookie
```javascript
Cookie.set('name', 'value')
```

You can also use it set the expiration time, by default it never expire. The expiration is in minutes so laying out the multiplication for a year would be as follows.

```javascript
Cookie.set('name', 'value', 60*24*365)
```

The path can also be optionally set as follows.

```javascript
Cookie.set('name', 'value', 60*24*365, document.location)
```

### Get Cookie
```javascript
Cookie.get('name')
```

Returns the value of the cookie if it exits, 'undefined' if it does not exists.

### Remove Cookie
```javascript
Cookie.remove('name')
```

Removes the cookie with that name if it is set.

### Exists Cookie
```javascript
Cookie.exists('name')
```

Returns a TRUE or FALSE value is the cookie is currently set on the client.

---
And it's as simple at that! :) Enjoy
