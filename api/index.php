<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");


include 'DbConnect.php';
$objDb = new DbConnect;
$conn = $objDb->connect();


$method = $_SERVER['REQUEST_METHOD'];
switch($method) {
    case "GET":
        $sql = "SELECT * FROM cadastro_medico";
        $path = explode('/', $_SERVER['REQUEST_URI']);
        if(isset($path[3]) && is_numeric($path[3])) {
            $sql .= " WHERE id = :id";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':id', $path[3]);
            $stmt->execute();
            $users = $stmt->fetch(PDO::FETCH_ASSOC);
        } else {
            $stmt = $conn->prepare($sql);
            $stmt->execute();
            $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
        }

        echo json_encode($users);
        break;

    case 'POST':
        $user = json_decode(file_get_contents('php://input'));
        $sql = "INSERT INTO cadastro_medico(id, nome, crm, telefone, especialidade1, especialidade2, cep, estado, cidade, rua, created_at) VALUES(null, :nome, :crm, :telefone, :especialidade1, :especialidade2, :cep, :estado, :cidade, :rua, :created_at)";
        $stmt = $conn->prepare($sql);
        $created_at = date('Y-m-d');
        $stmt->bindParam(':nome', $user->nome);
        $stmt->bindParam(':crm', $user->crm);
        $stmt->bindParam(':telefone', $user->telefone);
        $stmt->bindParam(':especialidade1', $user->especialidade1);
        $stmt->bindParam(':especialidade2', $user->especialidade2);
        $stmt->bindParam(':cep', $user->cep);
        $stmt->bindParam(':estado', $user->estado);
        $stmt->bindParam(':cidade', $user->cidade);
        $stmt->bindParam(':rua', $user->rua);
        $stmt->bindParam(':created_at', $user->created_at);
        if($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Cadastro feito com sucesso!'];

        }else {
            $response = ['status' => 0, 'message' => 'Falha no cadastro'];
        }
        echo json_encode($response);
        break;
    
    case "PUT":
        $user = json_decode( file_get_contents('php://input') );
        $sql = "UPDATE cadastro_medico SET nome =:nome, crm =:crm, telefone =:telefone, especialidade1 =:especialidade1, especialidade2 =:especialidade2, cep =:cep, estado =:estado, cidade =:cidade, rua =:rua, updated_at =:updated_at WHERE id =:id";
        $stmt = $conn->prepare($sql);
        $updated_at = date('Y-m-d');
        $stmt->bindParam(':id', $user->id);
        $stmt->bindParam(':nome', $user->nome);
        $stmt->bindParam(':crm', $user->crm);
        $stmt->bindParam(':telefone', $user->telefone);
        $stmt->bindParam(':especialidade1', $user->especialidade1);
        $stmt->bindParam(':especialidade2', $user->especialidade2);
        $stmt->bindParam(':cep', $user->cep);
        $stmt->bindParam(':estado', $user->estado);
        $stmt->bindParam(':cidade', $user->cidade);
        $stmt->bindParam(':rua', $user->rua);
        $stmt->bindParam(':updated_at', $updated_at);
        
        if($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Atualizado com sucesso!.'];
        } else {
            $response = ['status' => 0, 'message' => 'Falha ao tentar atualizar.'];
        }
        echo json_encode($response);
        break;

    case "DELETE":
            $sql = "DELETE FROM cadastro_medico WHERE id = :id";
            $path = explode('/', $_SERVER['REQUEST_URI']);
    
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':id', $path[3]);
    
            if($stmt->execute()) {
                $response = ['status' => 1, 'message' => 'Deletado com sucesso.'];
            } else {
                $response = ['status' => 0, 'message' => 'Falha em tentar deletar'];
            }
            echo json_encode($response);
            break;


    
        
}