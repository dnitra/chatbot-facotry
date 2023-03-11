<?php

namespace Tests;

use Illuminate\Foundation\Testing\TestCase as BaseTestCase;

abstract class TestCase extends BaseTestCase
{
    use CreatesApplication;

    //test this without vit
    protected function setUp(): void
    {
        parent::setUp();
        $this->withoutVite();
    }
}
