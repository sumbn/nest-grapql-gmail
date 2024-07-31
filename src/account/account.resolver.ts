import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AccountService } from 'src/account/account.service';
import { CreateAccountDto } from 'src/account/dto/accout.dto';
import { Account } from 'src/account/models/account.model';

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
