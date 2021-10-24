
contactApp.controller('CrearController', ['$scope', function($scope) {
    console.log("estamos en crear!");
    // Direccionamiento de usuario


    // Función de crear

    $scope.crear = function(){
        
        var name = $scope.nameInput;
        var code = $scope.codeInput;
        var user = firebase.auth().currentUser;

        if(name && code ){
            db.collection(user.email).doc(name).set({
                nombre: name,
                referencia: code,
                
            })
            .then(function(docRef){
                swal("Bien!","Producto Agregado!","success");
                $scope.nameInput = undefined;
                $scope.codeInput = undefined;
                $scope.$apply();
            })
            .catch(function(error){
                console.error(error);
                swal("Error","Problemas en base de datos!","error");
            });


        }
        else{
            swal("Atención","Faltan diligenciar campos","warning");
        }    

    }  

}]);