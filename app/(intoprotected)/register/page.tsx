'use client';

import { Button, Card, Form, Input, Link } from '@heroui/react';

export default function page() {
  return (
    <Card className="py-8 px-6 w-80 ">
      <Form className="space-y-4">
        <p className="text-xl text-center font-semibold w-full">Register</p>
        {/* <Input color="primary" label="First Name" name="firstName" placeholder="Enter first name" type="text" variant="underlined" />
        <Input color="primary" label="Last Name" name="lastName" placeholder="Enter last name" type="text" variant="underlined" /> */}
        <Input color="primary" label="Email" name="email" placeholder="Enter email" type="email" variant="underlined" />
        <Input label="Password" name="password" placeholder="Enter password" type="password" variant="underlined" color="primary" />
        <Input label="Confirmation Password" name="confirmationPassword" placeholder="Enter confirmation password" type="password" variant="underlined" color="primary" />
        <Button color="primary" className="w-full">
          Register
        </Button>
        <div className="text-center text-sm w-full">
          <Link href="/login">Login</Link>
        </div>
      </Form>
    </Card>
  );
}
