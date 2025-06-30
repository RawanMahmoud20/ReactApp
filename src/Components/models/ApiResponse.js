class ApiResponse {
constructor(message , status , data = null,token ){
    this.message = message;
    this.status = status;
    this.data = data;
    this.token = token ;
}
}
export default ApiResponse ;