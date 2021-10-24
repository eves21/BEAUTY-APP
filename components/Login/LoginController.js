
contactApp.controller('LoginController', ['$scope', function($scope) {
    console.log("estamos en Login!");
    
    // Direccionamiento de usuario

    firebase.auth().onAuthStateChanged(function(user){
        if(user){
            window.location="../ListaContactos/ListaContactos.html";
        }
    });

    // Ingreso a la aplicación Login

    $scope.login = function(){

        var email = $scope.emailInput;
        var password = $scope.passwordInput;

        if(email && password){
            firebase.auth().signInWithEmailAndPassword(email,password)
            .then(function(){})
            .catch(function(error){
                console.log(error);
                if(error.code === 'auth/wrong-password'){
                    swal("Atención","Usuario o contraseña incorrectos!","warning");    
                }else if(error.code === 'auth/user-not-found'){
                    swal("Atención","Usuario no registrado!","warning");
                }
            })
        }else{
            swal("Atención","Falta diligenciar los campos","warning");
        }
    }

    // Recuperación de contraseña

    $scope.passwordRecover = function(){
        var email = $scope.emailInput;

        if(email){
            swal({
                title: "Atención",
                text: "Quieres recuperar la contraseña del correo " + email,
                icon: "warning",
                buttons: true,
                dangerMode: true,
              })
              .then((willDelete) => {
                if (willDelete) {
                    firebase.auth().sendPasswordResetEmail(email)
                    .then(function(){
                        swal("Atención","Revisa tu correo electrónico para recuperar","success");    
                    })
                    .catch(function(error){
                        console.log(error);
                    })
                } else {
                  
                }
              });
            

        }else{
            swal("Atención","Para recuperar debe escribir su correo","warning");
        }
    }

}]);