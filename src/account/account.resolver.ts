import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Account } from './models/account.model';
import { AccountService } from './account.service';
import { CreateAccountDto } from './dto/accout.dto';

@Resolver()
export class AccountResolver {
  constructor(private accountService: AccountService) {}

  @Query(() => [Account])
  async accounts(): Promise<Account[]> {
    return await this.accountService.findAll();
  }

  @Query(() => Account)
  async account(@Args('id') id: number): Promise<Account> {
    return await this.accountService.findOne(Number(id));
  }

  @Mutation(() => Account)
  async createAccount(
    @Args('account') data: CreateAccountDto,
  ): Promise<Account> {
    return await this.accountService.create(data);
  }
}
