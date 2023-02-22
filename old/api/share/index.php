<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers:*');

use PHPMailer\PHPMailer\PHPMailer;

require 'vendor/autoload.php';

$mail = new PHPMailer(true);

@$content = $_POST['content'];
@$subject = $_POST['subject'];
@$toEmail = $_POST['to'];
@$addCC = $_POST['addCC'];
// $toEmail = 'alvin.ndsi@gmail.com';
$fromEmail = 'umicamp@um.ac.id';

$mail = new PHPMailer;
$mail->isSMTP();                                   // Set mailer to use SMTP
$mail->Host = 'smtp.gmail.com';                    // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                            // Enable SMTP authentication
$mail->Username = 'poweredby.nemuid@gmail.com';
$mail->Password = 'M0krajbal@17';
$mail->SMTPSecure = 'tls';                         // Enable TLS encryption, `ssl` also accepted
$mail->Port = 587;                                 // TCP port to connect to

$mail->setFrom($fromEmail, 'UM iCamp 2020 Team');
$mail->addReplyTo($fromEmail, 'UM iCamp 2020 Team');
if($addCC) $mail->addCC($fromEmail);
$mail->addAddress($toEmail);   // Add a recipient
$mail->isHTML(true);  // Set email format to HTML

$mail->Subject = $subject;
$mail->Body    = $content;

try {
    if ($mail->send()) {
        echo json_encode([
            "status" => "success",
            "error" => false,
            "message" => "Successfully send email",
        ]);
        http_response_code(200);
    } else {
        throw new Error('Failed send email');
    }
} catch (Exception $exception) {
    echo json_encode([
        "status" => "error",
        "error" => true,
        "message" => "Error exception",
        "exception" => $exception,
    ]);
    http_response_code(404);
}
