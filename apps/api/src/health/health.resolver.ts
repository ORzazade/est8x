import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class HealthResolver {
  @Query(() => String, { name: 'status' })
  getStatus(): string {
    return 'ok';
  }
}