const User = require('../models/userModel')

exports.getAllUsers = function()
    {
    return new Promise((resolve, reject) =>
        {
            User.find({}, function (err,data)
            {

                if (err)
                {
                    reject(err)
                }
                else
                {
                    resolve(data);
                }
            })
        })
}

exports.getUsers = function(id)
{
    return new Promise((resolve, reject) =>
    {
        User.findById(id, function (err,data)
        {

            if (err)
            {
                reject(err)
            }
            else
            {
                resolve(data);
            }
        })
    })
}

exports.createUsers = function(newUser)
{
    return new Promise((resolve, reject) =>
    {
        const u = new User({
            Name : newUser.Name,
            Email : newUser.Email,
            Street : newUser.Street,
            City : newUser.City,
            Zipcode : newUser.Zipcode,
            Tasks : newUser.Tasks,
            Post : newUser.Post
        })

        u.save(function (err)
        {
        if (err)
        {
            reject(err);
        }
        else {
            resolve('Created!')
        }
        })
    })
}

exports.updateUsers = function(id, updateData)
{
    return new Promise((resolve, reject) =>
    {
        User.findByIdAndUpdate(id,
            {
                Name : updateData.Name,
                Email : updateData.Email,
                Street : updateData.Street,
                City : updateData.City,
                Zipcode : updateData.Zipcode,
                Tasks : updateData.Tasks,
                Post : updateData.Post
                    }, function (err)
            {
                if (err)
                {
                    reject(err);
                }
                else {
                    resolve('Updated!')
                }
            })

            })
}

exports.deletUsers = function(id)
{
    return new Promise((resolve, reject) =>
    {
        User.findOneAndDelete(id, function (err)
        {

            if (err)
            {
                reject(err)
            }
            else
            {
                resolve('Deleted!');
            }
        })
    })
}
