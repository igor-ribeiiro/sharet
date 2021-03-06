/**
 * Created by ericpqmor on 27/05/17.
 */
const mongoose = require("mongoose");
const Job = require("./models/job");
const User = require("./models/user");
const History = require("./models/history");

const users = [
    {
        username: "aloysio",
        email: "aloysiogl@gmail.com",
        password: "ehcara"
    },
    {
        username: "eric",
        email: "ericpqmor@gmail.com",
        password: "81160709"
    },
    {
        username: "dono",
        email: "igorribeiro@gmail.com",
        password: "sugar"

    }
];

const data = [
    {
        name: "Fazer o backend do app em NodeJS",
        image: "https://raygun.com/blog/wp-content/uploads/2016/05/nodejs-logo.png",
        description: "Fazer o código da manuntenção do servidor e da database, além da criação de rotas em nodejs",
        category: "PONTUAL",
        assigned: users,
        turn: 0
    },
    {
        name: "Fazer o front-end em react.js",
        image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAO4AAADUCAMAAACs0e/bAAAAV1BMVEX///9h2vtV2PtU2Pv7/v9u3fv2/f9j2/vc9v7y/P+97v194Px23vuO4/zk+P7T9P7j+P7s+v6g5/yG4vzG8P2x6/2Y5fyp6f3X9f7M8v647f2u6v2V5fwgIz21AAAUoElEQVR4nNUda9uyLOwONc1TmZVZ/f/f+abFNmAoYPpc7z7dB0UGY+eNv7+FEGf5uSqSpGxvz75eOpoJdf+8tUVSFtX5kv1+eD+4VEKI3ReEiER7/SHK9bV9DynI8K/j70b3hnwHqO4Q5+TZ/GLw5plE5vBRkv9i8AA4Msh+MI6KfungfcHg+hk9/Sc0/Yr46Xzn9IjDh44ftpX87PD5d1g4wr6cmtCAsLgGIhx3Ym7sYsFahsAhnZ7QOKld0DF7zCE7DJ1sim+czGM7zCr1ZqR9Oo/sMHK5Blo2KOic3vJhlyTpTjDbErVeXLopTIYwDJsOwyu8S7Rr4WZCRz4cldd6P/wxPtzfYtLAOLq6j/s0kBVvQX48jJR7yN6SiYz7WAc3E074VZHclX/FfaULEFE6bnCd6G9GVa+e0SMh9egn0t0BSvzkk/l3nmib5LbB+tYKVqE441PFMixc4QJfjC78E3ftCIriMDfoQRNsUXvnH8zx69solCCDIrugyXSEZ9SsXkO2OFkffcKjSSgGPgAzE7epx47qSZzWhG7K4ojSsrMfqOTA0eRjP4JCziqdeTBX2LQo9rYHVUIWYkY72cPTGwijBjZ31gzYa2q1RbW/q3T8si6LhBymMMsSFgPI3LnNHUA1mviz/qBrIlIXAoWn15e9Un2cI7kPxMoGcwdYObbRzUkXvspFXF0WNXJ2wlFJ7ydVv1hVRx3N5ANQ8yzhLwQ4N5XrGwojEokywQNl3w7SWULruT7BcJMfsmgYHJwpvaZE96vJ33dR5z6iXHSxtqEvdQwvpnhRKBYY9F1hUj4bBeJhZTtwL2fop9HU1IoVX+WvJ9iKxE/hB5LwessbMjntSY3KBIUlReNGXii2vgpDJYdawbNNQJKlmxiiQAXOYFpQcevva5OiSKxrJkj9XPirqwp+ufqb92BSvK2saAARBdjWylmltB2wQ9LDsDJrlvZBEIvIVCtPYm639ewQy6VzFv9BIFVIF4XZhJpDN8wHs40aKcVuoLw7GMgmgWqgnMiqJv5ezjLU0tynv8EW/GVhZOYIsZxm8JHZlxTbMjgYUGyB7sHbQDCAWkgB4kyCNBJ2a9pEh0ClCkHlziJYKZIScbdmsGgxuo0ui0LdL9ui+wp8f6dDGkiMm6C7X3h2mcBhoEgrtkB3IWcuGLUqMJS3CWcGdIOUmRtim6D8DVN7l6l3rrBEmbmSwGFTk1BeSJB/E61qyaISgyjK/v6O5NcAk2gbnVkeGeH9Zk3Q070Zwt9MkC+vGzcBe9dXfhBlWcbdCXGnvvwV3N3B+o4TnL9E5O0jQlUZWROyLuFLk1I5E1w8/XfwCHTeEMwI+aFg8mXPfbDPzAvANefhVf+jIXeFlZJ8JVsigAUe27jmgIg8XP7vt4iXSg2a4N/9jgccqhDPjzs0IT6imCClTY8shJdsA5/ZyjGxkChCC0fUJFkkcy9tEmI3Hu+EAJw291cwd4Q7Amf8r7vPGEyVtXMFpeB11wzuM/sHts2obLnBaRuxi7kKzgG7PbGC2AfIyXa25kBArJ2tAALPNdWRpNhZeC9hV67aRreNHCKqryNrxqNpN3xQm3RVkqRjLlo79SaW03djzWj3iAl/T4Vr4nZ8JWNe19odoPRZ2JgY9FPPEWe7yxxA+q+fBXrzOTYocaddjuigFC6HpA/S7YLg4sGriKpcnKu2TJJRbEdfGDd9qC+rzoShOSjP3uIhHE4OhnXcZH3+vIGnf5zabgKUf7a3Z95nU3JdLk6AW8AXQExyId79qX+c21SMMIXfJAwvR2KXtudHf+KUYiCatZH9I9o51fbj5vi4lSKKlqDJ4f0esbg9jg1VQCDwskX5xVOzrPdZfit30S/RNNGOduU5z747fd1KpxrgTiIJb0zTRXTrhbMQ6S0/WehrLYC0iF0R2coSV0T6Tdzy55VzyL5QTk1nS9ikcior5idCYeTSAw/bpekgZd/QjjD89P5DOtSXjTzO91C0axPz4VLtpupYGUge+eWY1c1hb7Xu4v2hOWXHS/5wKKSkEO1e/WpGwiEvZtf/s5ElMdm9doDagm5iTYgiX8Ff9cZ1mi8NmkHSdo/jUBEIx9tXq0V78a397+tBaUnEjJAT0a8x7plaRoKoiJLq2dfwzQWVTUDOKFTfWD+rdBJnIaqfqc/12f6lN6rJLc/UY4nRL3fvkwRiIKsK8f4r460z2XW/0KAv5QQRt4+MISPwVoZEql/wNcbLuL8/7HLhTdR+oQhz+OekJcMbgVCdEeRsQE8dbwp2kxNKr+GnuLmxtEP+yB1NdD2G1eiRsDcnulJuHnRytzCaro3C43G4qOwyiJ1zzkWgxumSSDuA54o7Cyiq/rKO6yPynmEAwk3FqBMDyx+HAue66TnMpjfHAQh5mKspJdVnLZuc4ywievkpH/uziSwV6JDYaFIz8KkoWDRgGoPJrSQtw0FhlR8RdR5rbbaueEvWByERdGno6/+ANxco8MB9jTByxjkymqte/u7TtOOkl/y/N/asoQXUrGlNhBAXSMHaeiBUWiZzvhlELUqniLFBx1FpSgSgZk3WIJ9a5BM927gV4GIw/djocOBSZqdvrYgqTjMCf7mqNyGtLfPvE+GrmBhHWAburXtrNGeY2eCr+oKIzhaafLHL/wM+9QHkVkqggP8qQvPSaHqymUjcKg+/j6yVocM6U55x+QWf+gB6aMjC7XmaonDQFPzIHpVotGYItynpBWtCpoMtJqb51Nucb2aUPeRWRNZdLBxDxUKt+BeJBYuTiuxMcx7gJriRVxc+dbq2H3+OKLqpMBNyK5QohcP4b6jVph18BcCRPiPSucMHXAlCgSiErIu/v1K97012uoBDQG4FZe8Q+JtNSuoVy0YwpK9g61IpDT0HJDeAzDhrjtmTUV8q24nJDVoBY2g+ASVWxKmJL62Udmte99AOUjOh+o2Q8Z23rMwTzebvsYLfXRSmO/2aztpq+j+3uooD9Fj4HMHWNvYXrjYXZmRh40Bv38A/qDaRkz4cVwQn1TVCs1+c+14BfiOvRw2Dn/3Nhu3O2jkOHHwfXQNkk2uZC11gxZYhgQHuXPMAqz+KHdQwWI7+YgkZJsOKpZOia4BocneAHQlbJJtwJXPxyMSETL2OUh5r1E+6XHa2TnmwRoO5B5LJw7t5wk9g4g85uKmPXYxylvIVbqOOdkr+vsVqhZiyUWD1gVcKc0M+IakOnXt+LYKwF0uPTaw4bx1lDRbg/VpAFFEGGpVf4xdShfdVJ3HpfQOmUJlW4Ipxz52nSXkElkQxUamAfAxPDxhK2O+ZRwbo66bNTCcCR2mHOVK2vkmcIzBJ3yqInJ4IMmenlCYVjJo+Vn102VwbBzIe80/pRYVgWCnU/fw9h7mGCL9FbmFbXr7o2+tZBDEA6kMDP4SBAhI7dB7Ebm7vhq7lUOqP+U8SJUhCZXmIW1ilU37pb27oWuwodXuDXGDoFagXtn5qovkJu3X7tebAKRH9sGZ6pMnWWf4Y1sK7onNhNzd23FxbhqPCH8KqwqUy+aYN8BCEhc5ONjUcoHYRQ+MMLMyDbG+g85o0hJCkFloIS1Qyfnf4TjccupZzSbY31OMn3y+WtnXBJDrbgh2d0bVxD0xgCO2Zj3u6FN1aVVpMcEfXxnUxsSU0EIPoLiVm5FUWO9SdmC11FyRdI7Q7Fe7IQlZFJRG/vY0zq7JYdsT3EFjyR1gVCKKw/jNUz+CNOAfr7/s6Tx3UVg6sTiaCCNSMoNSCvUKp/Pa65lBa6EvRUgL0+j8SWrosVCKvCrr89j4dDy/PPXrlLARVYwMtD2IbPE4hud+agshu78nt8FpKV7QvhHDUjpgIePoC+IDug+I7YLgpzXwdlm5O+efhkabDg6Q7zTiIp6DdacBK74sTNfPOBWOp/H0QmOnRKL96d2MxZQy/vS7Y8n4yc6W8aRDZy2c70ePkm+aGhwI2gT1b/fzptVREgv5YQgTO49KQAUzHI5Kkp5YGr+UYrmONQIPoTXTZTcNhe9gkv6wPDFqDK452RPPBFygtiomVxj25380AfwhQQ0mIx8kn7YOE6NEzQB0kHq5m0O5edB9YYptRnC23nnSUZkA59+Co5LPUq0zahLnXd5+UGBUOwJLlZNjE0rAY1IORgO9KBM4JCM9QvMox9Ri46qUgsEtlaIs2OrG/ti/Cfn5IHZiVq3uus3pa6PEVrZs6qXEnDEbwq98YuYfyfcthVOOd9Mg5TW+vdLbTdBga/xA7F4LGKNjn9/usutJx6cdRa3Muoj7w4Sdgjjidt15ZUSPSohCby+0TYCjLg4fBCZv4bl5aLoqICquox9Muj91L/4Md1OtUuLiSgq/YzQUngPxBHZrNRRmeuZayQkaIKD1PaMCYDiC3H6NZc95m7bIc9iu1svJTNyANQCMRX+Ayv0w49NdbW7RVd5mM5cFJJZwpdRn/vSzazVUWTn7QkgSrKY7PXOWCtn6YFa7MhUtpdrq6pVbzXkVpV7K1C4TEy4pwzREWZi8sbr0DQojuJB4g+7y0GopociYPDd/oZaE4UHgUNoxfWVhrimxeUZGBPVrshJNeMDIXH230q0ijdtKmU4Vm78CtnAD5lPL1i8kwCBz1OyJdriDsdHUvSh4G+SOTVP+OpvSiFn+2Ag64UsUULfuHmZzvZCs2RqNdM0MfmLBmppJuLgtqTJFP6SLHVsB0N2u8osJVt76YlX9R2tEFNcp5JHS/4FbIp3Rtmi1gqrvUzImZzVBWZm3qeyIqoZSILef5AC5Q8J3PFj41AJZ8yMVvrkxpnPD1eey5ol0RJZ+Lz23lPH+UWwX3EsYcf5NLAjWP+NQcrkMNhf9Jas58QWFyPgLj5JwQyK0C+6+eLXxqBKDm8u94S9kZii6s/YBetQHj4c/MW6Q2O+gagMzKpwYgURrL5LpwHhk/pu92Zr0QmN0aJHwxmZQ9fxU/k+8Cs5fY+kDfThSjl88jw+1xqQPiMLhYjMux6Z/2nizCohF5QtPZK9KH2v/qelSpjmRdeofbrW0KmuO1Yq/nljNJrz/rGHLU7XIN52jXnvMMPoep6d697zAxAQ7K4Z6fi+kOUWJ3++3ltPFliqg/+yzS4na9DFhj8ojnWcIIx1uMNdnl+ipmO0SZV2z/COPKpSmLiCKMoXimuZGgU5K49YARq+D6xXiQdTMz0CDpxh4/J3uPn/ggO/x0rvmEXxh0gDUv+RignhQFJgjawWlo4ZSWXxh/of2bXHN0vmB3PvwSPNFdD9buVvwB1PHWbajHwSgE5C/rd3j9I5LxrTPVl3OyZWu98nxpUO9a0s3AGSAzSTpE60s3Ly2WIpq26KgFe2xhRx8nABNM0dgGXaBN12iLmbbnS6aIM+hou/ZlwwOAI4OzPJp73lXJ0N5wAd7fpqdl1eV3jl7Bt7Pu7Tyfb006A+VD9fHyONOKUt5c4/4nqu5xOdZT6glEE9a+KZzkFzqIAVLoWHW3qi2KBHoWjyv2hqJoq1uHws3F7SJjY+H+IWe4+vAJtNamhQbJ3XAxKuBGk/WbvEIXdxdXBdGBJ9Eg1/e46Njg8Fj3OtoBwNhxUlbJHR4TKQakvb6TbPHsZ78AwI/vaMmSpvhWVwM6L12d01DuubaBkHnKPJLkYqNTkhfiulvAq9bu8go6lavdTsqILMiQO5hctcLHVnoVKHDOMuAyQ6qE3J3jHEddkV0LJGP28FJgySOXUovuGg+dEOh/bdYMhOfxDqFWw4FGsuk8vNKQLLkya44j/7lRXqQTBf2Xj0YINqDHOwEAjMfLk9Db2BW9Ks7LJb7RlTWy4s8zoIjKs3rjFKmX9IufyQFXlkSB9wCSu1woe35ZVmEeNroHEAwET6d9bF7hqRQh+bKcjW55DL7Dk/AkKV7JFa3eN4ZLI2HlOzyDb2hV7tsdVZS7/gcfkKbW8ny1SYD7NfxfJRlqQ4XHsuuV421MQDBMA96lxaB7cntnkCboaZgFwqLiZtJ0syRBs6ANgoFCXnaGdNGishGvMD1waVG5GyxD98Bgm4Z5EzdBd9m993qG+EjKgYEPyURWjROBxzCUIeodrsJykf5QRGyDbnCHXrX6MeTG+w9sgu7CszsALVFd4Hv5P7CqAZRiz3AlYVt0Q78Sq7nS3vfd/2wibiAXNfDIxHphnCgCPcXbaFULdOa/oXJnp4Pg+53OwUY6c7hF9Ke05CSQhkhesIjWjWifFzhNaNUdjeiKgLECnUi+AE4T/4sAqDUfdbSeJWCwPNCJ5AnH4FWlzZKH+mSKr3NLaAD/YEYQQMDWV62iiQsf7BT8fVvmeV1pvQDsJSZTcKC1Z9J5QQvwROHF+yDAy1728UOAKjwf3T7bEcDA10XRn33IErje2jEiuLba47gpdZT0tKkV4R4eq+c2jJkUtjgfXu2iFIUqamXbK2cNC47ub3PUTcB+qY5MIqOFDIYOpVRIC1eCrsM4SAjMldBqoN4+wRw1Ze9dbtv4IyGn9TNvvLpXqJc58cgoBbSzFyaNAHx5/RxQ7B8/z1rUe7psypPak8phg6F53eqJN3/EPp+LP2vXxiT2enmlFG22FBVb4WyRrg6xnWl/+EmtDLddXDJC3GrPThoNereUlWGmSG8E/ZLIOaGqtTiY6mGh3Ei8AZB2ZhYk9AYHDgyo1vwc1pYOqGpvkO86ArkZm+MrvV67b2lHpYF+pY0ouDNMGrWvL4U+QPJYRaLpNXej5tftMqc3HPXiWSHO2ug9eSSszXoIKLZbcv1emr3P8mpnNjhwd6/Exp1FItpVspRyf3rSVhHeV3QsAEUVes8pTcqxAGGngyj9LoJnWngNw76HT9XhLY0WVwK3Yj33a1IBcreKjXAHdRDE00XqnykJn0twYWS2Z5k+9LpRbGZWRusUA9nJSyIn4MBf2U3HXnxnpj9M3IW2oJvDCIduEmFHu+nHcLcRtIiSfKHyvs/Za8DH0ZON1AsDcgbhmQ5y7pCduS4gUbKhADJAqU8fatmK7odrn3UFLa57i6LXujmQ87C/57f2LRaT8tXl2c+r1OIs715DcVkx9G5YbN/+BxySvkXBJxyKAAAAAElFTkSuQmCC",
        description: "Ter o melhor design responsivo e com a melhor lógica que existe!!",
        category: "Cíclica",
        assigned: users,
        turn: 0
    },
    {
        name: "Usar SCSS para o design",
        image: "data:image/png;base64,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",
        description: "Melhor pré-compilador de scss, sem dúvida nenhuma!",
        category: "PONTUAL",
        assigned: users,
        turn: 0
    }
];


function seedDB() {
    //Clean the job database
    Job.remove({}, function (err) {
        if (err) {
            console.log(err);
        }
        //add a few jobs
        data.forEach(function (seed) {
           Job.create(seed, function (err, job) {
              if(err) {
                console.log(err);
              } else {

              }
           })
        });
    });

    //Clean the history database
    History.remove({}, function (err) {
        if (err) {
            console.log(err);
        }
    });

    User.remove({}, function (err) {
        if (err) {
            console.log(err);
        }
        //add a few jobs
        data.forEach(function (seed) {
            User.create(seed, function (err, user) {
                if(err) {
                    console.log(err);
                } else {

                }
            })
        });
    });
}

module.exports = seedDB;