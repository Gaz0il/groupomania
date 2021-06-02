export interface Post {
id_user: number,
     
message: string,
     
image: string,

createdAt:string,

updatedAt:string,


user: {  first_name:string;  last_name:string }

}
