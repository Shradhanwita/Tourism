<?
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $address = $_POST['address'];
    $location = $_POST['location'];
    $guests = $_POST['guests'];
    $arrivals = $_POST['arrivals'];
    $leaving = $_POST['leaving'];

    $conn = mysqli_connect('localhost','root','','book_db');

    if($conn->connect_error){
        die('Connection failed: '.$conn->connect_error);
    }
    else{
        $stmt = $conn->prepare("insert into book_form(name, email,	phone, address,	location, guests, arrivals, leaving) values(?,?,?,?,?,?,?,?)");
        
        $stmt->bind_param("sssssiii", $name, $email, $phone, $address, $location,$guests,$arrivals,$leaving);
        $stmt->execute();
        echo "Registration successful";
        $stmt->close();
        $conn->close();
    }
?>