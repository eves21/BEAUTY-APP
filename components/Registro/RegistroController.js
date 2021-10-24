
contactApp.controller('RegistroController', ['$scope', function($scope) {
    console.log("estamos en Registrar!");

    // Direccionamiento de usuario

    firebase.auth().onAuthStateChanged(function(user){
        if(user){
            window.location="../ListaContactos/ListaContactos.html";
        }
    });

    // Función de registro de usuarios

    $scope.registrar = function(){
        var email = $scope.emailInput;
        var password = $scope.passwordInput;
        var verifyPassword = $scope.verifyPasswordInput;
        
        if(email && password && verifyPassword){
            if(password === verifyPassword){
                firebase.auth().createUserWithEmailAndPassword(email,password)
                .then(function(){
                    swal("Bien!","Usuario creado correctamente","success");
                })
                .catch(function(error){
                    console.log(error);
                    if(error.code === 'auth/email-already-in-use'){
                        swal("Atención","Usuario ya existe!","warning");
                    }else if(error.code === 'auth/weak-password'){
                        swal("Atención","Contraseña debe tener mínimo 6 carácteres!","warning");
                    }
                })
            }else{
                swal("Atención!","Contraseñas no son iguales","warning");    
            }
        }else{
            swal("Atención!","Falta diligenciar campos o correo no válido","warning");
        }
    }
 

}]);