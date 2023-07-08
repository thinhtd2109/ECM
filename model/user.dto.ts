
import { BaseUuidDto } from './common.dto';

export class UserProfileDto extends BaseUuidDto {
    user_id?: string;
    first_name: string;
    last_name: string;
    date_of_birth: string;
    address: string;
    phone_number: string;
}

export class UserDto extends BaseUuidDto {
    username: string;
    email: string;
    password: string;
}

export class RegisterUserDto extends UserDto {
    profile: UserProfileDto;
}