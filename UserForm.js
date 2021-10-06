// Initial userForm to load on initial server response
function userForm() {
    return (`
            <h1>Calculator</h1>
            <form action='/compute' method="POST">
            <label>Number 1</label>
            <input type="number" name="num1" required placeholder="Enter">
            <br>
            <br>
            <label>Number 2</label>
            <input type="number" name="num2" required placeholder="Enter">
            <br>
            <br>
            <label>Operator</label>
            <select name="operator">
            <option value="add"> + </option>
            <option value="subtract"> - </option>
            <option value="multiply"> * </option>
            <option value="divide"> / </option>
            </select>
            <br>
            <br>    
            <input type="submit" value="=">
            </form>`
    )
}

module.exports = userForm;