'use client';

import { Button, Card, Form, Input, Link } from '@heroui/react';

export default function page() {
  return (
    <Card className="py-8 px-6 w-80 ">
      <Form className="space-y-4">
        <p className="text-xl text-center font-semibold w-full">Login</p>
        <Input color="primary" label="Email" name="email" placeholder="Enter email" type="email" variant="underlined" />
        <Input label="Password" name="password" placeholder="Enter password" type="password" variant="underlined" color="primary" />
        <Button color="primary" className="w-full">
          Login
        </Button>
        <div className="text-center text-sm w-full">
          <Link href="/register">Register</Link>
        </div>
      </Form>
    </Card>
  );
}
