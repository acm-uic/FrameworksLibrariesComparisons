import React, { useState } from 'react';
import CardContent from './CardContent';

function User(id, fname, lname, email){
    this.id = id;
    this.fname = fname;
    this.lname = lname;
    this.email = email;
}

function HomeBody() {
    var initialList = [new User(1, "John", "Snow", "jsnow@acmuic.org"),new User(2, "Christian", "Bingman", "cbingm@acmuic.org")];
    const [list, updateList] = useState(initialList);
    const [fnameField, updateFnameField] = useState('');
    const [lnameField, updateLnameField] = useState('');
    const [emailField, updateEmailField] = useState('');
    const [isSearching, toggleSearch] = useState(false);
    const [searchField, updateSearchField] = useState('');


    let addUser = (fname, lname, email) => {
        updateList([...list, new User(list.length === 0 ? 1 : list[list.length-1].id+1, fname, lname, email)])
    }
    let delUser = (id) => {
        let newList = list.filter(item => item.id !== id);
        updateList(newList);
    }

    let search = (event) =>{
        updateSearchField(event.target.value);
        if(event.target.value === ""){
            toggleSearch(false);
        }else{
            toggleSearch(true);
        }
    }
    let getAllUser = () => {
        return (
            list.map((user) => {
                return (<div className="card my-3">
                    <CardContent user={user} />
                    <div className="card-footer">
                        <div className="float-right">
                            <button className="btn btn-outline-danger" onClick={() => {delUser(user.id)}}>Delete</button>
                        </div>
                    </div>
                </div>);
            })
        );
    }

    let searching = () => {
        let newUserList = list.filter(el => el.email.includes(searchField));
        return (
            newUserList.map((user) => {
                return (<div className="card my-3">
                    <CardContent user={user} />
                    <div className="card-footer">
                        <div className="float-right">
                            <button className="btn btn-outline-danger" onClick={() => {delUser(user.id)}}>Delete</button>
                        </div>
                    </div>
                </div>);
            })
        );
    }

    return (
        <main>
            <div className="mx-auto input-group" style={{'text-align': 'center'}}>
                <input onChange={event => search(event)} type="search" name="search" id="search" className="form-control" placeholder="Search Here!" />
            </div>
            <div class="input-group mx-auto my-3">
                <input onChange={event => updateFnameField(event.target.value)} type="text" name="fname" id="fname" className="form-control" placeholder="First Name" />
                <input onChange={event => updateLnameField(event.target.value)} type="text" name="lname" id="lname" className="form-control" placeholder="Last Name" />
                <input onChange={event => updateEmailField(event.target.value)} type="email" name="email" id="email" className="form-control" placeholder="E-Mail" />
                <div class="input-group-append">
                    <button className="btn btn-outline-success" onClick={() => addUser(fnameField, lnameField, emailField)}>Create User</button>
                </div>
                
            </div>
            <hr />
            <div id="user-list">
                {isSearching === false ? getAllUser() : searching()}
            </div>
        </main>
    );
}

export default HomeBody;